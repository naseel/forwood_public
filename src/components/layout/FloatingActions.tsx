
import { PhoneCall, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919388176565"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919388176565"
        className="flex items-center justify-center bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
        aria-label="Call Us"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
};

export default FloatingActions;
