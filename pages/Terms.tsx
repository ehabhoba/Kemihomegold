
import React from 'react';
import SEO from '../components/SEO';
import { Gavel, RefreshCw, Truck, CreditCard } from 'lucide-react';
import { STORE_NAME } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <SEO title="شروط الاستخدام" description="شروط الاستخدام وسياسة الضمان والتبديل في كيمي هوم جولد." />
      
      <div className="text-center mb-16">
        <div className="bg-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-gold-400 mb-6">
          <Gavel size={40} />
        </div>
        <h1 className="text-4xl font-black mb-4">شروط الاستخدام والضمان</h1>
        <p className="text-gray-500">نلتزم بالشفافية الكاملة مع عملائنا لضمان حقوقهم</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 space-y-12 text-gray-700 leading-loose">
        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <RefreshCw size={24} className="text-gold-500" /> سياسة التبديل والاسترجاع
          </h2>
          <p>
            يحق للعميل استبدال أو استرجاع المنتج خلال 14 يوماً من تاريخ الاستلام في حالة وجود عيب صناعة، بشرط أن يكون المنتج في حالته الأصلية وبغلافه الأصلي.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <Truck size={24} className="text-gold-500" /> الشحن والتوصيل
          </h2>
          <p>
            يتم معالجة الطلبات خلال 24 ساعة من تأكيد الطلب عبر واتساب. يستغرق التوصيل من 2 إلى 5 أيام عمل حسب المحافظة. نوفر إمكانية معاينة المنتج قبل الاستلام والدفع لضمان رضاكم التام.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <CreditCard size={24} className="text-gold-500" /> سياسة الدفع
          </h2>
          <p>
            نعتمد نظام "الدفع عند الاستلام" كخيار أساسي لتوفير أقصى درجات الأمان لعملائنا. جميع الأسعار المعلنة في المتجر نهائية وشاملة للضرائب.
          </p>
        </section>

        <div className="border-t pt-10 text-center opacity-60 text-sm">
          آخر تحديث للشروط: يناير 2024
        </div>
      </div>
    </div>
  );
};

export default Terms;
