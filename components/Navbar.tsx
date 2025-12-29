
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Phone, X } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_NAME, WHATSAPP_NUMBER, STORE_LOGO } from '../constants';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartCount = cart.reduce((acc, item) => acc + item.cartQuantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={STORE_LOGO} alt={STORE_NAME} className="h-12 md:h-16 w-auto" />
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black text-gray-900 leading-none">كيمي</span>
              <span className="text-[10px] font-bold text-gold-600 uppercase tracking-tighter">HOME GOLD</span>
            </div>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <input 
              type="text" 
              placeholder="ابحثي عن استشوار، مكواة، أو فرشاة..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-2 border-transparent focus:border-gold-500 rounded-full py-2.5 px-6 outline-none transition-all text-sm"
            />
            <button type="submit" className="absolute left-2 top-1.5 p-1.5 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors">
              <Search size={18} />
            </button>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-5">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hidden sm:flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <Phone size={16} />
              <span>اطلبي الآن</span>
            </a>

            <button onClick={onOpenCart} className="relative p-2 text-gray-700 hover:text-gold-600 transition-colors">
              <ShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Search */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="ابحثي عن منتج..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 rounded-xl py-3 px-4 outline-none"
            />
            <button type="submit" className="absolute left-3 top-3 text-gold-600">
              <Search size={20} />
            </button>
          </form>
          <div className="grid grid-cols-2 gap-2 text-center font-bold text-sm">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-gray-50 rounded-xl">الرئيسية</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-gray-50 rounded-xl">اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
