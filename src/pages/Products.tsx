
import ProductCard from "@/components/ui/ProductCard";
import Cta from "@/components/sections/Cta";

const Products = () => {
  // Products data
  const products = [
    {
      title: "SIGNATURE PVC Sheet",
      description: "Premium quality PVC sheet with 0.8 density. Ideal for top-end applications.",
      image: "/lovable-uploads/2b28152a-5fe1-4f45-b1ce-df635e0f7a5c.png", // Updated to use the uploaded Signature logo
      tags: ["PVC", "Premium", "0.8 Density"]
    },
    {
      title: "IMPERIAL PVC Sheet",
      description: "High-quality PVC sheet with 0.7 density. Perfect for durable and economical projects.",
      image: "/lovable-uploads/88001c2e-7066-4421-9551-0214154ff054.png", // Updated to use the uploaded Imperial logo
      tags: ["PVC", "0.7 Density"]
    },
    {
      title: "AVATAR 3-Layer WPC Sheet",
      description: "Premium 3-layer WPC sheet with 0.7 density for superior performance and strength.",
      image: "/lovable-uploads/cd340ec7-eca1-4286-bbda-470330ff0a9a.png", // Updated to use the uploaded Avatar logo
      tags: ["WPC", "3-Layer", "0.7 Density", "Premium"]
    }
  ];
  
  // CTA data
  const ctaData = {
    heading: "Need a Quote?",
    description: "Request pricing and product details tailored to your needs.",
    buttons: [
      {
        label: "Request a Quote",
        link: "/quote"
      }
    ]
  };

  return (
    <div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Product Range</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                tags={product.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Cta {...ctaData} />
    </div>
  );
};

export default Products;
