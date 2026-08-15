/**
 * Ritual Botânico Editorial: procedimentos apresentados como uma sequência
 * expansível, com informação objetiva e convite de conversa em cada cuidado.
 */
import { ArrowDown, ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";

const procedures = [
  {
    name: "Aplicação de Kinesio (Taping)",
    description: "Aplicação de bandagem elástica funcional como recurso complementar ao movimento, sempre após avaliação individual.",
  },
  {
    name: "Tratamento de fibromialgia",
    description: "Atendimento adaptado, com técnicas e intensidade definidas de forma cuidadosa para respeitar o seu momento.",
  },
  {
    name: "Drenagem pós-operatório",
    description: "Cuidado individual de acompanhamento pós-operatório, conduzido conforme orientação profissional e necessidade de cada pessoa.",
  },
  {
    name: "Tratamento de lipedema",
    description: "Plano de cuidado corporal com técnicas adaptadas e uma conversa atenta sobre as suas necessidades e rotina.",
  },
  {
    name: "Massagem miofascial",
    description: "Técnica manual voltada a áreas de tensão, mobilidade e sensação de maior leveza no corpo.",
  },
  {
    name: "Massagem relaxante",
    description: "Uma pausa guiada por manobras suaves para desacelerar a rotina e favorecer uma sensação de bem-estar.",
  },
  {
    name: "Drenagem linfática",
    description: "Movimentos suaves e ritmados, organizados de acordo com a sua avaliação e objetivo de cuidado.",
  },
  {
    name: "Ventosaterapia",
    description: "Recurso complementar realizado com sucção controlada e sempre ajustado à avaliação do seu atendimento.",
  },
  {
    name: "Lipocavitação",
    description: "Procedimento estético corporal indicado após avaliação individual, com planejamento alinhado aos seus objetivos.",
  },
  {
    name: "Acupuntura",
    description: "Atendimento realizado de forma individual e cuidadosa, com indicação definida a partir de avaliação profissional.",
  },
];

export default function Procedures() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleWhatsApp = () => {
    toast.message("Envie o link do WhatsApp para ativarmos este atendimento.");
  };

  return (
    <main className="procedures-page">
      <SiteHeader variant="dark" />

      <section className="procedures-hero section-wrap">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} strokeWidth={1.5} /> Voltar ao início
        </Link>
        <p className="eyebrow">Cuidados pensados para você</p>
        <span className="horizon-line" aria-hidden="true" />
        <h1>
          Procedimentos<br />
          <em>que acolhem o seu corpo.</em>
        </h1>
        <div className="procedures-hero__bottom">
          <p>Explore os cuidados disponíveis e encontre o procedimento que acompanha o seu momento.</p>
          <a className="scroll-cue scroll-cue--green" href="#lista">
            <span>Ver lista</span>
            <ArrowDown size={17} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      <section id="lista" className="procedures-list-section section-wrap">
        <div className="procedures-list-heading">
          <p className="eyebrow">01 — Todos os cuidados</p>
          <p>Selecione uma opção para ler uma breve explicação e saber mais.</p>
        </div>
        <div className="procedures-list">
          {procedures.map((procedure, index) => (
            <article className="procedure-disclosure" key={procedure.name}>
              <button
                type="button"
                className="procedure-row"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`procedure-detail-${index}`}
              >
                <span className="procedure-row__number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{procedure.name}</h2>
                <span className="procedure-row__arrow" aria-hidden="true">
                  <ChevronDown size={21} strokeWidth={1.4} />
                </span>
              </button>
              {openIndex === index && (
                <div id={`procedure-detail-${index}`} className="procedure-detail">
                  <div className="procedure-detail__body">
                    <p>{procedure.description}</p>
                    <button type="button" className="page-button page-button--solid" onClick={handleWhatsApp}>
                      <span>Falar no WhatsApp</span>
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}
            </article>
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
        <Link href="/planos">Conheça os planos</Link>
      </footer>
    </main>
  );
}
