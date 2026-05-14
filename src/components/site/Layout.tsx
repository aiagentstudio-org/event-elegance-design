import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LenisProvider } from "../providers/LenisProvider";
import { PageTransition } from "./PageTransition";
import { CustomCursor } from "./CustomCursor";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { useRouterState } from "@tanstack/react-router";

export function Layout({ children }: { children: ReactNode }) {
  const router = useRouterState();

  return (
    <LenisProvider>
      <div className="min-h-screen flex flex-col relative">
        <CustomCursor />
        <FloatingWhatsApp />
        <div className="noise-overlay" />
        <div className="grid-lines" />
        <Header />
        <PageTransition key={router.location.pathname}>
          <main className="flex-1 pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </div>
    </LenisProvider>
  );
}
