
interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesProps {
  heading: string;
  items: Feature[];
}

const Features = ({ heading, items }: FeaturesProps) => {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {item.icon && (
                <div className="mb-4 text-primary">{item.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-accent">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
