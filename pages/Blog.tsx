
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="مدونة كيمي هوم جولد - نصائح العناية بالشعر والحلاقة" 
        description="اكتشف أفضل النصائح لاختيار ماكينات الحلاقة، استشوار الشعر، وأدوات التجميل الاحترافية من خبراء كيمي."
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4 text-center">مدونة العناية والجمال</h1>
        <p className="text-gray-500 text-center mb-12">كل ما تحتاجين معرفته عن أحدث تقنيات تصفيف الشعر والحلاقة الرجالية</p>
        
        <div className="grid gap-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all">
              <div className="h-64 md:h-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:pr-0">
                <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gold-600 transition-colors">
                  اقرأ المزيد
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
