import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-dragon-dark pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-dragon-orange text-xs tracking-[0.3em] uppercase font-golos mb-2">Связь</p>
          <h1 className="font-bebas text-5xl tracking-wider text-white">КОНТАКТЫ</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-bebas text-2xl tracking-wider text-white mb-6">НАПИСАТЬ НАМ</h2>
            {sent ? (
              <div className="bg-dragon-dark-2 border border-green-500/20 rounded p-8 text-center animate-scale-in">
                <Icon name="CheckCircle" size={48} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-bebas text-2xl tracking-wider text-white mb-2">СООБЩЕНИЕ ОТПРАВЛЕНО!</h3>
                <p className="text-white/50 font-golos text-sm">Ответим в течение нескольких часов</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-5 text-dragon-orange font-golos text-sm hover:underline"
                >
                  Написать ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-golos mb-1.5 block">Имя</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Дракон"
                      className="w-full bg-dragon-dark-3 border border-white/10 rounded px-4 py-3 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-golos mb-1.5 block">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ivan@mail.ru"
                      className="w-full bg-dragon-dark-3 border border-white/10 rounded px-4 py-3 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs font-golos mb-1.5 block">Тема</label>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Вопрос по заказу"
                    className="w-full bg-dragon-dark-3 border border-white/10 rounded px-4 py-3 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange transition-colors placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-golos mb-1.5 block">Сообщение</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, чем можем помочь..."
                    className="w-full bg-dragon-dark-3 border border-white/10 rounded px-4 py-3 text-white text-sm font-golos focus:outline-none focus:border-dragon-orange transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>
                <button type="submit" className="btn-fire w-full py-4 rounded font-bebas text-lg tracking-widest relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Icon name="Send" size={16} />
                    Отправить
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="font-bebas text-2xl tracking-wider text-white mb-6">КАК НАС НАЙТИ</h2>

            {[
              { icon: 'Mail', title: 'Email', value: 'info@dragonkingdom.ru', sub: 'Ответ в течение 24 часов' },
              { icon: 'Phone', title: 'Телефон', value: '+7 (800) 555-00-00', sub: 'Пн–Пт, 10:00–20:00' },
              { icon: 'MessageCircle', title: 'Telegram', value: '@dragonkingdom', sub: 'Ответ в течение 1 часа' },
              { icon: 'MapPin', title: 'Офис', value: 'Москва, ул. Дракона, 1', sub: 'Только по предварительной записи' },
            ].map(({ icon, title, value, sub }) => (
              <div key={title} className="flex gap-4 bg-dragon-dark-2 border border-white/5 rounded p-5">
                <div className="w-10 h-10 rounded bg-dragon-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={icon} size={18} className="text-dragon-orange" fallback="Info" />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-golos uppercase tracking-wide mb-0.5">{title}</p>
                  <p className="font-golos font-semibold text-white text-sm">{value}</p>
                  <p className="text-white/30 text-xs font-golos mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            <div className="bg-dragon-dark-2 border border-dragon-orange/10 rounded p-5">
              <p className="font-bebas tracking-wider text-dragon-orange text-sm mb-1">ВРЕМЯ РАБОТЫ</p>
              <p className="text-white/60 text-sm font-golos">Понедельник — Пятница: 10:00 – 20:00</p>
              <p className="text-white/60 text-sm font-golos">Суббота: 11:00 – 18:00</p>
              <p className="text-white/40 text-sm font-golos">Воскресенье: выходной</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
