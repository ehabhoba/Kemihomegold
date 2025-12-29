
import { CartItem, OrderDetails } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export const sendOrderToWhatsApp = (cart: CartItem[], order: OrderDetails, total: number) => {
  const date = new Date().toLocaleString('ar-EG');
  const storeUrl = window.location.origin;

  const itemsText = cart
    .map((item, index) => {
      return `📦 *[${index + 1}] ${item.name}*
- الكود: ${item.sku}
- الكمية: ${item.cartQuantity}
- السعر: ${item.price * item.cartQuantity} ج.م`;
    })
    .join('\n\n');

  const message = `🚀 *طلب شراء جديد من كيمي هوم جولد* 🚀
---------------------------------------
👤 *بيانات العميل المستلم:*
• الاسم: ${order.customerName}
• الهاتف: ${order.phoneNumber}
• المحافظة: ${order.city}
• العنوان: ${order.address}

🛒 *تفاصيل الطلبية:*
${itemsText}

---------------------------------------
💰 *إجمالي الفاتورة: ${total} جنيه مصري*
🚚 *الشحن: مجاني لكافة المحافظات*
---------------------------------------
✅ *شكراً لثقتك بـ كيمي هوم جولد*
🔗 تم الطلب عبر الموقع: ${storeUrl}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};
