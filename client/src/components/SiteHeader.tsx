/**
 * Ritual Botânico Editorial: navegação leve, clara e expansível no celular,
 * mantendo as cinco áreas institucionais acessíveis em qualquer tela.
 */
import { Menu, X } from "lucide-react";
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
      <Link href="/" className="header-logo" aria-label="Espaço Wellness — início">
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
      <details className="mobile-menu">
        <summary aria-label="Abrir menu de navegação">
          <Menu className="mobile-menu__open" size={19} strokeWidth={1.6} />
          <X className="mobile-menu__close" size={19} strokeWidth={1.6} />
        </summary>
        <nav aria-label="Navegação principal no celular">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
