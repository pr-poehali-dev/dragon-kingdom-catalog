import Icon from '@/components/ui/icon';
import { COLLECTIONS, products } from '@/data/products';

interface CollectionsPageProps {
  onNavigate: (page: string) => void;
}

const COLLECTION_DESC: Record<string, string> = {
  'Dragon Basics': 'Базовые вещи с фирменной символикой. Универсальные, ноские, узнаваемые.',
  'Sport Motion': 'Для активного образа жизни. Технические ткани, свобода движения.',
  'Season Shift': 'Межсезонные образы. Layering, актуальные цвета сезона.',
  'Summer Breeze': 'Лёгкие и дышащие вещи для жаркого лета.',
  'Warm Stone': 'Приглушённые землистые тона. Комфорт и стиль в одном.',
  'Metal Edition': 'Лимитированная серия с металлической фурнитурой и деталями.',
};

const COLLECTION_COLORS: Record<string, string> = {
  'Dragon Basics': 'from-dragon-orange/20 to-dragon-red/5',
  'Sport Motion': 'from-blue-600/20 to-transparent',
  'Season Shift': 'from-green-700/20 to-transparent',
  'Summer Breeze': 'from-yellow-500/20 to-transparent',
  'Warm Stone': 'from-amber-700/20 to-transparent',
  'Metal Edition': 'from-slate-400/20 to-transparent',
};

export default function CollectionsPage({ onNavigate }: CollectionsPageProps) {
  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Ассортимент</p>
          <h1 className="font-bebas text-5xl tracking-wider text-white">ВСЕ КОЛЛЕКЦИИ</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLLECTIONS.map((col, i) => {
            const count = products.filter((p) => p.collection === col).length;
            const newCount = products.filter((p) => p.collection === col && p.isNew).length;
            return (
              <button
                key={col}
                onClick={() => onNavigate('catalog')}
                className={`group relative rounded-lg overflow-hidden border border-white/5 hover:border-dragon-orange/40 transition-all duration-300 card-hover text-left animate-fade-in`}
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className={`p-8 md:p-10 bg-gradient-to-br ${COLLECTION_COLORS[col]} bg-dragon-dark-2 relative min-h-[200px] flex flex-col justify-between`}>
                  <div className="absolute inset-0 bg-dragon-dark-2/60" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <p className="text-white/30 text-xs font-golos tracking-widest uppercase mb-2">
                        {count} товар{count === 1 ? '' : count < 5 ? 'а' : 'ов'}
                        {newCount > 0 && <span className="ml-2 text-dragon-orange">+{newCount} new</span>}
                      </p>
                      <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-white group-hover:text-dragon-orange transition-colors">
                        {col}
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-dragon-orange group-hover:bg-dragon-orange/10 transition-all">
                      <Icon name="ArrowUpRight" size={18} className="text-white/30 group-hover:text-dragon-orange transition-colors" />
                    </div>
                  </div>

                  <p className="relative z-10 text-white/40 text-sm font-golos mt-4 max-w-sm">
                    {COLLECTION_DESC[col]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
