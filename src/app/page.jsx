import AboutusCaption from "@/components/aboutusCaption/aboutusCaption";
import Hero from "@/components/hero/hero";
import OurClients from "@/components/ourClients/ourClients";
import OurPlans from "@/components/ourPlans/ourPlans";
import OurProducts from "@/components/ourProducts/ourProducts";


const jsonLdHome = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "On Dm Tech Home",
        item: "https://on-dm.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "من نحن",
        item: "https://on-dm.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "تواصل معنا",
        item: "https://on-dm.com/%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "تواصل معنا",
        item: "https://on-dm.com/on-dm-blog/",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://on-dm.com/",
    name: "On Dm Tech",
    description: "تصميم مواقع ومتاجر وتسويق إلكتروني .",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: "http://example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function Home() {
  return (<>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
    />

    <Hero />
    <AboutusCaption />
    <OurProducts />
    <OurPlans />
    <OurClients />
  </>);
}
