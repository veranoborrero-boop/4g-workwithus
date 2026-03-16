// ═══════════════════════════════════════════════════════════════
//  VACANTES 4G ARCHITECTURE
//  Archivo de gestión de posiciones — Equipo de Recursos Humanos
// ═══════════════════════════════════════════════════════════════
//
//  CÓMO USAR:
//  • Para CERRAR una vacante: cambia  activa: true  →  activa: false
//  • Para ABRIR una vacante:  cambia  activa: false →  activa: true
//  • Para AGREGAR un cargo nuevo: copia el bloque de un cargo existente
//    y ajusta los datos. Asegúrate de que el id sea único.
//
//  ÁREAS DISPONIBLES (campo "area"):
//    "arq"  → Arquitectura
//    "ing"  → Ingeniería
//    "mgmt" → Management
//    "fin"  → Finanzas
//    "com"  → Comercial
//    "tec"  → Técnico
//
// ═══════════════════════════════════════════════════════════════

const VACANTES = [

  {
    id: "technician-junior",
    titulo: "Technician Junior",
    area: "tec",
    areaLabel: "Técnico",
    ubicacion: "Barranquilla",
    salario: "$1.8 MM COP",
    activa: true,
    requisitos: [
      "Técnico o tecnólogo egresado SENA",
      "Manejo de Revit - AutoCAD",
      "Experiencia de 6 meses",
      "Contrato a termino indefinido"
    ]
  },

  {
    id: "bi-analyst",
    titulo: "Business Intelligence Analyst",
    area: "fin",
    areaLabel: "Finanzas",
    ubicacion: "Barranquilla",
    salario: "$5.0 MM COP",
    activa: true,
    descripcion: "Responsable de transformar datos en insights que generen valor para la organización. Brindar soporte a la toma de decisiones estratégicas mediante el análisis de datos, la generación de informes relevantes. Desarrollar dashboards o modelos para proyectar ingresos, gastos y otros indicadores clave. Analizar estados financieros, KPIs operativos y métricas de desempeño del negocio. Diseñar, actualizar y mantener dashboards e informes utilizando herramientas de BI (Power BI u otras).",
    requisitos: [
      "Profesional en Ingeniería Industrial",
      "Más de 2 años de experiencia en cargos de apoyo a procesos y análisis de indicadores",
      "Enfoque y experiencia Financiera",
      "Certificación o cursos en gestión y optimización de procesos (Lean, BPM, Kaizen o equivalentes)",
      "Conocimientos en análisis y visualización de datos (Power BI, Excel avanzado)",
      "Nivel de Inglés C1"
    ]
  },

  {
    id: "project-manager-senior",
    titulo: "Project Manager Senior",
    area: "mgmt",
    areaLabel: "Management",
    ubicacion: "Barranquilla",
    salario: "$7.0 MM COP",
    activa: true,
    requisitos: [
      "Profesional en Arquitectura o carreras afines",
      "Manejo Intermedio - avanzado de CAD y REVIT",
      "Experiencia de más de 3 años en manejo de equipos de trabajo",
      "Conocimiento de metodología BIM en proyectos de construcción",
      "Inglés avanzado nivel B2 - C1"
    ]
  },

  {
    id: "consultant-senior",
    titulo: "Consultant Senior",
    area: "arq",
    areaLabel: "Arquitectura",
    ubicacion: "Barranquilla",
    salario: "$6.8 MM COP",
    activa: true,
    requisitos: [
      "Profesional en Arquitectura",
      "Manejo de Revit y AutoCAD Avanzado",
      "Experiencia por más de 2 años liderando equipos de trabajo",
      "Experiencia en desarrollo de documentos de planimetría técnica de proyectos",
      "Experiencia BIM en Obra",
      "Inglés avanzado nivel B2 - C1"
    ]
  },

  {
    id: "cfo",
    titulo: "CFO / Director Financiero",
    area: "fin",
    areaLabel: "Finanzas",
    ubicacion: "Barranquilla",
    salario: "$15 MM COP",
    activa: false,
    requisitos: [
      "Licenciatura en Contabilidad, Finanzas o Administración de Empresas con más de 10 años de experiencia, incluyendo al menos 5 años en roles de Controller, Director Financiero (CFO) o Auditor Senior, preferiblemente en la industria del proyecto (ej., construcción, tecnología, energía)",
      "Deseable Maestría (MBA o M.S. in Accounting)",
      "CPA (Certified Public Accountant) / Tarjeta profesional es obligatorio",
      "Dirección estratégica, gestión de riesgos, aprobación de informes financieros",
      "Cumplimiento US GAAP/NIIF, planificación fiscal estratégica, análisis de costo-beneficio, dominio de ERPs avanzados (ej., SAP, Oracle, NetSuite)",
      "Liderazgo, pensamiento crítico, comunicación ejecutiva (presentación de resultados a inversores o dirección), negociación, y capacidad de actuar como asesor de confianza",
      "Inglés avanzado conversacional nivel C1"
    ]
  },

  {
    id: "contador-proyectos",
    titulo: "Contador de Proyectos / Líder Operativo",
    area: "fin",
    areaLabel: "Finanzas",
    ubicacion: "Barranquilla",
    salario: "$6.5 MM COP",
    activa: true,
    requisitos: [
      "Profesional con experiencia en contabilidad de costos (5–10 años)",
      "CPA (Certified Public Accountant) / Tarjeta profesional es obligatorio",
      "Aplicación de EVM (Earned Value Management), control presupuestal",
      "Dominio normativo en US GAAP, IFRS",
      "Experiencia comprobada liderando presupuestos de proyectos",
      "Dominio de ERPs avanzados (ej., SAP, Oracle, NetSuite)",
      "Gestión de cambios (scope, costo y tiempo) y análisis de impacto",
      "Elaboración y seguimiento de forecast financiero del proyecto, Análisis de variaciones (CV, SV, CPI, SPI) y planes de acción",
      "Inglés avanzado conversacional nivel C1"
    ]
  },

  {
    id: "arquitecto-senior",
    titulo: "Arquitecto Senior",
    area: "arq",
    areaLabel: "Arquitectura",
    ubicacion: "Barranquilla",
    salario: "$4.2 MM COP",
    activa: true,
    requisitos: [
      "Profesional en Arquitectura",
      "Experiencia en obra",
      "Manejo avanzado de CAD Y REVIT",
      "Inglés nivel B2",
      "Experiencia en proyectos de arquitectura por más de 2 años"
    ]
  },

  {
    id: "arquitecto-junior",
    titulo: "Arquitecto Junior",
    area: "arq",
    areaLabel: "Arquitectura",
    ubicacion: "Barranquilla",
    salario: "$2.5 MM COP",
    activa: true,
    requisitos: [
      "Profesional en Arquitectura",
      "Inglés nivel B2",
      "Manejo avanzado de CAD Y REVIT",
      "Experiencia en proyectos de arquitectura por más de 1 año"
    ]
  },

  {
    id: "engineer-junior",
    titulo: "Engineer Junior",
    area: "ing",
    areaLabel: "Ingeniería",
    ubicacion: "Barranquilla",
    salario: "$2.6 MM COP",
    activa: true,
    requisitos: [
      "Ingeniero Eléctrico, Ingeniero Electrónico o afines",
      "Experiencia en dibujo y modelado de proyectos de ingeniería MEP",
      "Inglés B2",
      "1 año de experiencia laboral en manejo de proyectos",
      "Software: Revit, NavisWorks, DiaLux (preferiblemente), Autocad"
    ]
  },

  {
    id: "engineer-senior",
    titulo: "Engineer Senior",
    area: "ing",
    areaLabel: "Ingeniería",
    ubicacion: "Barranquilla",
    salario: "$4.2 MM COP",
    activa: true,
    requisitos: [
      "Ingeniero Eléctrico, Ingeniero Electrónico o afines",
      "Experiencia en dibujo y modelado de proyectos de ingeniería MEP",
      "Inglés B2 - C1",
      "2-3 años de experiencia laboral en manejo de proyectos y/o construcciones",
      "Software: Revit, NavisWorks, DiaLux (preferiblemente), Autocad"
    ]
  },

  {
    id: "engineer-senior-electrico",
    titulo: "Engineer Senior (Ingeniero Eléctrico)",
    area: "ing",
    areaLabel: "Ingeniería",
    ubicacion: "Barranquilla",
    salario: "$3.8 MM COP",
    activa: true,
    requisitos: [
      "Diseñar sistemas eléctricos para diferentes proyectos de edificios (residencial, institucional, comercial, hostelería, etc.)",
      "Preparar especificaciones técnicas, diagramas unifilares, calendarios de paneles, planos y cálculos para sistemas de iluminación, baja tensión y de energía",
      "Coordina con los equipos estructurales, civiles, mecánicos, de fontanería y arquitectura para garantizar una entrega fluida del proyecto",
      "Desarrollar cálculos de cortocircuitos y caídas de voltaje",
      "Uso intensivo de AutoCAD y Revit (obligatorio)",
      "Inglés nivel B2-C1",
      "Conocimientos sobre las normas NFPA y los códigos de construcción aplicables",
      "Capacidad para trabajar de forma colaborativa con equipos"
    ]
  },

  {
    id: "ingeniero-senior-mep-plumbing",
    titulo: "Ingeniero Senior MEP (Enfoque Plumbing)",
    area: "ing",
    areaLabel: "Ingeniería",
    ubicacion: "Barranquilla",
    salario: "$3.8 MM COP",
    activa: true,
    requisitos: [
      "Ingeniero mecánico, Ingeniero civil, Arquitecto con experiencia MEP o cargos afines",
      "Conocimiento de los criterios de diseño para los sistemas de fontanería",
      "Distribución y diseño de sistemas de fontanería, incluyendo alcantarillado sanitario, alcantarillado de proceso, agua potable, agua caliente, gas natural y drenaje de tejados",
      "Uso de AutoCAD, Revit u otro software para crear paquetes de documentos de construcción de fontanería que incluyen conexiones de accesorios de fontanería, conexiones de equipos y tuberías asociadas, diagramas isométricos de riser, horarios apropiados, detalles y especificaciones de construcción",
      "Uso intensivo de AutoCAD y Revit (obligatorio). Navisworks (idealmente)",
      "Inglés nivel B2-C1"
    ]
  },

  {
    id: "plumbing-design-engineer",
    titulo: "Plumbing Design Engineer",
    area: "ing",
    areaLabel: "Ingeniería",
    ubicacion: "Barranquilla",
    salario: "A convenir",
    activa: true,
    requisitos: [
      "Profesional en ingeniería civil, ingeniería electrica o afines",
      "Conocimiento en criterios y diseño de sistemas de plumbing",
      "Experiencia en diseño de sistemas sanitarios, agua potable y caliente, gas natural y drenaje pluvial",
      "Elaboración de documentos y especificaciones técnicas de diseño",
      "Uso de AutoCAD y Revit para planos constructivos, isométricos y detalles",
      "Experiencia en cálculos de cargas, dimensionamiento de tuberías y equipos",
      "Coordinación y trabajo colaborativo con equipos multidisciplinarios",
      "Nivel de inglés avanzado B2 – C1"
    ]
  },

  {
    id: "business-development-executive",
    titulo: "Business Development Executive",
    area: "com",
    areaLabel: "Comercial",
    ubicacion: "Barranquilla",
    salario: "$7.0 MM COP + esquema de comisiones",
    activa: false,
    descripcion: "Buscamos una persona proactiva y orientada a resultados, encargada de realizar la búsqueda activa de nuevos clientes, mediante investigación comercial e identificando oportunidades de negocio.",
    requisitos: [
      "Profesional de Arquitectura, Ingeniería civil, Administración de empresas o carreras afines",
      "2 años de experiencia en gestión / cargos comerciales",
      "Bilingüe - Inglés avanzado C1"
    ]
  },

  {
    id: "project-manager-junior",
    titulo: "Project Manager Junior",
    area: "mgmt",
    areaLabel: "Management",
    ubicacion: "Barranquilla",
    salario: "$5.1 MM COP",
    activa: true,
    requisitos: [
      "Profesional en Ingeniería civil, Ingeniería Eléctrica, Arquitectura o afines",
      "Manejo Avanzado de REVIT y AutoCAD, BIM",
      "Inglés nivel B2 Conversacional",
      "Experiencia en coordinación, preferiblemente en ejecución de proyectos",
      "Experiencia en liderazgo de equipos",
      "Experiencia en desarrollo de documentos de planimetría técnica de proyectos"
    ]
  }

];
