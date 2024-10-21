import AboutusCaption from "@/components/aboutusCaption/aboutusCaption";
import Hero from "@/components/hero/hero";
import OurClients from "@/components/ourClients/ourClients";
import OurPlans from "@/components/ourPlans/ourPlans";
import OurProducts from "@/components/ourProducts/ourProducts";
import onTrackImg from '@/app/assits/on-track.webp'
import onAirImg from '@/app/assits/on-air.webp'
import onPhoneImg from '@/app/assits/on-phone.webp'
import onDmImg from '@/app/assits/on-dm.webp'


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
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "خطة ON Track",
    "image": { onTrackImg },
    "description": "مصممة لمقدمي الخدمات والعلامات التجارية الاحترافية، تقدم خطة ON Track من ON DM حزمة شاملة مصممة لرفع مستوى وجودك على الإنترنت وتبسيط تفاعلات العملاء. من خلال التركيز على بناء موقع ويب احترافي واستغلال خدمات جوجل، تمكن هذه الخطة من تعزيز رؤيتك على الإنترنت وزيادة التفاعل مع العملاء.",
    "brand": {
      "@type": "Brand",
      "name": "Item"
    },
    "sku": "1234",
    "offers": {
      "@type": "Offer",
      "url": "https://on-dm.com/plan/خطة-on-track",
      "priceCurrency": "SAR",
      "price": "2940",
      "priceValidUntil": "2024-11-30",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "خطة ON Air",
    "image": { onAirImg },
    "description": "تم تصميم خطة ON Air من ON DM خصيصًا للشركات التي تسعى لزيادة وجودها على منصات وسائل التواصل الاجتماعي، حيث تقدم خدمات تسويقية شاملة مع تطوير هوية بصرية للعلامة التجارية. تهدف هذه الخطة إلى تعزيز رؤيتك وتفاعلك على مختلف منصات التواصل الاجتماعي.",
    "brand": {
      "@type": "Brand",
      "name": "Item"
    },
    "sku": "2134",
    "offers": {
      "@type": "Offer",
      "url": "https://on-dm.com/plan/خطة-on-air",
      "priceCurrency": "SAR",
      "price": "3500",
      "priceValidUntil": "2024-11-30",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "خطة ON Phone",
    "image": { onPhoneImg },
    "description": "تهدف خطة ON Phone من ON DM إلى توفير حل شامل للشركات الراغبة في تبسيط تفاعلاتها مع العملاء وتعزيز الكفاءة التشغيلية من خلال إدارة فعالة لعلاقات العملاء (CRM) وخدمات دعم الهاتف المخصصة. تم تصميم هذه الخطة الشاملة لتمكين الشركات من الحصول على الأدوات والموارد اللازمة لإدارة الاستفسارات العملاء، والحجوزات، وعمليات الشراء بسلاسة.",
    "brand": {
      "@type": "Brand",
      "name": "Item"
    },
    "sku": "3124",
    "offers": {
      "@type": "Offer",
      "url": "https://on-dm.com/plan/خطة-on-phone",
      "priceCurrency": "SAR",
      "price": "7000",
      "priceValidUntil": "2024-11-30",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "خطة ON DM",
    "image": { onDmImg },
    "description": "تقدم خطة ON DM حلاً شاملاً يجمع بين مزايا خطة ON Track وخطة ON Air وخطة ON Phone، لتوفير الحلول المتكاملة للتسويق الرقمي، وتطوير الهوية، وإدارة علاقات العملاء. تم تصميم هذه الخطة الشاملة لتحقيق أقصى استفادة من الوجود الرقمي وتعزيز الجاذبية والفعالية التشغيلية لعملك.",
    "brand": {
      "@type": "Brand",
      "name": "Item"
    },
    "sku": "4123",
    "offers": {
      "@type": "Offer",
      "url": "https://on-dm.com/plan/خطة-on-dm",
      "priceCurrency": "SAR",
      "price": "14000",
      "priceValidUntil": "2024-11-30",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    }
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
