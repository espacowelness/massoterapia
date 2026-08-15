/**
 * Ritual Botânico Editorial: procedimentos apresentados como uma sequência
 * expansível, com informação objetiva e convite de conversa em cada cuidado.
 */
import { ArrowDown, ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const proceduresImage = "/manus-storage/espaco-wellness-procedimentos-autoral_8615018a.jpg";
const whatsappUrl = "https://wa.me/5585986981513?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos%20do%20Espaço%20Wellness.";

const procedures = [
  {
    name: "Aplicação de Kinesio Taping",
    description: "Técnica que utiliza bandagens elásticas aplicadas sobre a pele para auxiliar na estabilização muscular, alívio de dores e redução de inflamações, sem restringir os movimentos do corpo. Indicada para lesões, tensões musculares e recuperação pós-treino.",
  },
  {
    name: "Tratamento de Fibromialgia",
    description: "Protocolo de massoterapia voltado para o alívio dos pontos de dor característicos da fibromialgia, com técnicas suaves que ajudam a reduzir a tensão muscular, melhorar a qualidade do sono e proporcionar mais bem-estar no dia a dia.",
  },
  {
    name: "Drenagem Pós-Operatório",
    description: "Massagem específica indicada após procedimentos cirúrgicos, que auxilia na redução do inchaço, na reabsorção de líquidos e na recuperação do organismo, contribuindo para um pós-operatório mais confortável e com melhores resultados estéticos.",
  },
  {
    name: "Tratamento de Lipedema",
    description: "Abordagem terapêutica voltada para pessoas com lipedema, com técnicas que ajudam a aliviar a dor, reduzir o inchaço e melhorar a circulação nas áreas afetadas, promovendo mais conforto e qualidade de vida.",
  },
  {
    name: "Massagem Miofascial",
    description: "Técnica que atua na liberação das tensões acumuladas na fáscia muscular, aliviando dores, melhorando a mobilidade e restaurando o equilíbrio do corpo.",
  },
  {
    name: "Massagem Relaxante",
    description: "Massagem indicada para reduzir o estresse e a tensão acumulada, promovendo relaxamento profundo, alívio da fadiga e uma sensação renovada de bem-estar.",
  },
  {
    name: "Drenagem Linfática",
    description: "Técnica de estímulo do sistema linfático que auxilia na eliminação de toxinas e líquidos retidos, reduzindo o inchaço, melhorando a circulação e proporcionando uma sensação de leveza ao corpo.",
  },
  {
    name: "Ventosaterapia",
    description: "Técnica milenar que utiliza ventosas para estimular a circulação sanguínea, aliviar tensões musculares e promover a soltura de pontos de dor, auxiliando na recuperação e no relaxamento do corpo.",
  },
  {
    name: "Lipocavitação",
    description: "Procedimento estético não invasivo que utiliza ultrassom para auxiliar na redução de medidas e no combate à gordura localizada, contribuindo para um contorno corporal mais definido.",
  },
  {
    name: "Acupuntura",
    description: "Prática milenar que utiliza a inserção de agulhas finas em pontos específicos do corpo, auxiliando no alívio de dores, na redução do estresse e no equilíbrio geral do organismo.",
  },
];

export default function Procedures() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      <section className="procedures-visual section-wrap" aria-label="O toque que antecede cada cuidado">
        <figure className="procedures-visual__frame">
          <img src={proceduresImage} alt="Detalhe de um atendimento de massoterapia com mãos cuidadosas" />
          <figcaption>Presença em cada toque.</figcaption>
        </figure>
        <div className="procedures-visual__copy">
          <p className="eyebrow">Antes de escolher</p>
          <span className="horizon-line" aria-hidden="true" />
          <p>Comece ouvindo o que o seu corpo precisa hoje.</p>
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
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="page-button page-button--solid">
                      <span>Falar no WhatsApp</span>
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </a>
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
          <span className="horizon-line horizon-line--light procedures-price__horizon" aria-hidden="true" />
          <p className="procedures-price__line">Procedimentos a partir de</p>
        </div>
        <p className="procedures-price__value">R$ 80</p>
      </section>

      <SiteFooter soft />
    </main>
  );
}
