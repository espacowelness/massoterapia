/**
 * Ritual Botânico Editorial: proposta de planos em uma leitura centrada,
 * direta e acolhedora, com o CTA pronto para receber o canal oficial de WhatsApp.
 */
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const plansImage = "/manus-storage/espaco-wellness-planos-toque_a03cebb5.jpg";
const whatsappUrl = "https://wa.me/55859869821513?text=Olá%2C%20gostaria%20de%20conhecer%20os%20planos%20personalizados%20do%20Espaço%20Wellness.";

export default function Plans() {
  return (
    <main className="inner-page plans-page">
      <SiteHeader variant="dark" />
      <section className="page-hero page-hero--compact section-wrap" aria-labelledby="plans-title">
        <p className="eyebrow">Planos</p>
        <span className="horizon-line" aria-hidden="true" />
        <h1 id="plans-title">
          Nossos <em>planos.</em>
        </h1>
        <p className="page-hero__intro">Um cuidado contínuo, organizado a partir do que faz sentido para você.</p>
      </section>

      <section className="plans-process section-wrap">
        <figure className="plans-process__image">
          <img src={plansImage} alt="Momento de cuidado com mãos e tecido em luz natural" />
          <figcaption>Um cuidado que se ajusta ao seu ritmo.</figcaption>
        </figure>
        <div className="plans-process__steps">
          <p className="eyebrow">Como construímos juntos</p>
          <span className="horizon-line" aria-hidden="true" />
          <ol>
            <li><span>01</span> Conversamos sobre o seu momento.</li>
            <li><span>02</span> Organizamos os cuidados que fazem sentido.</li>
          </ol>
        </div>
      </section>

      <section className="plans-statement section-wrap">
        <div className="plans-statement__content">
          <p className="plans-statement__body">
            Cada plano é pensado de forma <strong>personalizada</strong>, de acordo com as
            necessidades e objetivos de cada cliente.
          </p>
          <p className="plans-statement__body">
            <strong>Não trabalhamos com pacotes fechados:</strong> entendemos que cada pessoa tem uma
            rotina, um corpo e um momento diferente — por isso, montamos juntos o que faz mais sentido para você.
          </p>
          <p className="plans-statement__closing">
            Fale conosco pelo WhatsApp e vamos construir o plano ideal para o seu bem-estar.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="page-button page-button--dark">
            <span>Falar no WhatsApp</span>
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
