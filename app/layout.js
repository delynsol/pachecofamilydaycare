import "./globals.css";
import { daycare } from "../contenido";

export const metadata = {
  title: daycare.nombre,
  description: daycare.descripcionCorta,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
