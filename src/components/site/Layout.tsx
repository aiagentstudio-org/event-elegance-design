import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LenisProvider } from "../providers/LenisProvider";
import { PageTransition } from "./PageTransition";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="noise-overlay" />
        <Header />
        <PageTransition>
          <main className="flex-1 pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </div>
    </LenisProvider>
  );
}
