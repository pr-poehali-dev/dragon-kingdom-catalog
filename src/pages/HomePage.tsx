import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { products, COLLECTIONS } from '@/data/products';
import { Product } from '@/data/products';

const HERO_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/19dc72fd-b468-4eeb-bb35-6f88d61f3b91.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-enter');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('section-enter');
        observer.observe(ref);
      }
    });
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null, i: number) => {
    if (el) sectionRefs.current[i] = el;
  };

  const hits = products.filter((p) => p.isHit || p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen bg-dragon-dark overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-fire-pulse"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dragon-dark/70 via-dragon-dark/50 to-dragon-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dragon-dark via-transparent to-dragon-dark/60" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array(12).fill(null).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-dragon-orange rounded-full animate-float opacity-60"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className="font-golos text-dragon-orange text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Новая коллекция 2024
          </p>
          <h1
            className="font-bebas text-[clamp(60px,14vw,160px)] leading-none tracking-wider text-white mb-6 animate-slide-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            DRAGON
            <br />
            <span className="text-gradient-fire">KINGDOM</span>
          </h1>
          <p
            className="font-golos text-white/60 text-lg max-w-md mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            Уличная одежда для тех, кто создаёт свои правила
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <button
              onClick={() => onNavigate('catalog')}
              className="btn-fire px-10 py-4 rounded font-bebas text-lg tracking-widest relative overflow-hidden"
            >
              <span className="relative z-10">Смотреть каталог</span>
            </button>
            <button
              onClick={() => onNavigate('collections')}
              className="px-10 py-4 rounded font-bebas text-lg tracking-widest border border-white/20 text-white hover:border-dragon-orange hover:text-dragon-orange transition-all"
            >
              Коллекции
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-float">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* Stats bar */}
      <div ref={(el) => addRef(el, 0)} className="bg-dragon-dark-2 border-y border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '6', label: 'Коллекций' },
            { value: '60+', label: 'Товаров' },
            { value: '50К+', label: 'Клиентов' },
            { value: '4.9★', label: 'Рейтинг' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-bebas text-4xl text-dragon-orange tracking-wide">{value}</div>
              <div className="font-golos text-white/40 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Collections grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div ref={(el) => addRef(el, 1)} className="flex items-end justify-between mb-10">
          <div>
            <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Ассортимент</p>
            <h2 className="font-bebas text-5xl tracking-wider text-white">КОЛЛЕКЦИИ</h2>
          </div>
          <button
            onClick={() => onNavigate('collections')}
            className="hidden sm:flex items-center gap-2 text-dragon-orange text-sm font-golos hover:gap-3 transition-all"
          >
            Все коллекции <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {COLLECTIONS.map((col, i) => (
            <button
              key={col}
              onClick={() => onNavigate('catalog')}
              className="group relative rounded overflow-hidden border border-white/5 hover:border-dragon-orange/40 transition-all duration-300 card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[3/2] bg-dragon-dark-3 flex items-end p-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at ${50 + i * 10}% ${40 + i * 8}%, #FF6B00, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <p className="text-white/30 text-xs font-golos tracking-widest uppercase mb-1">
                    {['06 вещей', '08 вещей', '05 вещей', '10 вещей', '07 вещей', '04 вещи'][i]}
                  </p>
                  <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-dragon-orange transition-colors">
                    {col}
                  </h3>
                </div>
                <Icon
                  name="ArrowUpRight"
                  size={18}
                  className="absolute top-4 right-4 text-white/20 group-hover:text-dragon-orange transition-colors"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Hit products */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div ref={(el) => addRef(el, 2)} className="flex items-end justify-between mb-10">
          <div>
            <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Популярное</p>
            <h2 className="font-bebas text-5xl tracking-wider text-white">ХИТЫ ПРОДАЖ</h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="hidden sm:flex items-center gap-2 text-dragon-orange text-sm font-golos hover:gap-3 transition-all"
          >
            Весь каталог <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {hits.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            />
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section ref={(el) => addRef(el, 3)} className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative rounded-lg overflow-hidden border border-dragon-orange/20 bg-dragon-dark-2 p-12 md:p-16 text-center animate-glow-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-dragon-orange/5 via-dragon-red/5 to-dragon-orange/5" />
          <div className="relative z-10">
            <p className="font-golos text-dragon-orange text-xs tracking-[0.4em] uppercase mb-4">Специальное предложение</p>
            <h2 className="font-bebas text-[clamp(36px,6vw,72px)] tracking-wider text-white mb-4">
              БЕСПЛАТНАЯ ДОСТАВКА<br />
              <span className="text-dragon-orange">ОТ 5 000 ₽</span>
            </h2>
            <p className="font-golos text-white/50 max-w-md mx-auto mb-8">
              Заказывай любимые вещи Dragon Kingdom — доставим быстро по всей России
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="btn-fire px-10 py-4 rounded font-bebas text-lg tracking-widest"
            >
              Заказать сейчас
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
