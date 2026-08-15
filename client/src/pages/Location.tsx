/**
 * Ritual Botânico Editorial: localização tratada como um convite prático,
 * com mapa arredondado, endereço claro e acesso direto à rota no Google Maps.
 */
import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const logoSecondary = "/manus-storage/logo-espaco-wellness-v2_b46486b3.webp";
const routeUrl = "https://maps.app.goo.gl/hy2kFuTtcuq7EMbK9";
const arrivalImage = "/manus-storage/espaco-wellness-chegada_252a2b5e.jpg";
const mapImage = "/manus-storage/espaco-wellness-mapa-eusebio_0dba6f3b.webp";

export default function Location() {
  return (
    <main className="inner-page location-page">
      <SiteHeader variant="dark" />
      <section className="page-hero page-hero--compact section-wrap" aria-labelledby="location-title">
        <p className="eyebrow">Onde estamos</p>
        <span className="horizon-line" aria-hidden="true" />
        <h1 id="location-title">
          Um espaço para chegar, <em>respirar e cuidar.</em>
        </h1>
        <p className="page-hero__intro">
          Venha nos encontrar em Eusébio. A localização abaixo abre a rota para você no Google Maps.
        </p>
      </section>

      <section className="location-arrival section-wrap">
        <div className="location-arrival__copy">
          <p className="eyebrow">Chegar também faz parte do cuidado</p>
          <p>Um espaço para deixar a rotina do lado de fora e se permitir uma pausa.</p>
        </div>
        <figure>
          <img src={arrivalImage} alt="Detalhe de chegada a um espaço acolhedor e tranquilo" />
        </figure>
      </section>

      <section className="location-section section-wrap">
        <div className="location-map-frame">
          <a href={routeUrl} target="_blank" rel="noreferrer" aria-label="Abrir localização do Espaço Wellness no Google Maps">
            <img className="location-map-image" src={mapImage} alt="Mapa da localização na Avenida Eusébio de Queiroz, 4359" />
          </a>
          <p className="location-map-caption">Toque no mapa para abrir sua rota</p>
        </div>
        <div className="location-card">
          <MapPin size={22} strokeWidth={1.45} aria-hidden="true" />
          <p className="eyebrow">Nosso endereço</p>
          <h2>Av. Eusébio de Queiroz, 4359</h2>
          <p>Centro, Eusébio — CE<br />61760-000</p>
          <a className="page-button page-button--dark" href={routeUrl} target="_blank" rel="noreferrer">
            <span>Abrir rota no Maps</span>
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
