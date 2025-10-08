import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearningGuitar 🎸 | Aprenda Violão de Forma Interativa",
  description: "Aprenda violão online com truques práticos, exercícios interativos e dicas para memorizar acordes, notas e escalas. Ideal para iniciantes e estudantes de música.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        {children}
      </body>
    </html>
  );
}
