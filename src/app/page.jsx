import Hero from "../components/hero/hero";
import AboutusCaption from "../components/aboutusCaption/aboutusCaption";
import OurProducts from "../components/ourProducts/ourProducts";
import OurPlans from "../components/ourPlans/ourPlans";
import OurClients from "../components/ourClients/ourClients";

export default function Home() {
  return (<>
    <Hero />
    <AboutusCaption />
    <OurProducts />
    <OurPlans />
    <OurClients />
  </>);
}
