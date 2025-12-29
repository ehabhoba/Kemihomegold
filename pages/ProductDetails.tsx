
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import SEO from '../components/SEO';
import { ShoppingCart, CheckCircle, Truck, RefreshCw, Phone, ShieldCheck, ArrowLeft } from 'lucide-react';

interface ProductDetailsProps {
  onAddToCart: (p: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS
      .filter(p => p.categories === product.categories && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) return <div className="text-center py-20 text-2xl font-bold">المنتج غير موجود</div>;

  return (
    <div className="pb-20">
      <div className="container mx-auto px-4 py-8">
        <SEO title={product.name} description={product.description} product={product} />
        
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-600 mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> العودة للتسوق
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100 p-10 flex items-center justify-center">
              <img src={product.thumb} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="bg-gold-50 text-gold-600 px-3 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">{product.categories}</span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">{product.name}</h1>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-black text-gold-600">{product.price} <small className="text-sm">ج.م</small></span>
                {product.is_free_shipping && <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-lg border border-green-200">شحن مجاني</span>}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">المواصفات الأساسية:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.description.split('•').filter(Boolean).map((line, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                    <span>{line.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-[2] bg-gold-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-gold-700 transition-all shadow-xl active:scale-95"
              >
                <ShoppingCart size={24} /> أضف للسلة
              </button>
              <Link 
                to="/checkout"
                className="flex-1 bg-green-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl"
              >
                <Phone size={24} /> اطلبي الآن
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t">
              <div className="flex items-center gap-4"><Truck className="text-gold-500" size={32} /> <div className="text-xs"><p className="font-bold">توصيل سريع</p><p className="text-gray-400">48-72 ساعة</p></div></div>
              <div className="flex items-center gap-4"><ShieldCheck className="text-green-500" size={32} /> <div className="text-xs"><p className="font-bold">دفع عند الاستلام</p><p className="text-gray-400">عاين براحتك</p></div></div>
              <div className="flex items-center gap-4"><RefreshCw className="text-blue-500" size={32} /> <div className="text-xs"><p className="font-bold">تبديل سهل</p><p className="text-gray-400">ضمان 14 يوم</p></div></div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl font-black mb-10 text-center">منتجات قد تعجبك</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.slug}`} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                  <div className="aspect-square mb-6 overflow-hidden"><img src={rp.thumb} alt={rp.name} className="w-full h-full object-contain group-hover:scale-110 transition-all" /></div>
                  <h4 className="font-black text-gray-900 mb-2 truncate">{rp.name}</h4>
                  <p className="text-gold-600 font-black">{rp.price} ج.م</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
