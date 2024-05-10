import "@/app/globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sangye Tashi",
  description: "Personal Website of React and Web Developer, Sangye Tashi",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
