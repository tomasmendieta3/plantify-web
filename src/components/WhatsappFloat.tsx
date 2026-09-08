import { MessageCircle } from "lucide-react";
import { organizacion } from "@/data/site";

export default function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${organizacion.whatsappNumero}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-esmeralda text-verde-profundo shadow-lg transition-transform hover:scale-105"
      aria-label="Escribinos por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
