
import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-gold-600" />
            <h2 className="text-xl font-bold">سلة التسوق</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <ShoppingBag size={64} className="mx-auto mb-4 opacity-20" />
              <p>سلة التسوق فارغة حالياً</p>
              <button onClick={onClose} className="mt-4 text-gold-600 font-bold hover:underline">تسوق الآن</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                <img src={item.thumb} alt={item.name} className="w-20 h-20 object-cover rounded shadow-sm" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm leading-tight mb-1">{item.name}</h4>
                  <p className="text-gold-600 font-bold text-sm mb-2">{item.price} ج.م</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-md bg-white">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.cartQuantity - 1))}
                        className="px-2 py-1 hover:bg-gray-100"
                      >-</button>
                      <span className="px-3 py-1 border-x text-sm">{item.cartQuantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.cartQuantity + 1)}
                        className="px-2 py-1 hover:bg-gray-100"
                      >+</button>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-white space-y-4">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>الإجمالي:</span>
              <span className="text-gold-600">{total} ج.م</span>
            </div>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="block w-full bg-gold-600 text-white text-center py-4 rounded-xl font-bold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              إتمام الطلب عبر واتساب
            </Link>
            <p className="text-[10px] text-center text-gray-400">
              سيتم تحويلك إلى واتساب لتأكيد بيانات الشحن مع فريق الدعم.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
