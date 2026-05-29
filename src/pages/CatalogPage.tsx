import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';
import { products, COLLECTIONS, COLORS, SIZES, MATERIALS, Product } from '@/data/products';

interface CatalogPageProps {
  onAddToCart: (product: Product) => void;
}

const SORT_OPTIONS = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' },
  { value: 'new', label: 'Новинки' },
];

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [search, setSearch] = useState('');
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [sort, setSort] = useState('popular');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const toggle = <T,>(arr: T[], val: T): T[] =>
    arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.collection.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCollections.length && !selectedCollections.includes(p.collection)) return false;
      if (selectedColors.length && !selectedColors.some((c) => p.colors.includes(c))) return false;
      if (selectedSizes.length && !selectedSizes.some((s) => p.sizes.includes(s))) return false;
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      return true;
    });

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'new') result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sort === 'popular') result = [...result].sort((a, b) => (b.isHit ? 1 : 0) - (a.isHit ? 1 : 0));

    return result;
  }, [search, selectedCollections, selectedColors, selectedSizes, selectedMaterials, minPrice, maxPrice, sort]);

  const resetFilters = () => {
    setSelectedCollections([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedMaterials([]);
    setMinPrice(0);
    setMaxPrice(15000);
    setSearch('');
  };

  const hasFilters = selectedCollections.length || selectedColors.length || selectedSizes.length || selectedMaterials.length || search;

  const Sidebar = () => (
    <aside className="w-full space-y-7">
      {/* Collections */}
      <div>
        <p className="font-bebas tracking-widest text-base text-white/60 mb-3">Коллекции</p>
        <div className="space-y-2">
          {COLLECTIONS.map((col) => (
            <label key={col} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                  selectedCollections.includes(col)
                    ? 'bg-dragon-orange border-dragon-orange'
                    : 'border-white/20 group-hover:border-dragon-orange/60'
                }`}
                onClick={() => setSelectedCollections(toggle(selectedCollections, col))}
              >
                {selectedCollections.includes(col) && <Icon name="Check" size={10} />}
              </div>
              <span
                className={`text-sm font-golos transition-colors ${selectedCollections.includes(col) ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}
                onClick={() => setSelectedCollections(toggle(selectedCollections, col))}
              >
                {col}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <p className="font-bebas tracking-widest text-base text-white/60 mb-3">Цвета</p>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color.value}
              title={color.name}
              onClick={() => setSelectedColors(toggle(selectedColors, color.value))}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(color.value) ? 'border-dragon-orange scale-110' : 'border-white/10 hover:border-white/40'
              }`}
              style={{ background: color.hex }}
            >
              {selectedColors.includes(color.value) && (
                <Icon name="Check" size={12} className="text-white mx-auto drop-shadow" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="font-bebas tracking-widest text-base text-white/60 mb-3">Размеры</p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSizes(toggle(selectedSizes, size))}
              className={`size-chip px-3 py-1.5 rounded text-sm ${selectedSizes.includes(size) ? 'selected' : 'text-white/50'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-bebas tracking-widest text-base text-white/60 mb-3">Цена</p>
        <div className="flex gap-2">
          <div className="flex-1">
            <p className="text-white/30 text-xs mb-1 font-golos">От</p>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(+e.target.value)}
              className="w-full bg-dragon-dark-4 border border-white/10 rounded px-3 py-2 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange"
            />
          </div>
          <div className="flex-1">
            <p className="text-white/30 text-xs mb-1 font-golos">До</p>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(+e.target.value)}
              className="w-full bg-dragon-dark-4 border border-white/10 rounded px-3 py-2 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange"
            />
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="font-bebas tracking-widest text-base text-white/60 mb-3">Материал</p>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterials(toggle(selectedMaterials, mat))}
              className={`filter-chip px-4 py-1.5 rounded text-sm font-golos capitalize ${selectedMaterials.includes(mat) ? 'selected' : 'text-white/50'}`}
            >
              {mat === 'cotton' ? 'Хлопок' : mat === 'fleece' ? 'Флис' : 'Смесовая'}
            </button>
          ))}
        </div>
      </div>

      {hasFilters ? (
        <button
          onClick={resetFilters}
          className="w-full py-2.5 rounded border border-white/10 text-white/50 text-sm font-golos hover:border-red-500/50 hover:text-red-400 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="X" size={14} />
          Сбросить фильтры
        </button>
      ) : null}
    </aside>
  );

  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Магазин</p>
          <div className="flex items-end justify-between">
            <h1 className="font-bebas text-5xl tracking-wider text-white">
              ВСЕ ТОВАРЫ
              <span className="text-white/30 ml-3 text-2xl">{filtered.length}</span>
            </h1>
          </div>
        </div>

        {/* Top toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по товарам..."
              className="w-full bg-dragon-dark-3 border border-white/10 rounded pl-10 pr-4 py-3 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex gap-2">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`lg:hidden flex items-center gap-2 px-4 py-3 rounded border text-sm font-golos transition-all ${
                sidebarOpen ? 'border-dragon-orange text-dragon-orange' : 'border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              <Icon name="SlidersHorizontal" size={15} />
              Фильтры
              {hasFilters ? <span className="bg-dragon-orange text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">{Number(selectedCollections.length) + Number(selectedColors.length) + Number(selectedSizes.length) + Number(selectedMaterials.length)}</span> : null}
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-dragon-dark-3 border border-white/10 rounded px-4 py-3 text-white/70 text-sm font-golos focus:outline-none focus:border-dragon-orange cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-dragon-dark-3">
                  {opt.label}
                </option>
              ))}
            </select>

            <div className="hidden sm:flex border border-white/10 rounded overflow-hidden">
              {(['grid', 'list'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-3 transition-colors ${view === v ? 'bg-dragon-orange text-white' : 'text-white/30 hover:text-white/60'}`}
                >
                  <Icon name={v === 'grid' ? 'LayoutGrid' : 'List'} size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <Sidebar />
          </div>

          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-40 flex">
              <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
              <div className="relative ml-auto w-72 bg-dragon-dark-2 h-full overflow-y-auto p-6 animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bebas text-xl tracking-wider">ФИЛЬТРЫ</h3>
                  <button onClick={() => setSidebarOpen(false)} className="text-white/40 hover:text-white">
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <Sidebar />
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Icon name="SearchX" size={48} className="text-white/10 mx-auto mb-4" />
                <p className="font-bebas text-2xl text-white/30 tracking-wider">НИЧЕГО НЕ НАЙДЕНО</p>
                <button onClick={resetFilters} className="mt-4 text-dragon-orange text-sm font-golos hover:underline">
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div
                className={view === 'grid'
                  ? 'grid grid-cols-2 xl:grid-cols-3 gap-4'
                  : 'flex flex-col gap-4'
                }
              >
                {filtered.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
