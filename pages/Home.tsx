
import React, { useState, useMemo } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS, TESTIMONIALS, CATEGORIES } from '../constants';
import SEO from '../components/SEO';
import { ShoppingCart, Star, SearchX, Award, ShieldCheck, Zap, Quote, LayoutGrid, ArrowLeft, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search).get('search')?.toLowerCase() || '';
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.categories.toLowerCase().includes(query)
      );
    }
    if (activeCategory !== "الكل") {
      result = result.filter(p => p.categories === activeCategory);
    }
    return result;
  }, [query, activeCategory]);

  return (
    <div className="pb-20">
      <SEO />

      {!query && (
        <section className="relative min-h-[500px] md:h-[700px] flex items-center overflow-hidden bg-gray-950">
          {/* AI-Inspired Hero Visuals */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/50 to-transparent z-10"></div>
            {/* Image representing Professional Salon & Tech */}
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
              alt="High Tech Beauty Salon" 
              className="w-full h-full object-cover opacity-60 scale-105 animate-pulse duration-[15s]"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-white">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 px-4 py-2 rounded-full text-gold-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                <Sparkles size={14} /> التميز والابتكار في العناية بالشعر
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight">
                روعة <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">التكنولوجيا</span> <br /> 
                <span className="text-3xl md:text-5xl font-light opacity-80 italic">لجمال يدوم طويلاً</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-70 font-medium leading-relaxed max-w-2xl">
                نحن نوفر لكِ أحدث إصدارات كيمي وهوم جولد الأصلية. استمتعي بجودة الصالونات في منزلك مع أدواتنا الاحترافية الموثوقة.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <a href="#shop" className="bg-gold-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-gold-500 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(184,126,17,0.4)] flex items-center gap-3">
                  ابدئي التسوق <ArrowLeft size={20} />
                </a>
                <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
                  من نحن
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Sideways Label */}
          <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-4 text-white/40 text-sm font-bold rotate-90 origin-right">
            <span>PREMIUM HAIR CARE TECHNOLOGY</span>
            <div className="h-20 w-[1px] bg-white/20 mx-auto"></div>
            <span>CERTIFIED AGENT</span>
          </div>
        </section>
      )}

      {/* Category Tabs - Amazon Style but Gold */}
      <div className="sticky top-[80px] md:top-[96px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 font-black text-gray-400 whitespace-nowrap border-l pl-6">
            <LayoutGrid size={18} /> التصفية:
          </div>
          <div className="overflow-x-auto flex gap-3 no-scrollbar py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-black transition-all ${
                  activeCategory === cat 
                  ? 'bg-gold-600 text-white shadow-xl scale-105' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="shop" className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              {query ? `نتائج البحث عن: "${query}"` : `${activeCategory}`}
            </h2>
            <p className="text-gray-500 font-bold">تسوقي أحدث المنتجات الأصلية بضمان حقيقي</p>
          </div>
          <div className="bg-gold-50 text-gold-700 px-4 py-2 rounded-xl text-sm font-black border border-gold-100">
             تم العثور على {filteredProducts.length} منتج
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2">
                <Link to={`/product/${product.slug}`} className="relative block aspect-square p-8 overflow-hidden bg-gray-50/50">
                  <img src={product.thumb} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    {product.is_free_shipping && (
                      <span className="bg-green-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">شحن مجاني</span>
                    )}
                    <span className="bg-white/80 text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border border-gray-100">أصلي 100%</span>
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500"></span>
                    <span className="text-[11px] font-black text-gold-600 uppercase tracking-widest">{product.categories}</span>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-4 leading-snug group-hover:text-gold-600 transition-colors line-clamp-2 h-14">
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <div className="flex items-center gap-1 mb-6">
                    <div className="flex text-gold-400">
                      <Star size={14} className="fill-gold-400" />
                      <Star size={14} className="fill-gold-400" />
                      <Star size={14} className="fill-gold-400" />
                      <Star size={14} className="fill-gold-400" />
                      <Star size={14} className="fill-gold-400" />
                    </div>
                    <span className="text-gray-400 text-xs font-black mr-2">(موثق)</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-bold line-through">{(product.price * 1.2).toFixed(0)} ج.م</span>
                      <span className="text-3xl font-black text-gray-900">{product.price} <small className="text-sm">ج.م</small></span>
                    </div>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="bg-gray-950 text-white p-4 rounded-[1.25rem] hover:bg-gold-600 transition-all active:scale-90 shadow-xl"
                    >
                      <ShoppingCart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[4rem] border-2 border-dashed border-gray-100">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <SearchX size={48} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">عذراً، لم نجد ما تبحث عنه</h3>
            <p className="text-gray-500 mb-8">جرب البحث بكلمات أخرى أو تصفح الأقسام الرئيسية</p>
            <button onClick={() => {setActiveCategory("الكل"); navigate("/")}} className="bg-gold-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-gold-700 transition-all">العودة للرئيسية</button>
          </div>
        )}
      </div>

      {!query && (
        <>
          {/* Trust Badges */}
          <section className="mt-32 py-24 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/10 rounded-full blur-[100px]"></div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-gold-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-600">
                  <Award size={32} />
                </div>
                <h3 className="font-black text-2xl mb-4 text-gray-900">جودة احترافية</h3>
                <p className="text-gray-500 leading-relaxed">جميع منتجاتنا مختارة بعناية لتناسب المحترفين وتدوم طويلاً.</p>
              </div>
              <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="font-black text-2xl mb-4 text-gray-900">أمان الشراء</h3>
                <p className="text-gray-500 leading-relaxed">نظام "عاين قبل الاستلام" يضمن لكِ حقك في التأكد من المنتج قبل الدفع.</p>
              </div>
              <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Zap size={32} />
                </div>
                <h3 className="font-black text-2xl mb-4 text-gray-900">سرعة فائقة</h3>
                <p className="text-gray-500 leading-relaxed">توصيل منزلي خلال ساعات معدودة لضمان راحتك التامة.</p>
              </div>
            </div>
          </section>

          {/* Customer Reviews */}
          <section className="py-32 container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <span className="text-gold-600 font-black text-sm uppercase tracking-widest">ماذا يقول عملاؤنا</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">ثقتكم هي سر نجاحنا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TESTIMONIALS.map(item => (
                <div key={item.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:bg-gray-900 transition-all duration-500">
                  <Quote className="text-gold-500/20 absolute top-6 right-6 group-hover:text-gold-500/10" size={64} />
                  <div className="flex gap-1 mb-6 text-gold-400">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} className="fill-gold-400" />)}
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium group-hover:text-gray-300 transition-colors italic">"{item.comment}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 font-black text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 group-hover:text-white transition-colors">{item.name}</h4>
                      <p className="text-xs text-gray-400 font-bold">{item.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
