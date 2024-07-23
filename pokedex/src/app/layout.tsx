'use client';
import { Nunito } from "next/font/google";
import "./globals.css";
import React from "react";

const nunito = Nunito({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
