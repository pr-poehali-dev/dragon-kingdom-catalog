import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import CollectionsPage from '@/pages/CollectionsPage';
import CartPage from '@/pages/CartPage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';
import FaqPage from '@/pages/FaqPage';
import ContactsPage from '@/pages/ContactsPage';
import { Product } from '@/data/products';

interface CartItem extends Product {
  qty: number;
}

type Page = 'home' | 'catalog' | 'collections' | 'cart' | 'about' | 'blog' | 'faq' | 'contacts';

export default function Index() {
  const [page, setPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const navigate = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const changeQty = (id: number, qty: number) => {
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  useEffect(() => {
    document.title = page === 'home' ? 'DRAGON KINGDOM — Уличная одежда'
      : page === 'catalog' ? 'Каталог — DRAGON KINGDOM'
      : page === 'collections' ? 'Коллекции — DRAGON KINGDOM'
      : page === 'cart' ? `Корзина (${cartCount}) — DRAGON KINGDOM`
      : page === 'about' ? 'О бренде — DRAGON KINGDOM'
      : page === 'blog' ? 'Блог — DRAGON KINGDOM'
      : page === 'faq' ? 'FAQ — DRAGON KINGDOM'
      : 'Контакты — DRAGON KINGDOM';
  }, [page, cartCount]);

  return (
    <div className="min-h-screen bg-dragon-dark font-golos">
      <Navbar activePage={page} onNavigate={navigate} cartCount={cartCount} />

      <main>
        {page === 'home' && <HomePage onNavigate={navigate} onAddToCart={addToCart} />}
        {page === 'catalog' && <CatalogPage onAddToCart={addToCart} />}
        {page === 'collections' && <CollectionsPage onNavigate={navigate} />}
        {page === 'cart' && (
          <CartPage
            items={cart}
            onRemove={removeFromCart}
            onChangeQty={changeQty}
            onNavigate={navigate}
          />
        )}
        {page === 'about' && <AboutPage />}
        {page === 'blog' && <BlogPage />}
        {page === 'faq' && <FaqPage />}
        {page === 'contacts' && <ContactsPage />}
      </main>

      {page !== 'cart' && <Footer onNavigate={navigate} />}
    </div>
  );
}
