import Hero from "@/components/home/Hero";
import ContadorImpacto from "@/components/home/ContadorImpacto";
import Presentacion from "@/components/home/Presentacion";
import AliadosEmpresas from "@/components/home/AliadosEmpresas";
import ProcesoTimeline from "@/components/home/ProcesoTimeline";
import QueRecibis from "@/components/home/QueRecibis";
import SectoresAsignados from "@/components/home/SectoresAsignados";
import Equipo from "@/components/home/Equipo";
import Faq from "@/components/Faq";
import CierreCta from "@/components/home/CierreCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ContadorImpacto />
      <Presentacion />
      <AliadosEmpresas />
      <ProcesoTimeline />
      <QueRecibis />
      <SectoresAsignados />
      <Equipo />
      <Faq />
      <CierreCta />
    </>
  );
}
