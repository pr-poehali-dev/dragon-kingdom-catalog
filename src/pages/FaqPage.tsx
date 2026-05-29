import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FAQS = [
  {
    q: 'Как подобрать правильный размер?',
    a: 'На каждой странице товара есть таблица размеров. Рекомендуем измерить объём груди и сравнить с таблицей. Если вы на границе размеров — берите больший.',
  },
  {
    q: 'Сколько времени занимает доставка?',
    a: 'По Москве — 1-2 рабочих дня. По России — 3-7 рабочих дней в зависимости от региона. Доставка СДЭК, Почта России или курьером.',
  },
  {
    q: 'Можно ли вернуть товар?',
    a: 'Да, в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке, без следов носки. Возврат оформляется через службу поддержки.',
  },
  {
    q: 'Есть ли бесплатная доставка?',
    a: 'Да! При заказе от 5 000 ₽ доставка бесплатная по всей России.',
  },
  {
    q: 'Как ухаживать за изделиями Dragon Kingdom?',
    a: 'Хлопок: стирка 30-40°C, не отбеливать. Флис: стирка 30°C, не сушить в барабане. Смесовые ткани: следуйте инструкции на этикетке.',
  },
  {
    q: 'Есть ли программа лояльности?',
    a: 'Да, для постоянных клиентов действуют скидки и ранний доступ к новым коллекциям. Подпишитесь на наши соцсети, чтобы не пропустить акции.',
  },
  {
    q: 'Можно ли заказать оптом?',
    a: 'Да, для оптовых заказов свяжитесь с нами по почте info@dragonkingdom.ru или по телефону. Условия обсуждаются индивидуально.',
  },
  {
    q: 'В каких городах есть офлайн-магазины?',
    a: 'На данный момент мы работаем только онлайн. Следите за нашими новостями — в 2025 году планируем открытие первого шоурума в Москве.',
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Помощь</p>
          <h1 className="font-bebas text-5xl tracking-wider text-white">ЧАСТЫЕ ВОПРОСЫ</h1>
          <p className="text-white/40 font-golos text-sm mt-3">Ответы на популярные вопросы о заказах, доставке и товарах</p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded border transition-all duration-200 ${open === i ? 'border-dragon-orange/40 bg-dragon-dark-2' : 'border-white/5 bg-dragon-dark-2/50 hover:border-white/10'}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-golos font-semibold text-sm transition-colors ${open === i ? 'text-white' : 'text-white/70'}`}>
                  {faq.q}
                </span>
                <Icon
                  name={open === i ? 'ChevronUp' : 'ChevronDown'}
                  size={16}
                  className={`flex-shrink-0 transition-colors ${open === i ? 'text-dragon-orange' : 'text-white/30'}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 animate-fade-in" style={{ opacity: 0 }}>
                  <p className="font-golos text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-dragon-dark-2 border border-white/5 rounded p-8 text-center">
          <Icon name="MessageCircle" size={32} className="text-dragon-orange/40 mx-auto mb-4" />
          <h3 className="font-bebas text-2xl tracking-wider text-white mb-2">НЕ НАШЛИ ОТВЕТ?</h3>
          <p className="text-white/40 text-sm font-golos mb-5">Напишите нам — ответим в течение часа</p>
          <a
            href="mailto:info@dragonkingdom.ru"
            className="btn-fire inline-flex items-center gap-2 px-8 py-3 rounded font-bebas text-base tracking-widest"
          >
            <Icon name="Mail" size={16} />
            Написать нам
          </a>
        </div>
      </div>
    </div>
  );
}
