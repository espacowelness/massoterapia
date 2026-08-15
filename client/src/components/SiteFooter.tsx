/**
 * Ritual Botânico Editorial: rodapé de contato com marca, Instagram e WhatsApp.
 */
import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const instagramUrl = "https://www.instagram.com/edi.massoterapia.e_estetica/";
const whatsappUrl = "https://wa.me/55859869821513";

export function SiteFooter({ soft = false }: { soft?: boolean }) {
  return (
    <footer className={`site-footer${soft ? " site-footer--soft" : ""}`}>
      <Link href="/quem-sou-eu" className="footer-identity" aria-label="Conheça o Espaço Wellness">
        <img src={logoSecondary} alt="Logo Espaço Wellness" className="footer-logo" />
        <p className="footer-wordmark">Espaço <em>Wellness</em></p>
      </Link>
      <p>Massoterapia &amp; estética para o seu tempo de cuidado.</p>
      <div className="footer-contacts" aria-label="Canais de contato">
        <span>Contato</span>
        <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram do Espaço Wellness">
          <Instagram size={16} strokeWidth={1.55} /> Instagram
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp do Espaço Wellness">
          <MessageCircle size={16} strokeWidth={1.55} /> WhatsApp
        </a>
      </div>
    </footer>
  );
}
