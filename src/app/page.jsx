import AboutusCaption from "@/components/aboutusCaption/aboutusCaption";
import Hero from "@/components/hero/hero";
import OurClients from "@/components/ourClients/ourClients";
import OurPlans from "@/components/ourPlans/ourPlans";
import OurProducts from "@/components/ourProducts/ourProducts";

export default function Home() {
  return (<>
    <Hero />
    <AboutusCaption />
    <OurProducts />
    <OurPlans />
    <OurClients />
  </>);
}
