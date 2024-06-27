import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pulso Cubano | Noticias de Cuba",
  description: "Tu fuente de información actualizada sobre Cuba. Descubre las últimas noticias y reportajes de medios independientes cubanos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}
      <Analytics /> {/* Analytics component correctly added */}
      </body>
    </html>
  );
}
