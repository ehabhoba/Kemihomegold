
import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold mb-4">{STORE_NAME}</h3>
            <p className="text-sm leading-relaxed">
              وجهتك الأولى لأدوات تصفيف الشعر الاحترافية. نوفر لك أحدث تقنيات التجفيف والفرد من الماركات العالمية هوم جولد وكيمي لضمان إطلالة ساحرة كل يوم.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-white font-bold mb-4">أقسام المتجر</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">مجففات الشعر (استشوار)</Link></li>
              <li><Link to="/" className="hover:text-gold-500 transition-colors">مكواة فرد الشعر</Link></li>
              <li><Link to="/" className="hover:text-gold-500 transition-colors">فرش الشعر الحرارية</Link></li>
              <li><Link to="/" className="hover:text-gold-500 transition-colors">عروض التوفير</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-bold mb-4">خدمة العملاء</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-gold-500 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-gold-500 transition-colors">الشروط والأحكام</Link></li>
              <li><Link to="/shipping" className="hover:text-gold-500 transition-colors">سياسة الشحن والإرجاع</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Sitemap for SEO */}
          <div>
            <h4 className="text-white font-bold mb-4">خريطة الموقع</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded">استشوار هوم جولد</span>
              <span className="bg-gray-800 px-2 py-1 rounded">مكواة كيمي</span>
              <span className="bg-gray-800 px-2 py-1 rounded">أدوات تجميل</span>
              <span className="bg-gray-800 px-2 py-1 rounded">عناية بالشعر مصر</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ {STORE_NAME}. صنع بكل حب لخدمتكم.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
