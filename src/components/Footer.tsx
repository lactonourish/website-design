import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-muted-peach border-t border-secondary/30">
      <div className="max-w-[100rem] mx-auto px-5 md:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl text-primary font-bold mb-4">
              Nurture & Nourish
            </h3>
            <p className="font-paragraph text-base text-foreground leading-relaxed mb-6">
              Evidence-based lactation and nutrition support for families worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:lactoloves@gmail.com"
                  className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
                >
                  lactoloves@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-base text-foreground">
                  India, USA & Online Worldwide
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Newsletter</h4>
            <p className="font-paragraph text-base text-foreground mb-4">
              Subscribe for tips, resources, and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full border-secondary bg-background"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full font-semibold"
              >
                Subscribe
              </Button>
              {subscribed && (
                <p className="font-paragraph text-sm text-primary">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary/50 text-center">
          <p className="font-paragraph text-sm text-foreground/70">
            © {new Date().getFullYear()} Nurture & Nourish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
