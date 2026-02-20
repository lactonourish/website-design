import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-soft-cream border-t border-dusty-blue/10">
      <div className="max-w-[100rem] mx-auto px-5 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl text-deep-blue font-bold mb-2">
              LactoNourish
            </h3>
            <p className="font-paragraph text-base text-dusty-blue mb-6">
              Lactation & Maternal Nutrition Support
            </p>
            <a
              href="mailto:lactoloves@gmail.com"
              className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              lactoloves@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-deep-blue mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-base text-dusty-blue hover:text-accent-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dusty-blue/10 text-center">
          <p className="font-paragraph text-sm text-dusty-blue/70">
            © {new Date().getFullYear()} LactoNourish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
