import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-dragon-dark-2 border-t border-white/5 mt-24">
      {/* Marquee */}
      <div className="overflow-hidden py-4 border-b border-white/5 bg-dragon-orange/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="font-bebas text-4xl tracking-widest text-dragon-orange/40 mx-8">
              DRAGON KINGDOM &nbsp;✦&nbsp; NEW COLLECTION &nbsp;✦&nbsp; STREET WEAR &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-bebas text-3xl tracking-widest mb-4">
            DRAGON <span className="text-dragon-orange">KINGDOM</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Бренд уличной одежды для тех, кто не боится быть собой. Каждая вещь — это история силы.
          </p>
          <div className="flex gap-4 mt-6">
            {['Instagram', 'Youtube', 'MessageCircle'].map((icon) => (
              <button key={icon} className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-dragon-orange hover:border-dragon-orange transition-all">
                <Icon name={icon} size={16} fallback="Link" />
              </button>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <div className="font-bebas tracking-widest text-lg mb-4 text-white/70">Навигация</div>
          <ul className="space-y-2">
            {[
              { id: 'catalog', label: 'Каталог' },
              { id: 'collections', label: 'Коллекции' },
              { id: 'blog', label: 'Блог' },
              { id: 'about', label: 'О бренде' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contacts', label: 'Контакты' },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="text-white/40 hover:text-dragon-orange text-sm transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <div className="font-bebas tracking-widest text-lg mb-4 text-white/70">Контакты</div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-white/40 text-sm">
              <Icon name="Mail" size={14} />
              <span>info@dragonkingdom.ru</span>
            </li>
            <li className="flex items-center gap-2 text-white/40 text-sm">
              <Icon name="Phone" size={14} />
              <span>+7 (800) 555-00-00</span>
            </li>
            <li className="flex items-center gap-2 text-white/40 text-sm">
              <Icon name="MapPin" size={14} />
              <span>Москва, ул. Дракона, 1</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/25 text-xs">© 2024 Dragon Kingdom. Все права защищены.</p>
        <p className="text-white/25 text-xs">Доставка по всей России</p>
      </div>
    </footer>
  );
}
