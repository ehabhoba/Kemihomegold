
import React from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, WHATSAPP_NUMBER, STORE_HOURS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <SEO title="اتصل بنا" description="تواصل مع فريق كيمي هوم جولد للاستفسارات والطلبات." />
      
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900">نحن هنا لخدمتك</h1>
        <p className="text-gray-500 text-lg">سواء كان لديك استفسار عن منتج أو ترغبين في تتبع طلبك</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-gold-50 p-4 rounded-2xl mb-4 text-gold-600">
                <Phone size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">رقم الهاتف</h3>
              <a href={`tel:${WHATSAPP_NUMBER}`} className="text-gray-500 hover:text-gold-600 transition-colors font-medium">0{WHATSAPP_NUMBER.slice(2)}</a>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-green-50 p-4 rounded-2xl mb-4 text-green-600">
                <MessageCircle size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">واتساب</h3>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-gray-500 hover:text-green-600 transition-colors font-medium">تحدثي معنا الآن</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-2xl mb-4 text-blue-600">
                <Mail size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-500 hover:text-blue-600 transition-colors font-medium">{CONTACT_EMAIL}</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-50 p-4 rounded-2xl mb-4 text-orange-600">
                <Clock size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ساعات العمل</h3>
              <p className="text-gray-500 font-medium">{STORE_HOURS}</p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-10 rounded-3xl flex items-start gap-6">
            <MapPin className="text-gold-500 shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold mb-2">المقر الرئيسي</h3>
              <p className="opacity-70 leading-relaxed">{CONTACT_ADDRESS}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-black mb-8 text-gray-900">أرسلي رسالة سريعة</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">الاسم</label>
              <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="اكتبي اسمك" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">رقم الهاتف</label>
              <input type="tel" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="01xxxxxxxxx" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">الرسالة</label>
              <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-gold-500 outline-none" placeholder="بماذا يمكننا مساعدتك؟"></textarea>
            </div>
            <button type="button" className="w-full bg-gold-600 text-white py-4 rounded-xl font-black text-lg hover:bg-gold-700 transition-all shadow-xl">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
