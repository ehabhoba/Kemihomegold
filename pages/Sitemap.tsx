
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import { LayoutGrid, ShoppingBag, FileText, Info } from 'lucide-react';

const Sitemap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <SEO title="خريطة الموقع" description="خريطة الموقع الكاملة لمتجر كيمي هوم جولد، تصفح المنتجات والمقالات والأقسام بسهولة." />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black mb-4">خريطة الموقع</h1>
        <p className="text-gray-500">دليلك السريع للوصول إلى كافة صفحات متجر كيمي هوم جولد</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Main Pages */}
        <section className="space-y-6">
          <h2 className="text-xl font-black flex items-center gap-2 text-gold-600">
            <LayoutGrid size={24} /> الصفحات الأساسية
          </h2>
          <ul className="space-y-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <li><Link to="/" className="hover:text-gold-500 transition-colors">الرئيسية</Link></li>
            <li><Link to="/about" className="hover:text-gold-500 transition-colors">من نحن</Link></li>
            <li><Link to="/blog" className="hover:text-gold-500 transition-colors">المدونة</Link></li>
            <li><Link to="/contact" className="hover:text-gold-500 transition-colors">اتصل بنا</Link></li>
            <li><Link to="/checkout" className="hover:text-gold-500 transition-colors">سلة المشتريات</Link></li>
          </ul>
        </section>

        {/* Categories */}
        <section className="space-y-6">
          <h2 className="text-xl font-black flex items-center gap-2 text-gold-600">
            <ShoppingBag size={24} /> أقسام المنتجات
          </h2>
          <ul className="space-y-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <li><Link to="/?search=استشوار" className="hover:text-gold-500 transition-colors">مجففات الشعر (استشوار)</Link></li>
            <li><Link to="/?search=ماكينة" className="hover:text-gold-500 transition-colors">ماكينات الحلاقة</Link></li>
            <li><Link to="/?search=فرشاة" className="hover:text-gold-500 transition-colors">فرش الفرد والمشط الحراري</Link></li>
            <li><Link to="/?search=مكواة" className="hover:text-gold-500 transition-colors">مكواة الشعر الاحترافية</Link></li>
          </ul>
        </section>

        {/* Latest Products */}
        <section className="space-y-6 lg:col-span-1">
          <h2 className="text-xl font-black flex items-center gap-2 text-gold-600">
            <Info size={24} /> روابط سريعة للمنتجات
          </h2>
          <ul className="space-y-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm max-h-60 overflow-y-auto">
            {PRODUCTS.map(p => (
              <li key={p.id}>
                <Link to={`/product/${p.slug}`} className="hover:text-gold-500 transition-colors text-sm truncate block">{p.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Blog Posts */}
        <section className="space-y-6 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-black flex items-center gap-2 text-gold-600">
            <FileText size={24} /> أحدث المقالات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_POSTS.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-gold-300 transition-all text-sm font-bold truncate">
                {post.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sitemap;
