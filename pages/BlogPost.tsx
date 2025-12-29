
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS, STORE_NAME } from '../constants';
import SEO from '../components/SEO';
import { ArrowRight, Clock, User, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <button onClick={() => navigate('/blog')} className="text-gold-600 font-bold hover:underline">العودة للمدونة</button>
      </div>
    );
  }

  return (
    <article className="pb-20">
      <SEO title={post.title} description={post.excerpt} />
      
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-900 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gold-400 font-bold mb-6 hover:gap-4 transition-all">
              <ArrowRight size={20} />
              العودة للمدونة
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2"><User size={16} className="text-gold-500" /> فريق كيمي هوم جولد</div>
              <div className="flex items-center gap-2"><Clock size={16} className="text-gold-500" /> 5 دقائق قراءة</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 -mt-24 relative z-10">
          <div className="prose prose-lg prose-gold max-w-none">
            <p className="text-xl text-gray-600 font-bold mb-8 leading-relaxed border-r-4 border-gold-500 pr-6">
              {post.excerpt}
            </p>
            <div className="text-gray-700 leading-loose space-y-6">
              {post.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="font-bold text-gray-500">شارك المقال:</span>
              <button className="p-3 bg-gray-50 rounded-full hover:bg-gold-50 text-gold-600 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <Link to="/" className="bg-gold-500 text-black px-8 py-3 rounded-full font-black hover:bg-black hover:text-white transition-all">
              تسوق منتجاتنا الأصلية
            </Link>
          </div>
        </div>

        {/* Suggested Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-black mb-8">مقالات قد تهمك</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).map(suggested => (
              <Link key={suggested.id} to={`/blog/${suggested.slug}`} className="group bg-gray-50 rounded-3xl p-6 flex gap-4 items-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <img src={suggested.image} alt={suggested.title} className="w-20 h-20 rounded-2xl object-cover" />
                <h4 className="font-bold text-gray-900 group-hover:text-gold-600 transition-colors leading-tight">
                  {suggested.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
