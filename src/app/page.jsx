'use client'

import AboutusCaption from "@/components/aboutusCaption/aboutusCaption";
import Hero from "@/components/hero/hero";
import OurClients from "@/components/ourClients/ourClients";
import OurPlans from "@/components/ourPlans/ourPlans";
import OurProducts from "@/components/ourProducts/ourProducts";
import { plans } from "@/data/plans";


let planName = plans.map((item) => {
  return "@context"; "https://schema.org/",
    "@type"; "Product",
      "name"; `${item.name}`,
        "image"; `${item.img}`,
          "brand"; {
    "@type"; "Brand",
      "name"; "item"
  }
  "sku"; "123456",
    "offers"; {
    "@type"; "Offer",
      "url"; "",
        "priceCurrency"; "SAR",
          "price"; "500",
            "availability"; "https://schema.org/InStock",
              "itemCondition"; "https://schema.org/NewCondition"
  }
})
// let planImg = plans.map((item) => item.img.src)
// console.log(planName);
// console.log(planImg);



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
      target: "https://on-dm.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "On-Dm Tech",
    "alternateName": "On-Dm",
    "url": "https://on-dm.com/",
    "logo": "",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966566284570",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": ["en", "Arabic"]
    },
    "sameAs": [
      "https://www.youtube.com/channel/UCwZ5Qz-GGbPIqvrbQVAXwcg",
      "https://www.linkedin.com/in/mohamed-abdullah-580490311/",
      "https://www.instagram.com/ondm_official/",
      "https://www.facebook.com/people/ONDM/61556612142969/"
    ]
  },
  {
    planName
  }
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
