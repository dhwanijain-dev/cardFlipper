import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Neuro Card - Spaced Repetition Flashcard App",
  description: "Master anything with our futuristic spaced repetition flashcard app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
