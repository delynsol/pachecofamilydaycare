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
  horario: ["Dommingos a viernes: 7:00 a.m. – 6:00 p.m.", "Sábados: cerrado"],
  edades: ["Desde 6 semanas hasta 13 años"],
};

// ---------------------------------------------------------------------
//  ANUNCIOS — el primero de la lista aparece primero en la página.
//  Para agregar uno, copia un bloque { ... }, pégalo arriba y cámbialo.
//  importante: true  -> muestra la etiqueta morada "Importante"
//  efemeride: true   -> muestra la etiqueta "Efeméride" y la tarjeta
//                       ocupa todo el ancho. Puede llevar una lista
//                       de "etapas" (cada una con emoji, edad y consejos)
//                       y una lista de "fuentes" con enlaces.
//  En cada consejo:  si: true -> ✅ (recomendado)   si: false -> 🚫 (evitar)
// ---------------------------------------------------------------------
export const anuncios = [
  {
    fecha: "16 de octubre, 2026",
    titulo: "🌎 Día Mundial de la Alimentación",
    texto:
      "Comer bien ayuda a crecer, aprender y jugar. Esto es lo más importante para cada edad, en 1 minuto:",
    efemeride: true,
    etapas: [
      {
        emoji: "🍼",
        edad: "0 a 6 meses",
        consejos: [
          { si: true, texto: "Solo leche materna o fórmula.", fuente: "AAP" },
          { si: false, texto: "No necesita agua ni leche de vaca.", fuente: "AAP" },
          { si: false, texto: "Nunca fórmula hecha en casa.", fuente: "FDA" },
        ],
      },
      {
        emoji: "🥣",
        edad: "6 a 12 meses",
        consejos: [
          { si: true, texto: "Primeras comidas cerca de los 6 meses, sin sal.", fuente: "AAP" },
          { si: true, texto: "Un alimento nuevo a la vez.", fuente: "AAP" },
          { si: true, texto: "Comidas con hierro: carnes o cereal fortificado.", fuente: "FDA" },
          { si: true, texto: "Puede probar huevo, yogur y pescado bien cocidos.", fuente: "AAP" },
        ],
      },
      {
        emoji: "🧒",
        edad: "1 a 3 años",
        consejos: [
          { si: true, texto: "Agua y leche entera (hasta los 2 años).", fuente: "AAP" },
          { si: true, texto: "Pescado bajo en mercurio, 2 veces por semana.", fuente: "FDA" },
          { si: true, texto: "Fruta entera en trocitos pequeños y blandos.", fuente: "AAP" },
          { si: false, texto: "Uvas y salchichas siempre picaditas (hasta los 4 años).", fuente: "AAP" },
        ],
      },
      {
        emoji: "🍎",
        edad: "4 a 6 años",
        consejos: [
          { si: true, texto: "El agua es la mejor bebida en todas las comidas.", fuente: "AAP" },
          { si: true, texto: "Plato variado: frutas, vegetales, granos y proteínas.", fuente: "FDA" },
          { si: true, texto: "Leche baja en grasa (descremada o 1%).", fuente: "AAP" },
        ],
      },
      {
        emoji: "🎒",
        edad: "7 a 13 años",
        consejos: [
          { si: true, texto: "Pescado bajo en mercurio, 2 veces por semana.", fuente: "FDA" },
          { si: true, texto: "Frutas enteras: 2 a 2½ tazas al día.", fuente: "AAP" },
          { si: false, texto: "Nada de bebidas energéticas ni refrescos.", fuente: "AAP" },
        ],
      },
    ],
    cierre:
      "En Pacheco Family Day Care servimos meriendas y almuerzos balanceados. ¿Dudas sobre la alimentación de su niño? Consulte a su pediatra. 🥕🍌🥦",
    fuentes: [
      {
        nombre: "AAP: Bebidas sanas por edad",
        url: "https://downloads.aap.org/dochw/dshp/Healthy%20Beverage%20Quick%20Reference%20Guide_Updated_9.1.23.pdf",
      },
      {
        nombre: "AAP: Frutas para cada edad",
        url: "https://www.healthychildren.org/English/news/Pages/AAP-Recommends-No-Fruit-Juice-For-Children-Under-1-Year.aspx",
      },
      {
        nombre: "AAP: Primeras comidas",
        url: "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx",
      },
      {
        nombre: "AAP: Prevenir atragantamientos",
        url: "https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx",
      },
      { nombre: "FDA: Consejos sobre pescado", url: "https://www.fda.gov/food/consumers/advice-about-eating-fish" },
      {
        nombre: "FDA: Alimentación de bebés y niños pequeños",
        url: "https://www.fda.gov/food/hfp-constituent-updates/fda-shares-action-plan-reducing-exposure-toxic-elements-foods-babies-and-young-children",
      },
    ],
    importante: false,
  },
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
