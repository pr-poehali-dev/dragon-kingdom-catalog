import Icon from '@/components/ui/icon';

const HOODIE_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/41b5f60c-4cae-44e2-8eae-102730354611.jpg';
const TEE_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/dc9c47a3-621c-43da-a6b6-58ffb306b7ab.jpg';
const PANTS_IMG = 'https://cdn.poehali.dev/projects/cd54b5fd-ada6-486f-815c-131f5515609b/files/7a80b8a8-cf01-47e8-8db8-70df05583181.jpg';

const POSTS = [
  {
    id: 1,
    title: 'Как собрать образ из Dragon Basics',
    excerpt: 'Базовые вещи — основа любого гардероба. Рассказываем, как сочетать между собой предметы из коллекции Dragon Basics.',
    image: HOODIE_IMG,
    tag: 'Стиль',
    date: '15 ноя 2024',
    readTime: '4 мин',
  },
  {
    id: 2,
    title: 'Metal Edition: история создания лимитки',
    excerpt: 'Как появилась лимитированная серия с металлической фурнитурой и почему она разошлась за 48 часов.',
    image: TEE_IMG,
    tag: 'Коллекции',
    date: '8 ноя 2024',
    readTime: '6 мин',
  },
  {
    id: 3,
    title: 'Уход за одеждой из флиса: полный гид',
    excerpt: 'Флисовые худи Dragon Kingdom прослужат годами, если знать несколько простых правил ухода.',
    image: PANTS_IMG,
    tag: 'Уход',
    date: '1 ноя 2024',
    readTime: '3 мин',
  },
  {
    id: 4,
    title: 'Осенние образы со Sport Motion',
    excerpt: 'Коллекция Sport Motion — не только для тренировок. Показываем, как носить технические вещи в городе.',
    image: HOODIE_IMG,
    tag: 'Стиль',
    date: '25 окт 2024',
    readTime: '5 мин',
  },
  {
    id: 5,
    title: 'Dragon Kingdom × сообщество: ваши фото',
    excerpt: 'Лучшие образы от нашего комьюнити за октябрь 2024. Огонь!',
    image: TEE_IMG,
    tag: 'Комьюнити',
    date: '18 окт 2024',
    readTime: '2 мин',
  },
  {
    id: 6,
    title: 'Сезон Shift: переходный период с умом',
    excerpt: 'Как не замёрзнуть и остаться стильным в межсезонье — разбираемся с коллекцией Season Shift.',
    image: PANTS_IMG,
    tag: 'Коллекции',
    date: '10 окт 2024',
    readTime: '4 мин',
  },
];

const TAG_COLORS: Record<string, string> = {
  'Стиль': 'bg-dragon-orange/20 text-dragon-orange',
  'Коллекции': 'bg-blue-500/20 text-blue-400',
  'Уход': 'bg-green-500/20 text-green-400',
  'Комьюнити': 'bg-purple-500/20 text-purple-400',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Журнал</p>
          <h1 className="font-bebas text-5xl tracking-wider text-white">БЛОГ</h1>
        </div>

        {/* Featured */}
        <div className="mb-8">
          <button className="group w-full relative rounded-lg overflow-hidden card-hover animate-fade-in text-left" style={{ opacity: 0 }}>
            <div className="aspect-[21/9] relative">
              <img src={POSTS[0].image} alt={POSTS[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dragon-dark via-dragon-dark/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className={`text-xs px-3 py-1 rounded-full font-golos font-semibold mb-3 inline-block ${TAG_COLORS[POSTS[0].tag]}`}>
                  {POSTS[0].tag}
                </span>
                <h2 className="font-bebas text-4xl tracking-wide text-white mb-2 group-hover:text-dragon-orange transition-colors">
                  {POSTS[0].title}
                </h2>
                <p className="text-white/50 text-sm font-golos max-w-xl">{POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4 mt-4 text-white/30 text-xs font-golos">
                  <span>{POSTS[0].date}</span>
                  <span>•</span>
                  <span>{POSTS[0].readTime} чтения</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.slice(1).map((post, i) => (
            <button
              key={post.id}
              className="group bg-dragon-dark-2 rounded border border-white/5 hover:border-dragon-orange/30 overflow-hidden card-hover animate-fade-in text-left"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className={`text-xs px-2.5 py-1 rounded-full font-golos font-semibold mb-3 inline-block ${TAG_COLORS[post.tag] || 'bg-white/10 text-white/60'}`}>
                  {post.tag}
                </span>
                <h3 className="font-bebas text-xl tracking-wide text-white mb-2 group-hover:text-dragon-orange transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/40 text-xs font-golos line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-white/25 text-xs font-golos">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={11} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
