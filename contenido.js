// =====================================================================
//  CONTENIDO DE LA PÁGINA
//  Este es el ÚNICO archivo que necesitas cambiar para actualizar textos,
//  anuncios y preguntas. Cambia solo lo que está entre comillas "...".
// =====================================================================

export const daycare = {
  nombre: "Pacheco Family Day Care",
  eslogan: "Cuidamos de sus niños con amor y dedicación",
  descripcionCorta:
    "Cuidamos de sus niños desde 6 semanas hasta 13 años. Contamos con un personal capacitado y con experiencia.",
  sobreNosotros:
    "Somos un day care familiar en Middletown, NY. Nuestro personal capacitado y con experiencia cuida de cada niño como parte de nuestra familia.",

  // Correo donde llegarán los mensajes del formulario
  correo: "TU-CORREO@ejemplo.com",

  // Teléfonos para mostrar, y número de WhatsApp (solo números, con el 1 al inicio)
  telefono: "845-394-3177",
  telefonoWhatsapp: "914-446-4787",
  whatsapp: "19144464787",

  direccion: ["77 Prince St.", "Middletown, NY 10940"],
  horario: ["Lunes a viernes: 7:00 a.m. – 6:00 p.m.", "Sábados y domingos: cerrado"],
  edades: ["Desde 6 semanas hasta 13 años"],
};

// ---------------------------------------------------------------------
//  ANUNCIOS — el primero de la lista aparece primero en la página.
//  Para agregar uno, copia un bloque { ... }, pégalo arriba y cámbialo.
//  importante: true  -> muestra la etiqueta morada "Importante"
// ---------------------------------------------------------------------
export const anuncios = [
  {
    fecha: "15 de octubre, 2026",
    titulo: "Inscripciones abiertas",
    texto: "Ya están abiertas las inscripciones. Escríbenos para separar el cupo de tu niño o niña.",
    importante: true,
  },
  {
    fecha: "20 de octubre, 2026",
    titulo: "Reunión de padres",
    texto: "Les esperamos a las 5:00 p.m. para compartir las actividades del mes.",
    importante: false,
  },
  {
    fecha: "31 de octubre, 2026",
    titulo: "Día de disfraces",
    texto: "Los niños pueden venir disfrazados. ¡Habrá juegos y merienda especial!",
    importante: false,
  },
];

// ---------------------------------------------------------------------
//  SERVICIOS (sección "Quiénes somos")
// ---------------------------------------------------------------------
export const servicios = [
  { emoji: "🍎", titulo: "Alimentación", texto: "Meriendas y almuerzos balanceados." },
  { emoji: "📚", titulo: "Estimulación", texto: "Actividades para aprender jugando." },
  { emoji: "🛝", titulo: "Recreación", texto: "Juegos, música y arte cada día." },
  { emoji: "🛡️", titulo: "Seguridad", texto: "Personal atento y espacios protegidos." },
];

// ---------------------------------------------------------------------
//  CENTRO DE AYUDA (preguntas frecuentes)
// ---------------------------------------------------------------------
export const preguntas = [
  {
    pregunta: "¿Cómo inscribo a mi hijo?",
    respuesta: "Escríbenos en la sección de Contacto o visítanos. Te explicaremos los requisitos y te daremos una cita.",
  },
  {
    pregunta: "¿Qué debe llevar mi niño cada día?",
    respuesta: "Una muda de ropa extra, pañales (si usa) y su botella de agua con su nombre.",
  },
  {
    pregunta: "¿Qué pasa si mi hijo se enferma?",
    respuesta: "Te llamamos de inmediato. Por la salud de todos, los niños con fiebre deben quedarse en casa.",
  },
  {
    pregunta: "¿Quién puede recoger a mi hijo?",
    respuesta: "Solo las personas autorizadas por escrito en la ficha de inscripción.",
  },
  {
    pregunta: "¿No encuentras tu respuesta?",
    respuesta: "Envíanos tu pregunta en el formulario de contacto y te responderemos lo antes posible.",
  },
];
