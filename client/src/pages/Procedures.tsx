/**
 * Estilo Ritual Botânico Editorial: lista de procedimentos com respiro,
 * numeração editorial e hierarquia serena em verde, terracota e off-white.
 */
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";

const procedures = [
  "Aplicação de Kinesio (Taping)",
  "Tratamento de fibromialgia",
  "Drenagem pós-operatório",
  "Tratamento de lipedema",
  "Massagem miofascial",
  "Massagem relaxante",
  "Drenagem linfática",
  "Ventosaterapia",
  "Lipocavitação",
  "Acupuntura",
];

export default function Procedures() {
  return (
    <main className="procedures-page">
      <header className="site-header site-header--dark procedures-header">
        <Link href="/" className="header-logo" aria-label="Espaço Wellness — início">
          <img src={logoSecondary} alt="Logo Espaço Wellness" />
        </Link>
        <nav className="header-nav" aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <a href="#lista">Procedimentos</a>
        </nav>
      </header>

      <section className="procedures-hero section-wrap">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} strokeWidth={1.5} /> Voltar ao início
        </Link>
        <p className="eyebrow">Cuidados pensados para você</p>
        <h1>
          Procedimentos<br />
          <em>que acolhem o seu corpo.</em>
        </h1>
        <div className="procedures-hero__bottom">
          <p>
            Explore os cuidados disponíveis e encontre o procedimento que acompanha o seu momento.
          </p>
          <a className="scroll-cue scroll-cue--green" href="#lista">
            <span>Ver lista</span>
            <ArrowDown size={17} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      <section id="lista" className="procedures-list-section section-wrap">
        <div className="procedures-list-heading">
          <p className="eyebrow">01 — Todos os cuidados</p>
          <p>Selecione uma opção para iniciar sua conversa.</p>
        </div>
        <div className="procedures-list">
          {procedures.map((procedure, index) => (
            <a
              href="mailto:contato@espacowellness.com.br?subject=Quero%20saber%20mais%20sobre%20procedimentos"
              key={procedure}
              className="procedure-row"
              aria-label={`Quero saber mais sobre ${procedure}`}
            >
              <span className="procedure-row__number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{procedure}</h2>
              <span className="procedure-row__arrow">
                <ArrowUpRight size={21} strokeWidth={1.4} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="procedures-price section-wrap">
        <div>
          <p className="eyebrow eyebrow--light">Uma pausa que cabe no seu tempo</p>
          <p className="procedures-price__line">Procedimentos a partir de</p>
        </div>
        <p className="procedures-price__value">R$ 80</p>
      </section>

      <footer className="site-footer site-footer--soft">
        <img src={logoSecondary} alt="Logo Espaço Wellness" className="footer-logo" />
        <p>Massoterapia &amp; estética para o seu tempo de cuidado.</p>
        <Link href="/">Voltar ao início</Link>
      </footer>
    </main>
  );
}
