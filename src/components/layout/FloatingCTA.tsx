import { Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={companyInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={companyInfo.phoneLink}
        className="w-14 h-14 rounded-full bg-highlight text-highlight-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
