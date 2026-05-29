import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Product, COLORS } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  style?: React.CSSProperties;
}

export default function ProductCard({ product, onAddToCart, style }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="card-hover group relative bg-dragon-dark-3 rounded overflow-hidden border border-white/5 flex flex-col animate-fade-in"
      style={style}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.isNew && (
          <span className="bg-dragon-orange text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-widest font-bebas">
            NEW
          </span>
        )}
        {product.isHit && (
          <span className="bg-dragon-red text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-widest font-bebas">
            ХИТ
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5] bg-dragon-dark-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark-3/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Colors preview */}
        <div className="absolute bottom-3 left-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.colors.map((c) => {
            const colorDef = COLORS.find((col) => col.value === c);
            return (
              <span
                key={c}
                className="w-4 h-4 rounded-full border border-white/30"
                style={{ background: colorDef?.hex }}
                title={colorDef?.name}
              />
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-white/40 text-xs tracking-wide font-golos uppercase">{product.collection}</p>
          <h3 className="font-bebas text-xl tracking-wide text-white mt-0.5 leading-tight">{product.name}</h3>
          <p className="text-white/40 text-xs mt-1 line-clamp-2 font-golos">{product.description}</p>
        </div>

        {/* Sizes row */}
        <div className="flex gap-1 flex-wrap">
          {product.sizes.slice(0, 5).map((size) => (
            <span key={size} className="text-[10px] text-white/30 border border-white/10 rounded px-1.5 py-0.5 font-golos font-medium">
              {size}
            </span>
          ))}
          {product.sizes.length > 5 && (
            <span className="text-[10px] text-dragon-orange">+{product.sizes.length - 5}</span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-bebas text-2xl tracking-wide text-white">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          <button
            onClick={handleAdd}
            className={`btn-fire relative z-10 flex items-center gap-2 px-4 py-2 rounded text-sm font-golos font-bold transition-all ${
              added ? 'bg-green-600 border-green-600' : ''
            }`}
          >
            {added ? (
              <>
                <Icon name="Check" size={14} />
                <span>Добавлено</span>
              </>
            ) : (
              <>
                <Icon name="ShoppingBag" size={14} />
                <span>В корзину</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
