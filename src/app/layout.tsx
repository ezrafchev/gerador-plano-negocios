import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoRubber Tech – Gerador de Plano de Negócios",
  description:
    "Plano de negócios estratégico para microusina industrial sustentável de beneficiamento de borracha reciclada e fornecimento de fixadores técnicos.",
  keywords: [
    "plano de negócios",
    "borracha reciclada",
    "microusina industrial",
    "sustentabilidade",
    "EcoRubber Tech",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
