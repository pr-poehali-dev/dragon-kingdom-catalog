import Icon from '@/components/ui/icon';
import { Product } from '@/data/products';

interface CartItem extends Product {
  qty: number;
}

interface CartPageProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onChangeQty: (id: number, qty: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ items, onRemove, onChangeQty, onNavigate }: CartPageProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = total >= 5000 ? 0 : 390;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dragon-dark pt-24 pb-20 flex items-center justify-center">
        <div className="text-center px-6">
          <Icon name="ShoppingBag" size={64} className="text-white/10 mx-auto mb-6" />
          <h2 className="font-bebas text-4xl tracking-wider text-white mb-3">КОРЗИНА ПУСТА</h2>
          <p className="text-white/40 font-golos text-sm mb-8">Добавьте товары из каталога</p>
          <button onClick={() => onNavigate('catalog')} className="btn-fire px-10 py-4 rounded font-bebas text-lg tracking-widest">
            Перейти в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Покупки</p>
          <h1 className="font-bebas text-5xl tracking-wider text-white">
            КОРЗИНА
            <span className="text-white/30 ml-3 text-2xl">{items.length}</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items */}
          <div className="flex-1 space-y-4">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="bg-dragon-dark-2 rounded border border-white/5 p-4 flex gap-4 animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
              >
                <div className="w-20 h-24 rounded overflow-hidden flex-shrink-0 bg-dragon-dark-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/30 text-xs font-golos mb-0.5">{item.collection}</p>
                  <h3 className="font-bebas text-lg tracking-wide text-white leading-tight">{item.name}</h3>
                  <p className="text-white/30 text-xs font-golos mt-1">
                    Материал: {item.material === 'cotton' ? 'Хлопок' : item.material === 'fleece' ? 'Флис' : 'Смесовая'}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onChangeQty(item.id, Math.max(1, item.qty - 1))}
                        className="w-7 h-7 rounded border border-white/10 text-white/50 hover:border-dragon-orange hover:text-dragon-orange transition-all flex items-center justify-center"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="w-8 text-center font-golos font-bold text-white text-sm">{item.qty}</span>
                      <button
                        onClick={() => onChangeQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded border border-white/10 text-white/50 hover:border-dragon-orange hover:text-dragon-orange transition-all flex items-center justify-center"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bebas text-xl text-white tracking-wide">
                        {(item.price * item.qty).toLocaleString('ru-RU')} ₽
                      </span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-white/20 hover:text-red-400 transition-colors p-1"
                      >
                        <Icon name="Trash2" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-dragon-dark-2 rounded border border-white/5 p-6 sticky top-24">
              <h3 className="font-bebas text-xl tracking-wider text-white mb-5">ИТОГО</h3>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm font-golos">
                  <span className="text-white/40">Товары ({items.reduce((s, i) => s + i.qty, 0)})</span>
                  <span className="text-white">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-sm font-golos">
                  <span className="text-white/40">Доставка</span>
                  <span className={delivery === 0 ? 'text-green-400 font-bold' : 'text-white'}>
                    {delivery === 0 ? 'Бесплатно' : `${delivery} ₽`}
                  </span>
                </div>
                {delivery > 0 && (
                  <p className="text-white/25 text-xs">
                    До бесплатной: {(5000 - total).toLocaleString('ru-RU')} ₽
                  </p>
                )}
                <div className="border-t border-white/10 pt-3 flex justify-between font-bebas text-xl">
                  <span className="text-white">К оплате</span>
                  <span className="text-dragon-orange">{(total + delivery).toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
              <button className="btn-fire w-full py-4 rounded font-bebas text-lg tracking-widest relative overflow-hidden">
                <span className="relative z-10">Оформить заказ</span>
              </button>
              <button
                onClick={() => onNavigate('catalog')}
                className="w-full mt-3 py-3 rounded border border-white/10 text-white/50 text-sm font-golos hover:border-white/30 hover:text-white/80 transition-all"
              >
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
