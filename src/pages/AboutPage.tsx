import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/19dc72fd-b468-4eeb-bb35-6f88d61f3b91.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <div className="relative rounded-lg overflow-hidden mb-16 aspect-[21/9]">
          <img src={HERO_IMG} alt="Dragon Kingdom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark via-dragon-dark/50 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">История бренда</p>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">О БРЕНДЕ</h1>
          </div>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in" style={{ opacity: 0 }}>
            <h2 className="font-bebas text-3xl tracking-wider text-dragon-orange mb-4">НАША ИСТОРИЯ</h2>
            <p className="text-white/60 font-golos text-sm leading-relaxed mb-4">
              Dragon Kingdom родился в 2019 году из простой идеи: создавать одежду, которая отражает внутреннюю силу и характер её носителя. Мы начинали с небольшой мастерской и нескольких дизайнов — сегодня это шесть полных коллекций.
            </p>
            <p className="text-white/60 font-golos text-sm leading-relaxed">
              Каждая вещь проходит строгий контроль качества. Мы работаем только с проверенными поставщиками тканей и уделяем особое внимание деталям — от строчки до этикетки.
            </p>
          </div>
          <div className="animate-fade-in" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <h2 className="font-bebas text-3xl tracking-wider text-dragon-orange mb-4">НАШИ ЦЕННОСТИ</h2>
            <ul className="space-y-3">
              {[
                { icon: 'Flame', title: 'Качество без компромиссов', desc: 'Только лучшие ткани и материалы' },
                { icon: 'Zap', title: 'Уличный характер', desc: 'Стиль, который говорит сам за себя' },
                { icon: 'Heart', title: 'Честность', desc: 'Прозрачное производство, реальные цены' },
                { icon: 'Globe', title: 'Доставка по России', desc: 'Быстро, надёжно, без переплат' },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-dragon-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={icon} size={14} className="text-dragon-orange" fallback="Star" />
                  </div>
                  <div>
                    <p className="font-golos font-semibold text-white text-sm">{title}</p>
                    <p className="font-golos text-white/40 text-xs">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { num: '2019', label: 'Год основания' },
            { num: '50K+', label: 'Довольных клиентов' },
            { num: '6', label: 'Коллекций' },
            { num: '100%', label: 'Контроль качества' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-dragon-dark-2 border border-white/5 rounded p-6 text-center">
              <div className="font-bebas text-4xl text-dragon-orange tracking-wide">{num}</div>
              <div className="font-golos text-white/40 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Team quote */}
        <div className="relative rounded-lg bg-dragon-dark-2 border border-dragon-orange/20 p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-dragon-orange/5 to-transparent rounded-lg" />
          <Icon name="Quote" size={32} className="text-dragon-orange/30 mx-auto mb-4" />
          <blockquote className="relative font-bebas text-3xl md:text-4xl tracking-wide text-white leading-tight max-w-2xl mx-auto">
            «МЫ ДЕЛАЕМ ОДЕЖДУ ДЛЯ ТЕХ, КТО НЕ ПРЯЧЕТ СВОЕГО ДРАКОНА»
          </blockquote>
          <p className="font-golos text-dragon-orange text-sm mt-6">— Основатель Dragon Kingdom</p>
        </div>
      </div>
    </div>
  );
}
