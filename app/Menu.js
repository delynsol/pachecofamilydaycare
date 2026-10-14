"use client";

import { useState } from "react";

const enlaces = [
  { href: "#anuncios", texto: "Anuncios" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#informacion", texto: "Información" },
  { href: "#ayuda", texto: "Ayuda" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Menu({ nombre }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <header>
      <div className="contenedor menu">
        <a href="#inicio" className="logo">
          <span className="icono">🌞</span> {nombre}
        </a>
        <button
          className="boton-menu"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "✕" : "☰"}
        </button>
        <nav>
          <ul className={abierto ? "abierto" : ""}>
            {enlaces.map((e) => (
              <li key={e.href}>
                <a href={e.href} onClick={() => setAbierto(false)}>
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
