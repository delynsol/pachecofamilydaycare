import Menu from "./Menu";
import { daycare, anuncios, servicios, preguntas } from "../contenido";

export default function Inicio() {
  const anio = new Date().getFullYear();

  return (
    <>
      <Menu nombre={daycare.nombre} />

      {/* ======================== PORTADA ======================== */}
      <section className="portada" id="inicio">
        <div className="contenedor">
          <div>
            <h1>{daycare.eslogan}</h1>
            <p>{daycare.descripcionCorta}</p>
            <a href="#contacto" className="btn btn-principal">Escríbenos</a>
            <a href="#anuncios" className="btn btn-secundario">Ver anuncios</a>
          </div>
          <img
            className="tarjeta"
            src="/tarjeta.png"
            alt={`Tarjeta de ${daycare.nombre}`}
            width={1050}
            height={600}
          />
        </div>
      </section>

      {/* ======================== ANUNCIOS ======================== */}
      <section id="anuncios">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>📢 Anuncios</h2>
            <p>Lo más reciente para nuestras familias</p>
          </div>
          <div className="anuncios">
            {anuncios.map((a, i) => (
              <article
                key={i}
                className={["anuncio", a.importante && "importante", a.efemeride && "efemeride"]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="fecha">{a.fecha}</span>
                {a.importante && <span className="etiqueta">Importante</span>}
                {a.efemeride && <span className="etiqueta efemeride">Efeméride</span>}
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
                {a.etapas && (
                  <ul className="etapas">
                    {a.etapas.map((e) => (
                      <li key={e.edad}>
                        <span className="etapa-emoji" aria-hidden="true">{e.emoji}</span>
                        <strong>{e.edad}</strong>
                        <ul className="consejos">
                          {e.consejos.map((c) => (
                            <li key={c.texto} className={c.si ? "si" : "no"}>
                              <span className="marca" aria-label={c.si ? "Sí" : "Evitar"}>{c.si ? "✅" : "🚫"}</span>
                              <span>
                                {c.texto} <em className="sello">{c.fuente}</em>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
                {a.cierre && <p className="cierre">{a.cierre}</p>}
                {a.fuentes && (
                  <p className="fuentes">
                    <strong>Fuentes:</strong>{" "}
                    {a.fuentes.map((f, j) => (
                      <span key={f.url}>
                        {j > 0 && " · "}
                        <a href={f.url} target="_blank" rel="noopener noreferrer">{f.nombre}</a>
                      </span>
                    ))}
                    . AAP = Academia Americana de Pediatría. FDA = Administración de Alimentos y Medicamentos de EE. UU.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== NOSOTROS ======================== */}
      <section className="blanco" id="nosotros">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>💛 Quiénes somos</h2>
            <p>{daycare.sobreNosotros}</p>
          </div>
          <div className="servicios">
            {servicios.map((s) => (
              <div className="servicio" key={s.titulo}>
                <div className="emoji">{s.emoji}</div>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== INFORMACIÓN ======================== */}
      <section id="informacion">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>ℹ️ Información</h2>
            <p>Todo lo que necesitas saber</p>
          </div>
          <div className="info">
            <TarjetaInfo icono="🕒" titulo="Horario" lineas={daycare.horario} />
            <TarjetaInfo icono="👶" titulo="Edades" lineas={daycare.edades} />
            <TarjetaInfo icono="📍" titulo="Ubicación" lineas={daycare.direccion} />
            <div className="tarjeta-info">
              <h3>📞 Teléfonos</h3>
              <ul>
                <li>
                  Llamadas: <a href={`tel:+1${daycare.telefono.replace(/\D/g, "")}`}>{daycare.telefono}</a>
                </li>
                <li>
                  WhatsApp: <a href={`https://wa.me/${daycare.whatsapp}`} target="_blank" rel="noopener noreferrer">{daycare.telefonoWhatsapp}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== AYUDA ======================== */}
      <section className="blanco" id="ayuda">
        <div className="contenedor">
          <div className="titulo-seccion">
            <h2>🙋 Centro de ayuda</h2>
            <p>Respuestas a las preguntas más comunes</p>
          </div>
          <div className="preguntas">
            {preguntas.map((p) => (
              <details key={p.pregunta}>
                <summary>{p.pregunta}</summary>
                <p>{p.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CONTACTO ======================== */}
      <section id="contacto">
        <div className="contenedor contacto">
          <div>
            <div className="titulo-seccion izquierda">
              <h2>✉️ Escríbenos</h2>
              <p>Tu mensaje llega directo a nuestro correo. Te responderemos pronto.</p>
            </div>
            <p>También puedes escribirnos por WhatsApp:</p>
            <a
              className="btn whatsapp"
              href={`https://wa.me/${daycare.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>

          <form action={`https://formsubmit.co/${daycare.correo}`} method="POST">
            <input type="hidden" name="_subject" value={`Nuevo mensaje desde la página de ${daycare.nombre}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="oculto" tabIndex={-1} autoComplete="off" />

            <label htmlFor="nombre">Tu nombre</label>
            <input id="nombre" name="Nombre" required />

            <label htmlFor="correo">Tu correo</label>
            <input id="correo" type="email" name="email" required />

            <label htmlFor="telefono">Teléfono (opcional)</label>
            <input id="telefono" type="tel" name="Teléfono" />

            <label htmlFor="motivo">Motivo</label>
            <select id="motivo" name="Motivo" defaultValue="Información / Inscripción">
              <option>Información / Inscripción</option>
              <option>Pregunta o ayuda</option>
              <option>Sugerencia</option>
              <option>Otro</option>
            </select>

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="Mensaje" required />

            <button type="submit" className="btn btn-principal">Enviar mensaje</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="contenedor">
          © {anio} {daycare.nombre} · {daycare.direccion[daycare.direccion.length - 1]}
        </div>
      </footer>
    </>
  );
}

function TarjetaInfo({ icono, titulo, lineas }) {
  return (
    <div className="tarjeta-info">
      <h3>{icono} {titulo}</h3>
      <ul>
        {lineas.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
