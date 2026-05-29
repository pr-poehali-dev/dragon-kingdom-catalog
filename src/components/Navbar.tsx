import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

const NAV_LINKS = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'collections', label: 'Коллекции' },
  { id: 'blog', label: 'Блог' },
  { id: 'about', label: 'О бренде' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ activePage, onNavigate, cartCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dragon-dark/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="font-bebas text-2xl tracking-widest text-white hover:text-dragon-orange transition-colors"
        >
          DRAGON <span className="text-dragon-orange">KINGDOM</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link font-golos text-sm font-medium tracking-wide transition-colors ${
                activePage === link.id ? 'text-dragon-orange active' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('cart')}
            className="relative p-2 text-white/70 hover:text-dragon-orange transition-colors"
          >
            <Icon name="ShoppingBag" size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-dragon-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dragon-dark-2 border-t border-white/5 px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`text-left font-golos text-base font-medium transition-colors ${
                activePage === link.id ? 'text-dragon-orange' : 'text-white/70'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('cart'); setMenuOpen(false); }}
            className="text-left font-golos text-base font-medium text-white/70"
          >
            Корзина {cartCount > 0 && <span className="text-dragon-orange">({cartCount})</span>}
          </button>
        </div>
      )}
    </header>
  );
}
