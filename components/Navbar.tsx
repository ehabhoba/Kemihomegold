
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Phone } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_NAME, WHATSAPP_NUMBER } from '../constants';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart }) => {
  const cartCount = cart.reduce((acc, item) => acc + item.cartQuantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="lg:hidden p-2 text-gray-600 hover:text-gold-600">
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <img src="https://img.icons8.com/fluency/48/hair-dryer.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-xl md:text-2xl font-bold text-gold-600 hidden sm:block">{STORE_NAME}</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="ابحث عن منتج..." 
                className="w-full bg-gray-100 border-none rounded-full py-2 px-5 focus:ring-2 focus:ring-gold-500 pr-10"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              className="hidden lg:flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} />
              <span>تواصل واتساب</span>
            </a>
            
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-gray-600 hover:text-gold-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
