// Netlify Function — publica vacantes-estado.js en GitHub
// El token de GitHub vive en las variables de entorno de Netlify (GITHUB_TOKEN)
// — nunca se expone al navegador.

const GH_REPO   = 'veranoborrero-boop/4g-workwithus';
const GH_BRANCH = 'main';
const GH_FILE   = 'vacantes-estado.js';
const GH_API    = `https://api.github.com/repos/${GH_REPO}/contents/${GH_FILE}`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GITHUB_TOKEN no está configurado en Netlify.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'JSON inválido' }) };
  }

  const { content } = body;
  if (!content) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Falta el contenido del archivo' }) };
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };

  // 1. Obtener SHA del archivo actual
  const getRes = await fetch(`${GH_API}?ref=${GH_BRANCH}`, { headers });
  if (!getRes.ok) {
    const err = await getRes.json().catch(() => ({}));
    return {
      statusCode: getRes.status,
      body: JSON.stringify({ error: `GitHub: ${err.message || getRes.status}` })
    };
  }
  const { sha } = await getRes.json();

  // 2. Commit con el nuevo contenido
  const contentB64 = Buffer.from(content, 'utf8').toString('base64');
  const now = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });

  const putRes = await fetch(GH_API, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: `Admin RR.HH.: actualizar vacantes — ${now}`,
      content: contentB64,
      sha,
      branch: GH_BRANCH
    })
  });

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({}));
    return {
      statusCode: putRes.status,
      body: JSON.stringify({ error: `GitHub: ${err.message || putRes.status}` })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true })
  };
};
