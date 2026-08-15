/**
 * Ritual Botânico Editorial: página de apresentação construída em respiro,
 * tipografia expressiva e conteúdo centrado para uma leitura mais acolhedora.
 */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const aboutImage = "/manus-storage/espaco-wellness-ritual-autoral_9656d547.jpg";

export default function About() {
  return (
    <main className="inner-page about-page">
      <SiteHeader variant="dark" />
      <section className="page-hero section-wrap" aria-labelledby="about-title">
        <p className="eyebrow">Quem sou eu</p>
        <span className="horizon-line" aria-hidden="true" />
        <h1 id="about-title">
          Cuidado que começa com <em>escuta.</em>
        </h1>
        <p className="page-hero__intro">
          O Espaço Wellness foi pensado para acolher o seu momento com leveza, atenção e uma pausa
          real da rotina.
        </p>
      </section>

      <section className="about-portrait-section section-wrap">
        <figure className="about-portrait-section__image">
          <img src={aboutImage} alt="Toalhas e preparação cuidadosa de um espaço de massoterapia" />
          <figcaption>O cuidado começa nos detalhes.</figcaption>
        </figure>
        <div className="about-portrait-section__copy">
          <p className="eyebrow">Presença em cada etapa</p>
          <p>
            Um atendimento que respeita o seu tempo antes, durante e depois de cada cuidado.
          </p>
        </div>
      </section>

      <section className="about-statement section-wrap">
        <span className="about-statement__number">01</span>
        <div>
          <p className="eyebrow">Uma experiência feita para você</p>
          <span className="horizon-line" aria-hidden="true" />
          <h2>
            Cada atendimento começa por entender como você está e o que o seu corpo <em>pede agora.</em>
          </h2>
          <p>
            Aqui, massoterapia e estética não são uma rotina apressada. São um momento de presença,
            construído com técnica, cuidado e respeito ao ritmo de quem chega.
          </p>
        </div>
      </section>

      <section className="about-commitment">
        <div className="section-wrap about-commitment__inner">
          <p className="eyebrow eyebrow--light">Meu compromisso com o seu cuidado</p>
          <p className="about-commitment__quote">
            Que você saia daqui se sentindo mais leve, mais acolhido e mais próximo de si.
          </p>
          <Link href="/procedimentos" className="round-cta round-cta--light">
            <span>Conheça os procedimentos</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
