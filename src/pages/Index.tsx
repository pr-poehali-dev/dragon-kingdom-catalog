import { useState } from 'react';
import Icon from '@/components/ui/icon';

// ─── типы ──────────────────────────────────────────────
type Screen = 1 | 2 | 3 | 4 | 5;
type Tab = 'prototype' | 'status' | 'facilitation';
type Role = 'family' | 'child';

// ─── Вспомогательные компоненты ────────────────────────

function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto font-plex ${className}`} style={{ width: 320 }}>
      <div className="relative bg-bank-slate rounded-[44px] p-[10px] shadow-[0_40px_80px_rgba(30,42,59,0.35)]">
        <div className="relative bg-bank-bg rounded-[36px] overflow-hidden" style={{ minHeight: 620 }}>
          <div className="flex justify-between items-center px-6 pt-4 pb-1">
            <span className="text-[11px] font-medium text-bank-slate font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <Icon name="Signal" size={12} className="text-bank-slate" />
              <Icon name="Wifi" size={12} className="text-bank-slate" />
              <Icon name="Battery" size={12} className="text-bank-slate" />
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
    </div>
  );
}

function Badge({ color, children }: { color: 'blue' | 'green' | 'amber' | 'red' | 'slate'; children: React.ReactNode }) {
  const styles = {
    blue: 'bg-bank-blue-light text-bank-blue',
    green: 'bg-bank-green-light text-bank-green',
    amber: 'bg-bank-amber-light text-bank-amber',
    red: 'bg-bank-red-light text-bank-red',
    slate: 'bg-slate-100 text-bank-slate-mid',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[color]}`}>
      {children}
    </span>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-bank-blue text-xs font-mono font-medium tracking-widest uppercase mb-1">{label}</p>
      <h2 className="text-bank-slate text-2xl font-semibold">{title}</h2>
    </div>
  );
}

// ─── Экраны прототипа ──────────────────────────────────

function Screen1({ onNext }: { onNext: () => void }) {
  const categories = [
    { name: 'Продукты', pct: 38, color: 'bg-bank-blue', amount: '15 960 ₽' },
    { name: 'Транспорт', pct: 22, color: 'bg-bank-teal', amount: '9 240 ₽' },
    { name: 'Развлечения', pct: 18, color: 'bg-amber-400', amount: '7 560 ₽' },
    { name: 'Прочее', pct: 22, color: 'bg-slate-300', amount: '9 240 ₽' },
  ];

  return (
    <div className="animate-phone-enter" style={{ opacity: 0 }}>
      <div className="bg-bank-blue px-5 pt-2 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button className="text-white/70"><Icon name="ChevronLeft" size={20} /></button>
          <span className="text-white text-sm font-medium">Семейный бюджет</span>
          <button className="text-white/70"><Icon name="Settings" size={18} /></button>
        </div>
        <p className="text-white/70 text-xs mb-1">Расходы за май 2025</p>
        <p className="text-white text-3xl font-semibold">42 000 ₽</p>
        <p className="text-white/50 text-xs mt-0.5">из 60 000 ₽ бюджета</p>
        <div className="mt-3 bg-white/20 rounded-full h-1.5">
          <div className="bg-white rounded-full h-1.5" style={{ width: '70%' }} />
        </div>
      </div>
      <div className="px-4 pt-4 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide">Участники</p>
            <button
              onClick={onNext}
              className="flex items-center gap-1.5 bg-bank-blue text-white text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <Icon name="UserPlus" size={12} />
              Пригласить
            </button>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-bank-blue flex items-center justify-center text-white text-xs font-bold">ВВ</div>
            <div className="flex-1">
              <p className="text-bank-slate text-sm font-medium">Вы (владелец)</p>
              <p className="text-bank-slate-light text-xs">Владелец</p>
            </div>
            <span className="text-bank-slate text-xs font-medium">42 000 ₽</span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 border-2 border-dashed border-bank-border rounded-xl p-3 mt-2">
            <div className="w-9 h-9 rounded-full bg-bank-border flex items-center justify-center">
              <Icon name="Plus" size={16} className="text-bank-slate-light" />
            </div>
            <p className="text-bank-slate-light text-xs">Добавить члена семьи</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3">Расходы по категориям</p>
          <div className="flex gap-1 h-2 rounded-full overflow-hidden mb-3">
            {categories.map(c => (
              <div key={c.name} className={`${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
            ))}
          </div>
          <div className="space-y-2">
            {categories.map(c => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${c.color}`} />
                  <span className="text-bank-slate-mid text-xs">{c.name}</span>
                </div>
                <span className="text-bank-slate text-xs font-medium">{c.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-bank-blue-light text-bank-blue text-sm font-medium py-3 rounded-xl flex items-center justify-center gap-2">
          <Icon name="Target" size={15} />
          Добавить финансовую цель
        </button>
      </div>
    </div>
  );
}

function Screen2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<Role>('family');
  const [error, setError] = useState('');

  const handleSend = () => {
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Введите корректный номер телефона');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="animate-phone-enter" style={{ opacity: 0 }}>
      <div className="px-5 pt-3">
        <button onClick={onBack} className="flex items-center gap-1 text-bank-blue text-sm mb-4">
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>
        <h1 className="text-bank-slate text-lg font-semibold mb-1">Пригласить участника</h1>
        <p className="text-bank-slate-light text-sm mb-6">Введите номер телефона человека, которого хотите добавить</p>
        <div className="mb-4">
          <label className="text-bank-slate text-xs font-medium mb-1.5 block">Номер телефона</label>
          <div className={`flex items-center bg-white border rounded-xl px-4 py-3 gap-3 ${error ? 'border-bank-red' : 'border-bank-border focus-within:border-bank-blue'} transition-colors`}>
            <span className="text-bank-slate-mid text-sm">+7</span>
            <div className="w-px h-4 bg-bank-border" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setError(''); }}
              placeholder="(999) 999-99-99"
              className="flex-1 bg-transparent text-bank-slate text-sm outline-none placeholder:text-bank-slate-light"
            />
          </div>
          {error && <p className="text-bank-red text-xs mt-1 flex items-center gap-1"><Icon name="AlertCircle" size={11} />{error}</p>}
        </div>
        <div className="mb-4">
          <label className="text-bank-slate text-xs font-medium mb-2 block">Роль участника</label>
          <div className="grid grid-cols-2 gap-2">
            {([
              { value: 'family' as Role, label: 'Член семьи', icon: 'Users', desc: 'Полный доступ к бюджету' },
              { value: 'child' as Role, label: 'Ребёнок', icon: 'Baby', desc: 'Ограниченный доступ' },
            ]).map(opt => (
              <button
                key={opt.value}
                onClick={() => setRole(opt.value)}
                className={`p-3 rounded-xl border-2 text-left transition-all ${role === opt.value ? 'border-bank-blue bg-bank-blue-light' : 'border-bank-border bg-white'}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${role === opt.value ? 'bg-bank-blue' : 'bg-bank-bg'}`}>
                  <Icon name={opt.icon} size={14} className={role === opt.value ? 'text-white' : 'text-bank-slate-mid'} fallback="User" />
                </div>
                <p className={`text-xs font-semibold mb-0.5 ${role === opt.value ? 'text-bank-blue' : 'text-bank-slate'}`}>{opt.label}</p>
                <p className="text-bank-slate-light text-[10px] leading-tight">{opt.desc}</p>
              </button>
            ))}
          </div>
        </div>
        {role === 'child' && (
          <div className="mb-3 bg-bank-amber-light border border-amber-200 rounded-xl p-3 flex gap-2 animate-fade-in-fast">
            <Icon name="Info" size={14} className="text-bank-amber mt-0.5 flex-shrink-0" />
            <p className="text-bank-amber text-xs leading-relaxed">Роль «Ребёнок» требует согласования с юридическим отделом.</p>
          </div>
        )}
        <div className="mb-4">
          <p className="text-bank-slate text-xs font-medium mb-2">Или поделиться через:</p>
          <div className="flex gap-2">
            {[{ icon: 'QrCode', label: 'QR-код' }, { icon: 'MessageCircle', label: 'Мессенджер' }, { icon: 'Link', label: 'Ссылка' }].map(w => (
              <button key={w.icon} className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-white border border-bank-border rounded-xl text-bank-slate-mid hover:border-bank-blue hover:text-bank-blue transition-colors">
                <Icon name={w.icon} size={16} fallback="Share2" />
                <span className="text-[10px]">{w.label}</span>
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleSend} className="w-full bg-bank-blue text-white text-sm font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2">
          <Icon name="Send" size={15} />
          Отправить приглашение
        </button>
      </div>
    </div>
  );
}

function Screen3({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 animate-phone-enter" style={{ opacity: 0, minHeight: 560 }}>
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-bank-green-light rounded-full flex items-center justify-center">
          <Icon name="CheckCircle" size={36} className="text-bank-green" />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-bank-green/30 animate-ping-slow" />
      </div>
      <h2 className="text-bank-slate text-xl font-semibold mb-2">Приглашение отправлено!</h2>
      <p className="text-bank-slate-light text-sm leading-relaxed mb-2">Мы отправили SMS и push-уведомление</p>
      <p className="text-bank-blue font-medium text-sm mb-2">+7 (999) 123-45-67</p>
      <p className="text-bank-slate-light text-xs mb-6">Приглашение действует 48 часов</p>
      <div className="w-full bg-bank-blue-light rounded-xl p-4 mb-6 text-left">
        <div className="flex items-start gap-3">
          <Icon name="Bell" size={16} className="text-bank-blue mt-0.5" />
          <div>
            <p className="text-bank-slate text-xs font-semibold mb-1">Что произойдёт дальше?</p>
            {['Участник получит уведомление', 'Примет или отклонит приглашение', 'Вы получите подтверждение'].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-bank-slate-mid text-xs py-0.5">
                <span className="w-4 h-4 rounded-full bg-bank-blue/15 text-bank-blue text-[9px] font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={onNext} className="w-full bg-bank-blue text-white text-sm font-semibold py-3.5 rounded-xl">Готово</button>
    </div>
  );
}

function Screen4({ onNext }: { onNext: () => void }) {
  const [declined, setDeclined] = useState(false);
  if (declined) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-6 animate-phone-enter" style={{ opacity: 0, minHeight: 560 }}>
        <div className="w-16 h-16 bg-bank-red-light rounded-full flex items-center justify-center mb-4">
          <Icon name="X" size={28} className="text-bank-red" />
        </div>
        <h2 className="text-bank-slate text-lg font-semibold mb-2">Приглашение отклонено</h2>
        <p className="text-bank-slate-light text-sm">Владелец бюджета получит уведомление об отказе.</p>
      </div>
    );
  }
  return (
    <div className="animate-phone-enter" style={{ opacity: 0 }}>
      <div className="mx-4 mt-2 mb-4 bg-white border border-bank-border rounded-2xl p-3 shadow-md flex items-start gap-3">
        <div className="w-8 h-8 bg-bank-blue rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="Home" size={14} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-bank-slate text-xs font-semibold">МойБанк</p>
          <p className="text-bank-slate-mid text-xs truncate">Вас пригласили в семейный бюджет</p>
        </div>
        <span className="text-bank-slate-light text-[10px]">сейчас</span>
      </div>
      <div className="px-5 space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
          <div className="w-14 h-14 bg-bank-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">АС</div>
          <p className="text-bank-slate font-semibold">Александр Смирнов</p>
          <p className="text-bank-slate-light text-xs mt-0.5">+7 (985) 456-78-90</p>
        </div>
        <div className="bg-bank-blue-light border border-bank-blue-mid rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Users" size={16} className="text-bank-blue" />
            <p className="text-bank-blue text-sm font-semibold">Семейный бюджет</p>
          </div>
          <p className="text-bank-slate-mid text-sm leading-relaxed mb-3">
            <span className="font-semibold text-bank-slate">Александр С.</span> приглашает вас управлять общими финансами семьи
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[{ label: 'Участников', value: '1' }, { label: 'Бюджет/мес', value: '60 000 ₽' }, { label: 'Ваша роль', value: 'Член семьи' }].map(item => (
              <div key={item.label} className="bg-white/60 rounded-lg p-2">
                <p className="text-bank-slate text-xs font-semibold">{item.value}</p>
                <p className="text-bank-slate-light text-[10px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-bank-border rounded-xl p-3 flex gap-2">
          <Icon name="ShieldCheck" size={14} className="text-bank-green mt-0.5 flex-shrink-0" />
          <p className="text-bank-slate-mid text-xs leading-relaxed">Вы не состоите в другом семейном бюджете. Принятие безопасно.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setDeclined(true)} className="py-3.5 rounded-xl border-2 border-bank-border text-bank-slate-mid text-sm font-medium hover:border-bank-red hover:text-bank-red transition-colors">
            Отклонить
          </button>
          <button onClick={onNext} className="py-3.5 rounded-xl bg-bank-blue text-white text-sm font-semibold">
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}

function Screen5({ onReset }: { onReset: () => void }) {
  const members = [
    { name: 'Александр С. (владелец)', initials: 'АС', role: 'Владелец', color: 'bg-bank-blue', isNew: false },
    { name: 'Мария С. (член семьи)', initials: 'МС', role: 'Член семьи', color: 'bg-bank-teal', isNew: true },
  ];
  return (
    <div className="animate-phone-enter" style={{ opacity: 0 }}>
      <div className="bg-bank-green px-5 pt-2 pb-5">
        <div className="flex items-center justify-between mb-3">
          <button className="text-white/70"><Icon name="ChevronLeft" size={20} /></button>
          <span className="text-white text-sm font-medium">Семейный бюджет</span>
          <button className="text-white/70"><Icon name="Settings" size={18} /></button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Мария подключилась!</p>
            <p className="text-white/70 text-xs">Теперь вы вместе управляете бюджетом</p>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 space-y-3">
        <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide">Участники — 2</p>
        {members.map(m => (
          <div key={m.name} className={`flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm ${m.isNew ? 'ring-2 ring-bank-teal/40' : ''}`}>
            <div className={`w-9 h-9 rounded-full ${m.color} flex items-center justify-center text-white text-xs font-bold relative`}>
              {m.initials}
              {m.isNew && <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-bank-green border-2 border-white rounded-full" />}
            </div>
            <div className="flex-1">
              <p className="text-bank-slate text-sm font-medium">{m.name}</p>
              <p className="text-bank-slate-light text-xs">{m.role}</p>
            </div>
            {m.isNew && <Badge color="green">Новый</Badge>}
          </div>
        ))}
        <div className="bg-bank-teal-light border border-teal-200 rounded-xl p-3">
          <p className="text-bank-teal text-xs font-semibold mb-2 flex items-center gap-1.5"><Icon name="Key" size={12} />Права «Член семьи»</p>
          {[
            { icon: 'Eye', label: 'Просматривать расходы', ok: true },
            { icon: 'PenLine', label: 'Добавлять операции', ok: true },
            { icon: 'UserX', label: 'Удалять участников', ok: false },
            { icon: 'Trash2', label: 'Закрывать счета', ok: false },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 py-0.5">
              <Icon name={item.ok ? 'Check' : 'X'} size={11} className={item.ok ? 'text-bank-green' : 'text-bank-red'} />
              <span className="text-bank-slate-mid text-xs">{item.label}</span>
            </div>
          ))}
        </div>
        <button onClick={onReset} className="w-full bg-bank-blue text-white text-sm font-semibold py-3.5 rounded-xl">На главный экран</button>
      </div>
    </div>
  );
}

// ─── Секция прототипа ──────────────────────────────────

function PrototypeSection() {
  const [screen, setScreen] = useState<Screen>(1);

  const screenLabels: Record<Screen, string> = {
    1: 'Главный экран', 2: 'Форма приглашения', 3: 'Отправлено', 4: 'Взгляд приглашённого', 5: 'После принятия',
  };

  const riskMap: Record<Screen, { risk: string; solution: string; ok: boolean }[]> = {
    1: [
      { risk: 'Кнопка приглашения не видна', solution: 'Вынесена на первый план, не скрыта в меню', ok: true },
      { risk: 'Непонятно, что такое «семейный бюджет»', solution: 'Контекст через цифры: бюджет, участники, расходы', ok: true },
    ],
    2: [
      { risk: 'Ошибка в номере телефона', solution: 'Валидация формата перед отправкой', ok: true },
      { risk: 'Роль «Ребёнок» не доработана', solution: 'Предупреждение о статусе разработки', ok: false },
      { risk: 'Пользователь не знает о QR', solution: 'Альтернативные способы показаны явно', ok: true },
    ],
    3: [
      { risk: 'Задержка доставки уведомления', solution: 'Индикатор ожидания + срок действия 48ч', ok: true },
      { risk: 'Пользователь не знает, что будет', solution: 'Пошаговое объяснение на экране', ok: true },
    ],
    4: [
      { risk: 'Приглашённый уже в другом бюджете', solution: 'Проверка и предупреждение перед принятием', ok: true },
      { risk: 'Непонятно, кто пригласил', solution: 'Карточка с именем и телефоном', ok: true },
      { risk: 'Нет сценария отзыва приглашения', solution: 'Требует отдельного экрана (в беклоге)', ok: false },
    ],
    5: [
      { risk: 'Непрозрачные права участника', solution: 'Список прав показан сразу после принятия', ok: true },
      { risk: 'Задержка синхронизации', solution: 'Индикатор «Новый» пока данные не синхронизированы', ok: false },
    ],
  };

  const descMap: Record<Screen, string> = {
    1: 'Главный экран функции. Отображает текущий бюджет, список участников и диаграмму расходов. Кнопка «Пригласить» вынесена в шапку.',
    2: 'Форма отправки приглашения. Поддерживает ввод телефона, выбор роли и альтернативные способы: QR, мессенджер, ссылка.',
    3: 'Подтверждение отправки. Пользователь знает, что приглашение ушло, и понимает следующие шаги.',
    4: 'Экран приглашённого. Видна карточка пригласившего, роль, параметры бюджета. Два чётких действия: принять или отклонить.',
    5: 'Состояние после принятия. У владельца — новая карточка участника. Права роли «Член семьи» прозрачно описаны.',
  };

  return (
    <div>
      <SectionTitle label="Wireframe · Low-fidelity" title="Интерактивный прототип" />
      {/* Stepper */}
      <div className="flex items-center gap-0 mb-8 overflow-x-auto pb-2">
        {([1, 2, 3, 4, 5] as Screen[]).map((s, i) => (
          <div key={s} className="flex items-center flex-shrink-0">
            <button onClick={() => setScreen(s)} className="flex flex-col items-center gap-1.5 px-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${screen === s ? 'bg-bank-blue text-white shadow-lg shadow-bank-blue/30' : s < screen ? 'bg-bank-green text-white' : 'bg-bank-border text-bank-slate-light'}`}>
                {s < screen ? <Icon name="Check" size={12} /> : s}
              </div>
              <span className={`text-[10px] text-center leading-tight max-w-[60px] ${screen === s ? 'text-bank-blue font-medium' : 'text-bank-slate-light'}`}>
                {screenLabels[s]}
              </span>
            </button>
            {i < 4 && <div className={`w-6 h-0.5 mx-1 flex-shrink-0 transition-colors ${s < screen ? 'bg-bank-green' : 'bg-bank-border'}`} />}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-shrink-0">
          <PhoneFrame>
            {screen === 1 && <Screen1 onNext={() => setScreen(2)} />}
            {screen === 2 && <Screen2 onNext={() => setScreen(3)} onBack={() => setScreen(1)} />}
            {screen === 3 && <Screen3 onNext={() => setScreen(4)} />}
            {screen === 4 && <Screen4 onNext={() => setScreen(5)} />}
            {screen === 5 && <Screen5 onReset={() => setScreen(1)} />}
          </PhoneFrame>
          <div className="flex justify-center gap-3 mt-4">
            <button onClick={() => setScreen(s => Math.max(1, s - 1) as Screen)} disabled={screen === 1} className="w-9 h-9 rounded-full border border-bank-border flex items-center justify-center text-bank-slate-mid disabled:opacity-30 hover:border-bank-blue hover:text-bank-blue transition-colors">
              <Icon name="ChevronLeft" size={16} />
            </button>
            <span className="flex items-center text-bank-slate-light text-xs">{screen} / 5</span>
            <button onClick={() => setScreen(s => Math.min(5, s + 1) as Screen)} disabled={screen === 5} className="w-9 h-9 rounded-full border border-bank-border flex items-center justify-center text-bank-slate-mid disabled:opacity-30 hover:border-bank-blue hover:text-bank-blue transition-colors">
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-4 animate-fade-in" style={{ opacity: 0 }}>
          <div>
            <h3 className="text-bank-slate font-semibold text-lg mb-1">Экран {screen} — {screenLabels[screen]}</h3>
            <p className="text-bank-slate-light text-sm">{descMap[screen]}</p>
          </div>
          <div>
            <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-2">Возможные точки отказа</p>
            <div className="space-y-2">
              {riskMap[screen].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-bank-border rounded-xl p-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.ok ? 'bg-bank-green-light' : 'bg-bank-amber-light'}`}>
                    <Icon name={item.ok ? 'Check' : 'AlertTriangle'} size={10} className={item.ok ? 'text-bank-green' : 'text-bank-amber'} />
                  </div>
                  <div>
                    <p className="text-bank-slate text-xs font-medium">{item.risk}</p>
                    <p className="text-bank-slate-light text-xs mt-0.5">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {screen === 5 && (
            <div className="bg-bank-blue-light border border-bank-blue-mid rounded-xl p-4 animate-fade-in" style={{ opacity: 0 }}>
              <p className="text-bank-blue text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="ClipboardCheck" size={13} />
                Чеклист PM
              </p>
              {[
                { done: true, text: 'Права доступа согласованы для ролей «Владелец» и «Член семьи»' },
                { done: true, text: 'Надписи на кнопках понятны пользователям' },
                { done: true, text: 'Обработка ошибок: неверный номер, уже в другом бюджете' },
                { done: false, text: 'Сценарий отзыва приглашения — нужен отдельный экран' },
                { done: false, text: 'Правила роли «Ребёнок» — ожидается согласование с юристами' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5">
                  <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${item.done ? 'bg-bank-green' : 'bg-bank-border'}`}>
                    {item.done && <Icon name="Check" size={9} className="text-white" />}
                  </div>
                  <span className={`text-xs ${item.done ? 'text-bank-slate' : 'text-bank-slate-light'}`}>{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Статусный апдейт ───────────────────────────────────

function StatusSection() {
  return (
    <div>
      <SectionTitle label="Бонусное задание 1" title="Статусный апдейт PM" />
      <div className="max-w-3xl space-y-5">
        <div className="bg-white border border-bank-border rounded-2xl overflow-hidden">
          <div className="bg-bank-slate px-6 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-white/40 text-xs font-mono mb-1">СТАТУСНЫЙ АПДЕЙТ · 30 МАЯ 2025</p>
                <h3 className="text-white font-semibold">Семейный бюджет — завершение прототипирования ключевого сценария</h3>
              </div>
              <Badge color="green">Завершено</Badge>
            </div>
          </div>
          <div className="px-6 py-5 space-y-6">
            <div className="border-l-4 border-bank-blue pl-4">
              <p className="text-bank-slate text-sm leading-relaxed">
                Уважаемые коллеги, направляю статус по проекту <strong>«Семейный бюджет»</strong> по итогам прототипирования основного сценария «Подключение второго участника». Прототип согласован с заказчиком.
              </p>
            </div>

            <div>
              <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="Activity" size={13} className="text-bank-blue" />Текущее состояние
              </p>
              <div className="space-y-2">
                {['Разработан low-fidelity прототип (wireframe) сценария добавления члена семьи', 'Внутреннее ревью с аналитиками и дизайнером — внесены правки по расположению кнопок и формулировкам', 'Тестирование на 5 внутренних пользователях — 3 замечания, все исправлены', 'Согласованы ролевые модели: «Владелец» и «Член семьи» (без права удалять счета)'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-bank-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={10} className="text-bank-green" />
                    </div>
                    <p className="text-bank-slate-mid text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="Trophy" size={13} className="text-bank-amber" />Результаты
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: 'FileCheck', label: 'Прототип', desc: 'Передан в разработку для оценки трудоёмкости' },
                  { icon: 'Server', label: 'Backend-требования', desc: 'API приглашений, хранение связей семья–участник' },
                  { icon: 'BookOpen', label: 'User stories', desc: 'Лимиты, общая диаграмма расходов' },
                ].map(item => (
                  <div key={item.label} className="bg-bank-bg rounded-xl p-3">
                    <div className="w-7 h-7 bg-bank-blue-light rounded-lg flex items-center justify-center mb-2">
                      <Icon name={item.icon} size={14} className="text-bank-blue" fallback="File" />
                    </div>
                    <p className="text-bank-slate text-xs font-semibold">{item.label}</p>
                    <p className="text-bank-slate-light text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="AlertTriangle" size={13} className="text-bank-amber" />Риски и блокеры
              </p>
              <div className="space-y-3">
                {[
                  { level: 'medium', title: 'Интеграция push-уведомлений', desc: 'Задержка 3–5 дней из-за загруженности смежной команды. Приоритет согласован на следующий спринт.' },
                  { level: 'high', title: 'Роль «Ребёнок»', desc: 'Ограничения по суммам и родительский контроль требуют согласования с юридическим отделом. Срок — до 10 июня.' },
                ].map((risk, i) => (
                  <div key={i} className={`flex gap-3 p-4 rounded-xl border ${risk.level === 'high' ? 'bg-bank-red-light border-red-200' : 'bg-bank-amber-light border-amber-200'}`}>
                    <Icon name="AlertTriangle" size={15} className={risk.level === 'high' ? 'text-bank-red mt-0.5' : 'text-bank-amber mt-0.5'} />
                    <div>
                      <p className="text-bank-slate text-sm font-semibold">{risk.title}</p>
                      <p className="text-bank-slate-mid text-xs mt-1">{risk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="Calendar" size={13} className="text-bank-teal" />Следующие шаги
              </p>
              <div className="relative">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-bank-border" />
                {[
                  { date: 'до 5 июня', text: 'API-спецификация + high-fidelity макеты для сценария подключения', milestone: false },
                  { date: '6–10 июня', text: 'Параллельная разработка бэкенда и фронтенда (оценка: 8 дней)', milestone: false },
                  { date: '12 июня', text: 'Демо-версия для заказчика', milestone: true },
                  { date: '15 июня', text: 'Передача на тестирование', milestone: false },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 pb-4 relative">
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 z-10 flex items-center justify-center ${step.milestone ? 'bg-bank-blue border-bank-blue' : 'bg-white border-bank-border'}`}>
                      {step.milestone && <Icon name="Star" size={9} className="text-white" />}
                    </div>
                    <div>
                      <span className="text-bank-slate-light text-[10px] font-mono">{step.date}</span>
                      <p className="text-bank-slate text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bank-blue-light border border-bank-blue-mid rounded-xl p-4">
              <p className="text-bank-blue text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Icon name="HelpCircle" size={13} />Открытые вопросы
              </p>
              {[
                { q: 'Включаем ли MVP сценарий «отказ от приглашения»?', note: '+2 дня разработки', deadline: 'ответ до 3 июня' },
                { q: 'Ограничение участников по возрасту (только 18+)?', note: 'Решение руководителя направления', deadline: 'ответ до 3 июня' },
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2 py-2 border-t border-bank-blue-mid first:border-0">
                  <Icon name="HelpCircle" size={13} className="text-bank-blue mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-bank-slate text-xs">{q.q}</p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <Badge color="slate">{q.note}</Badge>
                      <Badge color="amber">⏰ {q.deadline}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Фасилитация ───────────────────────────────────────

function FacilitationSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const agenda = [
    { time: '0–5 мин', title: 'Открытие, контекст', desc: 'Приветствие. Цель — снять блокеры по фронтенду, интеграции и новым требованиям.', icon: 'Play' },
    { time: '5–15 мин', title: 'Статус фронтенда', desc: 'Разработчик фронтенда: что задержало, на сколько? Дизайнер: когда готовы недостающие макеты?', icon: 'Layout' },
    { time: '15–30 мин', title: 'Дебаты по интеграции API', desc: 'Два разработчика: прямая интеграция vs промежуточный сервис. Фасилитатор фиксирует аргументы.', icon: 'GitMerge' },
    { time: '30–40 мин', title: 'Новые требования заказчика', desc: 'Излагаем суть (5–7 мин), оцениваем влияние на текущий спринт.', icon: 'FileText' },
    { time: '40–45 мин', title: 'Решения и следующие шаги', desc: 'Фиксация договорённостей, назначение ответственных, обновление бэклога.', icon: 'CheckSquare' },
  ];

  return (
    <div>
      <SectionTitle label="Бонусное задание 2" title="Фасилитация и командная синхронизация" />
      <div className="max-w-3xl space-y-5">
        <div className="bg-white border border-bank-border rounded-2xl p-5">
          <div className="flex flex-wrap gap-4 mb-4">
            {[{ icon: 'Video', label: 'Zoom / Teams' }, { icon: 'Clock', label: '45 минут' }, { icon: 'MapPin', label: 'Москва + Красноярск' }, { icon: 'Users', label: 'Распределённая команда' }].map(item => (
              <div key={item.label} className="flex items-center gap-2 text-bank-slate-mid text-xs">
                <Icon name={item.icon} size={13} className="text-bank-blue" fallback="Info" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="bg-bank-blue-light rounded-xl px-4 py-3 text-bank-blue text-xs">
            Синхронный формат — для оперативного разрешения архитектурного конфликта. Асинхронно это заняло бы несколько дней.
          </div>
        </div>

        <div className="bg-white border border-bank-border rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-bank-border flex items-center gap-2">
            <Icon name="Calendar" size={16} className="text-bank-blue" />
            <p className="text-bank-slate font-semibold">Тайм-бокс встречи</p>
          </div>
          {agenda.map((item, i) => (
            <div key={i} className={`border-b border-bank-border last:border-0 ${expanded === i ? 'bg-bank-blue-light/40' : 'hover:bg-bank-bg'}`}>
              <button className="w-full flex items-center gap-4 px-5 py-4 text-left" onClick={() => setExpanded(expanded === i ? null : i)}>
                <span className="font-mono text-xs text-bank-slate-light w-14 flex-shrink-0">{item.time}</span>
                <div className="w-7 h-7 bg-bank-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={13} className="text-bank-blue" fallback="Circle" />
                </div>
                <span className="text-bank-slate text-sm font-medium flex-1">{item.title}</span>
                <Icon name={expanded === i ? 'ChevronUp' : 'ChevronDown'} size={14} className="text-bank-slate-light flex-shrink-0" />
              </button>
              {expanded === i && (
                <div className="px-5 pb-4 pl-[calc(56px+28px+20px)]">
                  <p className="text-bank-slate-mid text-sm">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="text-bank-slate text-xs font-semibold uppercase tracking-wide mb-3">Приёмы фасилитации</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: 'Mic', title: 'Один спикер', desc: 'Поднятая рука в Zoom, слово по очереди. Снижает конфликтность при дебатах.' },
              { icon: 'Timer', title: 'Тайм-бокс', desc: '2 мин на аргумент + 2 мин на вопросы. Не даёт затягивать споры.' },
              { icon: 'MapPin', title: 'Дорожка решений', desc: 'Итог каждого пункта сразу фиксируется в чат/Miro с назначением ответственного.' },
            ].map(t => (
              <div key={t.title} className="bg-white border border-bank-border rounded-xl p-4">
                <div className="w-8 h-8 bg-bank-teal-light rounded-lg flex items-center justify-center mb-3">
                  <Icon name={t.icon} size={15} className="text-bank-teal" fallback="Lightbulb" />
                </div>
                <p className="text-bank-slate text-sm font-semibold mb-1">{t.title}</p>
                <p className="text-bank-slate-light text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-bank-border rounded-2xl p-5">
          <p className="text-bank-slate font-semibold mb-4 flex items-center gap-2">
            <Icon name="Package" size={16} className="text-bank-blue" />
            Артефакты встречи
          </p>
          <div className="space-y-3">
            {[
              { title: 'Протокол решений', where: 'Confluence', example: '«Интеграция через промежуточный сервис. Ответственный: Иванов И.И. Срок: пятница»', icon: 'FileText' },
              { title: 'Обновлённый бэклог', where: 'Jira', example: 'Задачи по дизайну, фронтенду, API с назначенными ответственными', icon: 'List' },
              { title: 'Решение по требованиям', where: 'Jira', example: 'Новые требования → отдельная задача в следующий спринт', icon: 'GitBranch' },
            ].map(a => (
              <div key={a.title} className="flex gap-3 p-3 bg-bank-bg rounded-xl">
                <div className="w-7 h-7 bg-bank-blue-light rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={a.icon} size={13} className="text-bank-blue" fallback="File" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-bank-slate text-xs font-semibold">{a.title}</p>
                    <Badge color="slate">{a.where}</Badge>
                  </div>
                  <p className="text-bank-slate-light text-xs mt-1 italic">"{a.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-bank-border rounded-2xl overflow-hidden">
          <div className="bg-bank-slate px-5 py-3 flex items-center gap-3">
            <Icon name="MessageSquare" size={14} className="text-white/60" />
            <p className="text-white text-sm font-medium">Статусное сообщение перед встречей</p>
            <Badge color="blue">Slack / Teams</Badge>
          </div>
          <div className="p-5">
            <div className="bg-bank-bg rounded-xl p-4 font-mono text-xs text-bank-slate-mid leading-relaxed space-y-2">
              <p className="text-bank-slate font-semibold">Тема: Командная синхронизация — блокеры и новые требования (03.06)</p>
              <p>Уважаемая команда! Приглашаю на онлайн-встречу сегодня в 15:00 МСК (~45 мин).</p>
              <div>
                <p className="text-bank-slate font-semibold mb-1">Повестка:</p>
                <p>1. Задержка фронтенда из-за позднего финала дизайна</p>
                <p>2. Конфликт по архитектуре API — подготовьте 3–4 тезиса</p>
                <p>3. Новые требования заказчика — влияние на спринт</p>
              </div>
              <div>
                <p className="text-bank-slate font-semibold mb-1">Ожидаемые результаты:</p>
                <p>• Принятое архитектурное решение</p>
                <p>• Скорректированный план по фронтенду</p>
                <p>• Решение по включению требований в спринт</p>
              </div>
              <p className="text-bank-blue">Прошу подтвердить участие. С уважением, PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Главный компонент ─────────────────────────────────

export default function Index() {
  const [tab, setTab] = useState<Tab>('prototype');

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'prototype', label: 'UX-прототип', icon: 'Smartphone' },
    { id: 'status', label: 'Статусный апдейт', icon: 'BarChart2' },
    { id: 'facilitation', label: 'Фасилитация', icon: 'Users' },
  ];

  return (
    <div className="min-h-screen bg-bank-bg font-plex">
      <header className="bg-white border-b border-bank-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-bank-blue rounded-lg flex items-center justify-center">
                <Icon name="Home" size={14} className="text-white" />
              </div>
              <span className="text-bank-slate font-semibold text-sm">МойБанк</span>
              <span className="text-bank-slate-light text-xs hidden sm:inline">/ Семейный бюджет</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge color="blue">UX-прототип</Badge>
              <Badge color="green">Wireframe</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-br from-bank-slate to-bank-slate-mid text-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-2">Проектная документация</p>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3 leading-tight">
            Семейный бюджет<br />
            <span className="text-white/50 font-light text-2xl sm:text-3xl">— подключение второго участника</span>
          </h1>
          <p className="text-white/50 text-sm max-w-xl leading-relaxed mb-5">
            Полный UX-сценарий, low-fidelity прототип (5 экранов), статусный апдейт PM и план фасилитации командной синхронизации.
          </p>
          <div className="flex flex-wrap gap-2">
            {[{ icon: 'Smartphone', label: '5 экранов' }, { icon: 'ShieldCheck', label: '2 роли' }, { icon: 'AlertTriangle', label: '5 точек отказа' }, { icon: 'Calendar', label: 'Демо: 12 июня' }].map(item => (
              <div key={item.label} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/70">
                <Icon name={item.icon} size={11} className="text-white/50" fallback="Info" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-bank-border sticky top-14 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${tab === t.id ? 'border-bank-blue text-bank-blue' : 'border-transparent text-bank-slate-light hover:text-bank-slate'}`}
            >
              <Icon name={t.icon} size={15} fallback="Circle" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div key={tab} className="animate-fade-in" style={{ opacity: 0 }}>
          {tab === 'prototype' && <PrototypeSection />}
          {tab === 'status' && <StatusSection />}
          {tab === 'facilitation' && <FacilitationSection />}
        </div>
      </main>

      <footer className="border-t border-bank-border bg-white py-5 px-4 sm:px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-bank-slate-light text-xs">
          <span>© 2025 МойБанк — Проект «Семейный бюджет»</span>
          <span className="font-mono">v1.0 · прототип · не продакшн</span>
        </div>
      </footer>
    </div>
  );
}
