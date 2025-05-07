
import { Link } from 'react-router-dom';

interface Button {
  label: string;
  link: string;
}

interface CtaProps {
  heading: string;
  description: string;
  buttons?: Button[];
}

const Cta = ({ heading, description, buttons }: CtaProps) => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg mb-8 opacity-90">{description}</p>
          
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link.startsWith('http') ? button.link : button.link}
                  target={button.link.startsWith('http') ? '_blank' : undefined}
                  rel={button.link.startsWith('http') ? 'noopener noreferrer' : undefined}
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

export default Cta;
