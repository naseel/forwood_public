
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    phone: "+91 9388176565",
    whatsapp: "https://wa.me/919388176565",
    location: "Provident Fund Road, Kaloor, Kerala, PIN: 682017"
  };

  return (
    <div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            For inquiries, support, or collaborations, reach out to us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href={contactInfo.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map (Placeholder) */}
            <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
              <p className="text-gray-500">
                Map placeholder - You can embed a Google Map here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
