
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">FORWOOD</h3>
            <p className="text-gray-300 mb-4">
              Premium PVC and WPC Panels for Timeless Interiors
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Provident Fund Road</p>
              <p className="mb-2">Kaloor, Kerala, PIN: 682017</p>
              <p className="mb-2">
                <a 
                  href="tel:+919388176565" 
                  className="hover:text-white transition-colors"
                >
                  +91 9388176565
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>© {currentYear} FORWOOD. All rights reserved. | Provident Fund Road, Kaloor, Kerala, PIN: 682017</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
