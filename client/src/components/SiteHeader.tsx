/**
 * Ritual Botânico Editorial: navegação leve, clara e expansível no celular,
 * mantendo as cinco áreas institucionais acessíveis em qualquer tela.
 */
import { Link } from "wouter";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

const navigation = [
  ["Início", "/"],
  ["Quem sou eu", "/quem-sou-eu"],
  ["Procedimentos", "/procedimentos"],
  ["Planos", "/planos"],
  ["Onde estamos", "/onde-estamos"],
] as const;

export function SiteHeader({ variant = "dark" }: SiteHeaderProps) {
  return (
    <header className={`site-header site-header--${variant}`}>
      <Link href="/" className="header-logo" aria-label="Espaço Wellness — Início">
        <img src={logoSecondary} alt="Logo Espaço Wellness" />
        <span className="header-wordmark">
          Espaço <em>Wellness</em>
        </span>
      </Link>
      <nav className="header-nav" aria-label="Navegação principal">
        {navigation.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
