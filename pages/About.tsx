
import React from 'react';
import SEO from '../components/SEO';
import { Award, ShieldCheck, Truck, Users, History, Target } from 'lucide-react';
import { STORE_NAME, CONTACT_ADDRESS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <SEO title="من نحن" description="تعرف على كيمي هوم جولد، الوكيل المعتمد لأدوات العناية بالشعر في مصر وقصة نجاحنا من قلب الموسكي." />
      
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6">قصتنا في <span className="text-gold-400">هوم جولد</span></h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            بدأنا من قلب القاهرة التاريخية، لنقدم لكل امرأة ورجل في مصر جودة الصالونات الاحترافية في منازلهم.
          </p>
        </div>
      </section>

      {/* History & Vision */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-gold-500 p-4 rounded-2xl text-black shrink-0"><History size={32} /></div>
              <div>
                <h3 className="text-2xl font-black mb-3">تاريخنا</h3>
                <p className="text-gray-600 leading-loose">
                  تأسست "هوم جولد" في منطقة الموسكي العريقة، المركز التجاري الأول في مصر. منذ اليوم الأول، وضعنا نصب أعيننا توفير أفضل الماركات العالمية مثل كيمي (Kemei) و VGR لضمان رضا عملائنا وتوفير قطع غيار أصلية وضمان حقيقي.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-gold-500 p-4 rounded-2xl text-black shrink-0"><Target size={32} /></div>
              <div>
                <h3 className="text-2xl font-black mb-3">رؤيتنا</h3>
                <p className="text-gray-600 leading-loose">
                  أن نكون المتجر الأول والوجهة الموثوقة لكل من يبحث عن أدوات العناية بالشعر والحلاقة في مصر، من خلال دمج الجودة العالمية بالسعر المحلي العادل.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" 
              alt="Professional Hair Styling" 
              className="rounded-[3rem] shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-200 rounded-full blur-3xl opacity-50 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h4 className="text-5xl font-black text-gold-600 mb-2">10K+</h4><p className="text-gray-500 font-bold uppercase text-xs">عميل سعيد</p></div>
          <div><h4 className="text-5xl font-black text-gold-600 mb-2">15+</h4><p className="text-gray-500 font-bold uppercase text-xs">سنة خبرة</p></div>
          <div><h4 className="text-5xl font-black text-gold-600 mb-2">500+</h4><p className="text-gray-500 font-bold uppercase text-xs">منتج أصلي</p></div>
          <div><h4 className="text-5xl font-black text-gold-600 mb-2">24h</h4><p className="text-gray-500 font-bold uppercase text-xs">دعم فني</p></div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16">لماذا يختارنا الآلاف؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="bg-gold-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gold-600"><ShieldCheck size={40} /></div>
            <h3 className="text-xl font-black">أصالة مضمونة</h3>
            <p className="text-gray-500 text-sm">كل منتجاتنا تأتي من الوكيل مباشرة مع كروت الضمان الرسمية.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-gold-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gold-600"><Truck size={40} /></div>
            <h3 className="text-xl font-black">توصيل سريع</h3>
            <p className="text-gray-500 text-sm">نمتلك شبكة توصيل تغطي كافة محافظات الجمهورية من الإسكندرية لأسوان.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-gold-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gold-600"><Users size={40} /></div>
            <h3 className="text-xl font-black">دعم ما بعد البيع</h3>
            <p className="text-gray-500 text-sm">فريقنا متواجد دائماً لمساعدتك في طريقة الاستخدام أو أي استفسار فني.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
