
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import SEO from '../components/SEO';
// Added ShieldCheck to imports
import { ShoppingCart, CheckCircle, Truck, RefreshCw, Phone, ShieldCheck } from 'lucide-react';

interface ProductDetailsProps {
  onAddToCart: (p: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) return <div className="text-center py-20 text-2xl font-bold">المنتج غير موجود</div>;

  const images = product.images.split(',').map(img => img.trim());

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO title={product.name} description={product.description} product={product} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border">
            <img src={product.thumb} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.slice(0, 4).map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-gray-100 hover:border-gold-500 cursor-pointer">
                <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <nav className="text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-gold-600">الرئيسية</Link> / 
              <span className="text-gray-600"> {product.categories}</span>
            </nav>
            <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-gold-600">{product.price} ج.م</span>
              {product.is_free_shipping && (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">شحن مجاني لفترة محدودة</span>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4 text-gray-700">مميزات المنتج:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.description.split('•').filter(Boolean).map((line, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 shrink-0" size={18} />
                  <span>{line.trim()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-gold-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gold-700 transition-all shadow-xl active:scale-[0.98]"
            >
              <ShoppingCart size={24} />
              أضف إلى السلة
            </button>
            <Link 
              to="/checkout"
              className="flex-1 bg-green-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl active:scale-[0.98]"
            >
              <Phone size={24} />
              اطلب عبر واتساب
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Truck className="text-gold-500" size={24} />
              <div className="text-xs">
                <p className="font-bold">توصيل سريع</p>
                <p className="text-gray-400">خلال 2-4 أيام عمل</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="text-gold-500" size={24} />
              <div className="text-xs">
                <p className="font-bold">سياسة الاسترجاع</p>
                <p className="text-gray-400">استرجاع سهل خلال 14 يوم</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gold-500" size={24} />
              <div className="text-xs">
                <p className="font-bold">دفع عند الاستلام</p>
                <p className="text-gray-400">ادفع فقط عند معاينة المنتج</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
