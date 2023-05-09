"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import openDyslexicRegular from "next/font/local";
import openDyslexicBold from "next/font/local";
import openDyslexicItalic from "next/font/local";
import openDyslexicBoldItalic from "next/font/local";

const OpenDyslexicRegular = openDyslexicRegular({
  src: "../../public/fonts/OpenDyslexic-Regular.otf",
  display: "swap",
  variable: "--font-opendyslexic",
});
// const OpenDyslexicBold = openDyslexicBold({src: "../public/fonts/OpenDyslexic-Bold.otf", display: "swap", variable: "--font-opendyslexic", weight: "600"})
// const OpenDyslexicItalic = openDyslexicItalic({src: "../public/fonts/OpenDyslexic-Italic.otf", display: "swap", variable: "--font-opendyslexic", style: "italic"})
// const OpenDyslexicBoldItalic = openDyslexicBoldItalic({src: "../public/fonts/OpenDyslexic-BoldItalic.otf", display: "swap", variable: "--font-opendyslexic", style: "italic", weight: "600"})

export const metadata = {
  title: "Proto App",
  description: "App for practise",
};

export function toggleFont() {
  const body = document.querySelector("body");
  body.classList.toggle("opendyslexic");
  body.classList.toggle("arial");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Proto App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${OpenDyslexicRegular.variable} font-opendyslexic`}>
        <ThemeProvider
          attribute="class"
          value={{
            dark: "dark",
            light: "light",
          }}
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
