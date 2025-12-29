
import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_NAME, CONTACT_EMAIL, CONTACT_ADDRESS, WHATSAPP_NUMBER } from '../constants';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t-4 border-gold-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl">
              <img src="https://i.ibb.co/VYv0X2D/kemi-logo.png" alt="Kemi Home Gold Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              كيمي هوم جولد هو الوكيل المعتمد لأدوات العناية بالشعر الاحترافية في مصر. نقدم أفضل عروض استشوار، مكواة شعر، وماكينات حلاقة بضمان الوكيل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xl mb-6">أقسام المتجر</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/?search=استشوار" className="hover:text-gold-400 transition-colors">مجففات الشعر (استشوار)</Link></li>
              <li><Link to="/?search=ماكينة" className="hover:text-gold-400 transition-colors">ماكينات حلاقة للرجال</Link></li>
              <li><Link to="/blog" className="hover:text-gold-400 transition-colors">مدونة الجمال</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">من نحن</Link></li>
              <li><Link to="/sitemap" className="hover:text-gold-400 transition-colors">خريطة الموقع (Sitemap)</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black text-xl mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0" size={18} />
                <span className="opacity-80">{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold-400 transition-colors opacity-80">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-gold-400 transition-colors font-bold tracking-widest">0{WHATSAPP_NUMBER.slice(2)}</a>
              </li>
            </ul>
          </div>

          {/* SEO Tags */}
          <div>
            <h4 className="text-white font-black text-xl mb-6">كلمات البحث الشائعة</h4>
            <div className="flex flex-wrap gap-2 text-[10px]">
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">استشوار كيمي</span>
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">VGR مصر</span>
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">Rush Brush</span>
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">ماكينة حلاقة زيرو</span>
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">سشوار دايسون</span>
              <span className="bg-white/5 px-2 py-1 rounded-lg border border-white/10">مشط حراري</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-50">
          <p>© {new Date().getFullYear()} كيمي هوم جولد. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/terms">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
