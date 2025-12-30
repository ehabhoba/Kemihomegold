
import { CartItem, OrderDetails } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export const sendOrderToWhatsApp = (cart: CartItem[], order: OrderDetails, total: number) => {
  const itemsText = cart
    .map((item) => `- ${item.name} (عدد: ${item.cartQuantity}) - السعر: ${item.price * item.cartQuantity} ج.م`)
    .join('\n');

  const message = `طلب جديد من المتجر 🛍️

*بيانات العميل:*
- الاسم: ${order.customerName}
- الهاتف: ${order.phoneNumber}
- العنوان: ${order.address}
- المدينة: ${order.city}

*المنتجات المطلوبة:*
${itemsText}

*الإجمالي:* ${total} ج.م

يرجى تأكيد الطلب وتحديد موعد التسليم.`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};
