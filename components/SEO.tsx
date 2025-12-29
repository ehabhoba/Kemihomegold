
import React from 'react';
import { Product } from '../types';

interface SEOProps {
  title?: string;
  description?: string;
  product?: Product;
}

const SEO: React.FC<SEOProps> = ({ title, description, product }) => {
  const fullTitle = title ? `${title} | هوم جولد ستور` : 'هوم جولد ستور | أفضل أدوات العناية بالشعر في مصر';
  const fullDesc = description || 'اكتشف مجموعتنا الواسعة من مجففات ومكواة الشعر الاحترافية من هوم جولد وكيمي. شحن سريع وطلب سهل عبر واتساب.';

  // JSON-LD Structured Data
  const jsonLd = product ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.thumb],
    "description": product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "هوم جولد"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "EGP",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "هوم جولد ستور",
    "url": window.location.origin
  };

  React.useEffect(() => {
    document.title = fullTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', fullDesc);
  }, [fullTitle, fullDesc]);

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export default SEO;
