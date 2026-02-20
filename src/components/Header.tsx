import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-blue/95 backdrop-blur-sm border-b border-dusty-blue/20 shadow-md">
      <div className="max-w-[100rem] mx-auto px-5 md:px-20 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <Image
                src="https://static.wixstatic.com/media/7adb49_8e2091822d4646cd94205d530668c827~mv2.png"
                alt="LactoNourish logo"
                width={56}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading text-2xl md:text-3xl text-white font-bold">LactoNourish</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-gold'
                    : 'text-white hover:text-accent-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-accent-gold hover:bg-accent-gold/90 text-deep-blue rounded-full px-8 py-3 font-bold text-base">
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-paragraph text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-gold'
                    : 'text-white hover:text-accent-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent-gold hover:bg-accent-gold/90 text-deep-blue rounded-full px-8 py-3 font-bold text-base w-full">
                Book Now
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
