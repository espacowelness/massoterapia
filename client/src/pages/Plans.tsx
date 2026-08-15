/**
 * Ritual Botânico Editorial: proposta de planos em uma leitura centrada,
 * direta e acolhedora, com o CTA pronto para receber o canal oficial de WhatsApp.
 */
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const plansImage = "/manus-storage/espaco-wellness-planos_35fe4cc1.jpg";

export default function Plans() {
  const handleWhatsApp = () => {
    toast.message("Envie o link do WhatsApp para ativarmos este atendimento.");
  };

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
          <img src={plansImage} alt="Caderno e detalhes de uma conversa de cuidado personalizada" />
        </figure>
        <div className="plans-process__steps">
          <p className="eyebrow">Como construímos juntos</p>
          <ol>
            <li><span>01</span> Conversamos sobre o seu momento.</li>
            <li><span>02</span> Organizamos os cuidados que fazem sentido.</li>
            <li><span>03</span> Acompanhamos o seu ritmo mês a mês.</li>
          </ol>
        </div>
      </section>

      <section className="plans-statement section-wrap">
        <div className="plans-statement__line" aria-hidden="true" />
        <div className="plans-statement__content">
          <p>
            Cada plano é pensado de forma personalizada, mês a mês, de acordo com as necessidades e
            objetivos de cada cliente.
          </p>
          <p>
            Não trabalhamos com pacotes fechados: entendemos que cada pessoa tem uma rotina, um corpo
            e um momento diferente — por isso, montamos juntos o que faz mais sentido para você.
          </p>
          <p className="plans-statement__closing">
            Fale conosco pelo WhatsApp e vamos construir o plano ideal para o seu bem-estar.
          </p>
          <button type="button" className="page-button page-button--dark" onClick={handleWhatsApp}>
            <span>Falar no WhatsApp</span>
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <img src={logoSecondary} alt="Logo Espaço Wellness" className="footer-logo" />
        <p>Massoterapia &amp; estética para o seu tempo de cuidado.</p>
        <Link href="/onde-estamos">Onde estamos</Link>
      </footer>
    </main>
  );
}
