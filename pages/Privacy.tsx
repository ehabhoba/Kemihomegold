
import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { STORE_NAME } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <SEO title="سياسة الخصوصية" description="سياسة الخصوصية لمتجر كيمي هوم جولد - نحن نحمي بياناتك." />
      
      <div className="text-center mb-16">
        <div className="bg-gold-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gold-600 mb-6">
          <ShieldCheck size={40} />
        </div>
        <h1 className="text-4xl font-black mb-4">سياسة الخصوصية</h1>
        <p className="text-gray-500">خصوصيتك هي أولويتنا في {STORE_NAME}</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-loose">
        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <Lock size={24} className="text-gold-500" /> جمع المعلومات
          </h2>
          <p>
            نحن نجمع المعلومات التي تقدمها لنا مباشرة عند إجراء طلب شراء، مثل اسمك، رقم هاتفك، وعنوان التوصيل. هذه المعلومات تُستخدم حصرياً لإتمام عملية الشحن والتواصل معك بخصوص طلبك.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <Eye size={24} className="text-gold-500" /> كيف نستخدم بياناتك؟
          </h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>معالجة وتسليم طلبات الشراء الخاصة بك.</li>
            <li>تحسين تجربة التسوق في متجرنا.</li>
            <li>إرسال تحديثات العروض والخصومات (اختياري).</li>
            <li>التواصل معك عبر واتساب لتأكيد بيانات الشحن.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <FileText size={24} className="text-gold-500" /> حماية البيانات
          </h2>
          <p>
            نحن نتخذ كافة التدابير الأمنية التقنية لحماية بياناتك من الوصول غير المصرح به. نحن لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية.
          </p>
        </section>

        <section className="bg-gold-50 p-8 rounded-3xl border border-gold-100">
          <p className="font-bold text-gray-900">هل لديك استفسار بخصوص الخصوصية؟</p>
          <p className="text-sm mt-2">يمكنك دائماً مراسلتنا عبر البريد الإلكتروني أو الواتساب وسنقوم بالرد على كافة استفساراتك فوراً.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
