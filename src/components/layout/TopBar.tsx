import { Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="hidden sm:block text-primary-foreground/80">
          Pakistan's Trusted Industrial Solar Partner
        </p>
        <div className="flex items-center gap-4 sm:gap-6 mx-auto sm:mx-0">
          <a
            href={companyInfo.phoneLink}
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">{companyInfo.phone}</span>
          </a>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 px-3 py-1 rounded-full transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
