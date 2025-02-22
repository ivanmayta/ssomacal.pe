import slugify from "slugify"

const servicios = [
    {
        title: "Consultoría Ambiental",
        description:
            "Organización de programas de capacitación en Gestión Ambiental",
        images: [
            "https://ssomacal.com/wp-content/uploads/2022/04/Organizacion-de-programas-de-capacitaciones-en-seguridad-y-salud..jpg",
            "https://ssomacal.com/wp-content/uploads/2022/04/Proteccion-legal-frente-a-inspecciones-de-SUNAFIL..jpg",
        ],
        actions: [
            "Medicina ocupacional",
            "Realización de elecciones para conformar e instalar el Comité de Seguridad y Salud en el trabajo",
            "Elaboración del Reglamento de Seguridad y Salud en el Trabajo y demás documentos obligatorios del Sistema",
            "Asesoramiento en la determinación de la toma de los Exámenes ocupacionales obligatorios",
            "Elaboración de protocolos y procedimientos de prevención y protección frente a contingencias de accidentes de trabajo",
            "Protección legal frente a inspecciones de SUNAFIL",
            "Elaboración y adecuación de los registros obligatorios del sistema de seguridad",
        ],
    },
    {
        title: "Asesoría Laboral",
        images: [
            "https://ssomacal.com/wp-content/uploads/2022/04/Asesoria-Laboral.jpg",
            "https://ssomacal.com/wp-content/uploads/2022/06/ELABORACION-DE-MATRIZ-IPERC-Y-MAPA-DE-RIESGO.jpg",
        ],
        description:
            "Elaboración de los Planes de Vigilancia frente al COVID-19 conforme a lo establecido por el MINSA",
        actions: [
            "Plan de manejo de RRSS",
            "Residuos Sólidos. Manejo y disposición final",
            "Medición de Huella de Carbono",
            "Ergonomía. Medición y Gestión",
            "Dosimetría. Medición y Gestión",
            "Luxometría. Medición y Gestión",
            "Agua Residual. Medición y Gestión",
        ],
    },
    {
        title: "Capacitación Integral",
        images: [
            "https://ssomacal.com/wp-content/uploads/2022/04/Capacitacion-Integral-300x225.jpg",
            "https://ssomacal.com/wp-content/uploads/2022/06/ELABORACION-DE-MATRIZ-IPERC-Y-MAPA-DE-RIESGO.jpg",
        ],
        description:
            "Elaboración de Protocolos y Procedimientos de prevención y protección frente a contingencias de accidentes de trabajo.",
        actions: [
            "Investigación de accidentes",
            "Primeros auxilios",
            "Sistemas de evacuación",
            "Prevención de riesgos y accidentes de trabajo",
            "Uso y mantenimiento de EPP",
            "Conformación de las brigadas de emergencias",
            "Medicina y seguridad ocupacional",
            "Charlas y capacitación del personal en calidad, ambiental y SST",
            "Capacitación y preparación para la homologación como proveedor",
            "Almacenamiento y manejo de materiales peligrosos",
            "Otros, según necesidad del cliente",
        ],
    },
    {
        title: "Prevención de Riesgos",
        images: [
            "https://ssomacal.com/wp-content/uploads/2022/04/Monitoreo-de-agentes-fisicos-quimicos-y-biologicos-presentes-en-ambiente-de-trabajos-300x300.jpg",
            "https://ssomacal.com/wp-content/uploads/2022/04/Monitoreo-Plan-de-manejo-de-RRSS-1.jpg",
        ],
        description:
            "Monitoreo de agentes físicos, químicos y biológicos, presente en ambiente de trabajos.",
        actions: [
            "Plan de manejo de RRSS",
            "Residuos Sólidos. Manejo y disposición final",
            "Medición de Huella de Carbono",
            "Ergonomía. Medición y Gestión",
            "Dosimetría. Medición y Gestión",
            "Luxometría. Medición y Gestión",
            "Agua Residual. Medición y Gestión",
        ],
    },
]
const SERVICIOS = servicios.map((servicio) => {
    return {
        id: slugify(servicio.title, { lower: true }),
        ...servicio,
    }
})
export default SERVICIOS
