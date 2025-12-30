
import React from 'react';
import { Link } from 'react-router-dom';
// Added WHATSAPP_NUMBER to imports
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import SEO from '../components/SEO';
import { ShoppingCart, Star, Zap, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="space-y-12">
      <SEO />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" 
            alt="Hair Styling Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white space-y-6">
            <span className="bg-gold-600 px-4 py-1 rounded-full text-sm font-bold animate-bounce inline-block">تخفيضات تصل إلى 30%</span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              احترافية الصالونات <br />
              <span className="text-gold-500">في منزلك</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              اكتشفي سر الشعر المثالي مع مجموعة هوم جولد الحصرية. شحن سريع وطلب مباشر بضغطة زر.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="bg-gold-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-700 transition-all shadow-xl">تسوقي الآن</a>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">اعرفي المزيد</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Truck className="text-gold-500 mb-3" size={32} />
            <h3 className="font-bold">شحن سريع</h3>
            <p className="text-xs text-gray-500 mt-1">لكل محافظات مصر</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <ShieldCheck className="text-gold-500 mb-3" size={32} />
            <h3 className="font-bold">ضمان حقيقي</h3>
            <p className="text-xs text-gray-500 mt-1">جودة مضمونة 100%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Zap className="text-gold-500 mb-3" size={32} />
            <h3 className="font-bold">أداء احترافي</h3>
            <p className="text-xs text-gray-500 mt-1">تقنيات صالونات التجميل</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <ShoppingCart className="text-gold-500 mb-3" size={32} />
            <h3 className="font-bold">طلب واتساب</h3>
            <p className="text-xs text-gray-500 mt-1">سهولة في التنفيذ</p>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="bg-gold-50 py-4">
        <div className="container mx-auto px-4 flex overflow-x-auto gap-4 no-scrollbar">
          {["مجففات الشعر", "مكواة الشعر", "فرش الشعر", "إكسسوارات"].map(cat => (
            <button key={cat} className="whitespace-nowrap px-6 py-2 bg-white rounded-full text-sm font-bold border border-gold-200 text-gold-800 hover:bg-gold-600 hover:text-white transition-all shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product List */}
      <section id="products" className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold border-r-4 border-gold-500 pr-4">المنتجات الأكثر مبيعاً</h2>
          <Link to="/products" className="text-gold-600 font-bold hover:underline">عرض الكل</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col">
              <Link to={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden">
                <img 
                  src={product.thumb} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.is_free_shipping && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    شحن مجاني
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-center font-bold text-gray-900 shadow-xl">
                    عرض التفاصيل
                  </div>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold-400 text-gold-400" />)}
                  <span className="text-xs text-gray-400 mr-2">(128 تقييم)</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-2xl font-black text-gold-600">{product.price} <small className="text-sm font-normal">ج.م</small></span>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="bg-gold-600 text-white p-3 rounded-xl hover:bg-gold-700 transition-all shadow-md active:scale-95"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-12">
        <div className="bg-gold-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-black">هل تحتاجين مساعدة في اختيار المنتج المناسب؟</h2>
            <p className="text-xl opacity-90">تواصل مع خبرائنا عبر واتساب للحصول على استشارة مجانية</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              className="inline-block bg-white text-gold-600 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-2xl"
            >
              تحدثي معنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
