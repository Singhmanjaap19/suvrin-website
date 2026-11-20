import Hero from "@/component/hero";
import Banner from "@/component/banner";
import OdooServices from "@/component/odoo-services";
import BeyondSoftware from "@/component/beyond-software";
import ModuleMapArchitecture from "@/component/module-map-architecture";
import Benefits from "@/component/benefits";
import UaeIndustry from "@/component/uae-industry";
import ImplementationTimeline from "@/component/implementation-timeline";
import StageOwnership from "@/component/stage-ownership";
import OdooSaas from "@/component/odoo-saas";
import HireDevelopersCta from "@/component/hire-developers-cta";
import Faq from "@/component/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BeyondSoftware />
      <Banner />
      <UaeIndustry />
      
      <OdooServices />
       
      <ModuleMapArchitecture />
      <StageOwnership />
      <Benefits />
      <OdooSaas />
      <ImplementationTimeline />
     
      
      <HireDevelopersCta />
      <Faq />
    </main>
  );
}
