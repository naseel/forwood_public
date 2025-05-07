
import { Link } from 'react-router-dom';

interface Button {
  label: string;
  link: string;
}

interface HeroProps {
  heading: string;
  subheading: string;
  image?: string;
  buttons?: Button[];
}

const Hero = ({ heading, subheading, image, buttons }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Optional background image with overlay */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {heading}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
            {subheading}
          </p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={index === 0 ? "btn-secondary" : "bg-transparent border border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-primary transition-colors duration-300"}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
