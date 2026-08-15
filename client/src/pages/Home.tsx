/**
 * Estilo Ritual Botânico Editorial: ritmo respirável, verde Wellness e
 * composição assimétrica com fotografia tátil de massoterapia.
 */
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const heroImage = "/manus-storage/espaco-wellness-hero-massagem_5dea997c.jpg";
const detailImage = "/manus-storage/espaco-wellness-miofascial_b26dc788.jpg";
const drainageImage = "/manus-storage/espaco-wellness-drenagem_1fd6e3b7.jpg";
const stillLifeImage = "/manus-storage/espaco-wellness-detalhe_a4e02ad2.jpg";
const logoPrimary = "/manus-storage/logo-espaco-wellness-v1_6abd73f4.webp";
const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";

const curatedCare = [
  "Massagem miofascial",
  "Drenagem linfática",
  "Massagem relaxante",
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <header className="site-header site-header--light">
          <Link href="/" className="header-logo" aria-label="Espaço Wellness — início">
            <img src={logoSecondary} alt="Logo Espaço Wellness" />
          </Link>
          <nav className="header-nav" aria-label="Navegação principal">
            <a href="#essencia">O espaço</a>
            <Link href="/procedimentos">Procedimentos</Link>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-brand" aria-label="Espaço Wellness">
            <img className="hero-brand-logo" src={logoPrimary} alt="" />
            <p className="hero-brand-name">
              Espaço <em>Wellness</em>
            </p>
          </div>
          <p className="eyebrow eyebrow--light">Massoterapia &amp; estética</p>
          <h1 id="hero-title">
            Seu corpo também
            <em> pede pausa.</em>
          </h1>
          <p className="hero-copy">
            Um cuidado atento para desacelerar, recuperar presença e encontrar o seu melhor ritmo.
          </p>
          <Link href="/procedimentos" className="round-cta round-cta--light">
            <span>Ver procedimentos</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </Link>
        </div>

        <a className="scroll-cue" href="#essencia">
          <span>Deslize para conhecer</span>
          <ArrowDown size={17} strokeWidth={1.5} />
        </a>
      </section>

      <section id="essencia" className="intro-section section-wrap">
        <div className="intro-statement reveal-up">
          <p className="eyebrow">01 — Uma pausa intencional</p>
          <h2>
            Cuidar de si não é deixar tudo para depois.
            <em> É escutar o agora.</em>
          </h2>
        </div>
        <div className="intro-aside reveal-up">
          <div className="oval-frame oval-frame--intro">
            <img src={detailImage} alt="Atendimento de massoterapia com toque cuidadoso nos ombros" />
          </div>
          <p>
            No Espaço Wellness, cada atendimento é conduzido com escuta, técnica e acolhimento —
            para que o cuidado faça sentido no seu dia a dia.
          </p>
        </div>
      </section>

      <section className="care-band">
        <div className="care-band__copy section-wrap">
          <div className="care-band__lead">
            <p className="eyebrow eyebrow--light">Cuidado que acompanha o seu ritmo</p>
            <h2>
              Técnica, atenção e uma experiência que convida o corpo a <em>respirar melhor.</em>
            </h2>
          </div>
          <div className="care-band__detail">
            <span className="line-motif" aria-hidden="true" />
            <p>
              Massoterapia e estética em um espaço pensado para acolher diferentes necessidades com
              presença e delicadeza.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-section section-wrap">
        <div className="featured-media reveal-up">
          <img src={drainageImage} alt="Sessão de massagem profissional em ambiente tranquilo" />
          <span className="image-caption">Atendimento com presença</span>
        </div>
        <div className="featured-copy reveal-up">
          <p className="eyebrow">02 — Entre técnica e bem-estar</p>
          <h2>
            Um espaço para se sentir <em>inteiramente presente.</em>
          </h2>
          <p>
            Da massagem relaxante à drenagem linfática, os procedimentos foram reunidos para
            acompanhar momentos de pausa, autocuidado e recuperação da sua rotina.
          </p>
          <Link href="/procedimentos" className="text-link">
            Conheça todos os cuidados <ArrowUpRight size={17} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="procedures-preview section-wrap">
        <div className="procedures-preview__top">
          <div>
            <p className="eyebrow">03 — Procedimentos</p>
            <h2>Escolha o seu momento.</h2>
          </div>
          <Link href="/procedimentos" className="text-link text-link--desktop">
            Ver a lista completa <ArrowUpRight size={17} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="care-list">
          {curatedCare.map((care, index) => (
            <Link key={care} href="/procedimentos" className="care-list__item">
              <span>0{index + 1}</span>
              <strong>{care}</strong>
              <ArrowUpRight size={20} strokeWidth={1.35} />
            </Link>
          ))}
        </div>
      </section>

      <section className="price-section">
        <div className="price-art" aria-hidden="true">
          <img src={stillLifeImage} alt="" />
        </div>
        <div className="price-content section-wrap">
          <p className="eyebrow eyebrow--light">Espaço Wellness</p>
          <p className="price-label">Procedimentos a partir de</p>
          <p className="price-value">R$ 80</p>
          <Link href="/procedimentos" className="round-cta round-cta--light">
            <span>Explorar procedimentos</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <img src={logoSecondary} alt="Logo Espaço Wellness" className="footer-logo" />
        <p>Massoterapia &amp; estética para o seu tempo de cuidado.</p>
        <Link href="/procedimentos">Procedimentos</Link>
      </footer>
    </main>
  );
}
