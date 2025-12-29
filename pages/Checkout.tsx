
import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { sendOrderToWhatsApp } from '../utils/whatsapp';
import SEO from '../components/SEO';
import { Phone, MapPin, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckoutProps {
  cart: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const [formData, setFormData] = useState<OrderDetails>({
    customerName: '',
    phoneNumber: '',
    address: '',
    city: ''
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert('السلة فارغة!');
    sendOrderToWhatsApp(cart, formData, total);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO title="إتمام الطلب" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowRight size={24} />
          </Link>
          <h1 className="text-3xl font-black">إتمام الطلب</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="text-gold-600" />
                بيانات الشحن
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">الاسم بالكامل</label>
                  <input 
                    required
                    type="text" 
                    value={formData.customerName}
                    onChange={e => setFormData({...formData, customerName: e.target.value})}
                    placeholder="اكتب اسمك الثلاثي"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-gold-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">رقم الهاتف</label>
                  <div className="relative">
                    <input 
                      required
                      type="tel" 
                      value={formData.phoneNumber}
                      onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                      placeholder="رقم الموبايل"
                      className="w-full bg-gray-50 border-gray-100 rounded-xl py-3 px-10 focus:ring-2 focus:ring-gold-500 transition-all outline-none"
                    />
                    <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">المحافظة / المدينة</label>
                <input 
                  required
                  type="text" 
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                  placeholder="مثال: القاهرة - مدينة نصر"
                  className="w-full bg-gray-50 border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-gold-500 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">العنوان بالتفصيل</label>
                <div className="relative">
                  <textarea 
                    required
                    rows={3}
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    placeholder="اكتب رقم العقار، اسم الشارع، وأي علامة مميزة"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-gold-500 transition-all outline-none"
                  ></textarea>
                  <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl active:scale-[0.98]"
              >
                أرسل الطلب عبر واتساب 💬
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-28">
              <h3 className="text-xl font-bold border-b border-white/10 pb-4">ملخص الطلب</h3>
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex gap-2">
                      <span className="bg-gold-600 text-white px-2 rounded font-bold">{item.cartQuantity}x</span>
                      <span className="opacity-80 line-clamp-1">{item.name}</span>
                    </div>
                    <span className="font-bold">{item.price * item.cartQuantity} ج.م</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex justify-between text-sm opacity-70">
                  <span>سعر المنتجات</span>
                  <span>{total} ج.م</span>
                </div>
                <div className="flex justify-between text-sm opacity-70">
                  <span>مصاريف الشحن</span>
                  <span className="text-green-400">مجاناً</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-2 text-gold-500">
                  <span>الإجمالي النهائي</span>
                  <span>{total} ج.م</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-[10px] leading-relaxed opacity-60">
                * بضغطك على "أرسل الطلب" سيتم تحويلك مباشرة لمحادثة الواتساب الخاصة بنا لتأكيد الطلب وبدء عملية الشحن.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
