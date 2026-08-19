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
          Prazer, eu sou <em>Edineuma.</em>
        </h1>
        <p className="page-hero__intro">
          Me chamo Edineuma, sou Massoterapeuta e Especialista em Estética Corporal, com mais de 2 anos
          de experiência e uma bagagem construída com muito estudo, dedicação e amor pelo que faço.
        </p>
      </section>

      <section className="about-portrait-section section-wrap">
        <figure className="about-portrait-section__image">
          <img src={aboutImage} alt="Toalhas e preparação cuidadosa de um espaço de massoterapia" />
          <figcaption>O cuidado começa antes da maca.</figcaption>
        </figure>
        <div className="about-portrait-section__copy">
          <p className="eyebrow">Conforto e tranquilidade</p>
          <p>
            Atendo no Espaço Wellness, um ambiente pensado pra te receber com conforto e tranquilidade —
            porque acredito que o cuidado começa antes mesmo de você deitar na maca.
          </p>
        </div>
      </section>

      <section className="about-statement section-wrap">
        <span className="about-statement__number">01</span>
        <div>
          <p className="eyebrow">Uma escuta que guia o cuidado</p>
          <span className="horizon-line" aria-hidden="true" />
          <h2>
            Aqui não existe atendimento padrão, porque você <em>não é padrão.</em>
          </h2>
          <p>
            Mas o que realmente me define como profissional vai além dos cursos e da técnica. Sou uma
            pessoa extremamente atenciosa, que ouve antes de atender. Cada pessoa que chega até mim traz
            uma história, uma dor, uma necessidade diferente — e é exatamente isso que guia o meu trabalho.
          </p>
        </div>
      </section>

      <section className="about-commitment">
        <div className="section-wrap about-commitment__inner">
          <p className="eyebrow eyebrow--light">Meu compromisso com o seu cuidado</p>
          <p className="about-commitment__quote">
            Minha prioridade sempre foi e sempre será você: o seu bem-estar, o seu conforto, o seu resultado.
          </p>
          <p className="about-commitment__support">
            Porque pra mim, cuidar de verdade é isso — estar presente em cada detalhe, em cada sessão,
            em cada momento.
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
