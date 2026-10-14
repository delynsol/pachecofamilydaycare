# Página web del Day Care (Next.js)

## ¿Qué archivo cambio?

- **contenido.js**: nombre, correo, teléfono, horario, **anuncios** y **preguntas de ayuda**.
  Cambia solo el texto entre comillas `"..."`.
- **app/globals.css**: colores (al inicio del archivo).

No hace falta tocar nada más.

## ¿Cómo se publica?

1. Los archivos se guardan en **GitHub**.
2. **Netlify** toma los archivos de GitHub y publica la página sola.
3. Cada vez que cambias un archivo en GitHub, Netlify actualiza la página en 1–2 minutos.

## Formulario de contacto

Los mensajes se envían con **FormSubmit** al correo escrito en `contenido.js`.
La primera vez que alguien envíe un mensaje, FormSubmit te mandará un correo
para **confirmar**. Ábrelo y toca el botón de activar. Desde ahí, todo llega directo.
