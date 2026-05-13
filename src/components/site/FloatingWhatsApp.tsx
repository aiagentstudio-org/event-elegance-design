import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappNumber = "+919953595353";
  const message = "Hi RS Group, I'm interested in your event services!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9997] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden flex items-center justify-center border-2 border-white/20"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
