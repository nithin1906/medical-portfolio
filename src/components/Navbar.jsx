import { MapPin, ShoppingCart, User, ChevronDown, Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';
import { useLocation } from '../context/LocationContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationModal from './LocationModal';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { currentLocation, setCurrentLocation } = useLocation();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-text-primary text-white py-1 px-8 text-[11px] font-medium hidden md:flex justify-between items-center tracking-wide">
        <div className="flex gap-6">
          <span className="opacity-80">LICENSED ONLINE PHARMACY</span>
          <span className="opacity-80">TRUSTED BY 10M+ USERS</span>
        </div>
        <div className="flex gap-6">
          <Link to="/dashboard" className="hover:text-primary-light transition-colors">HELP & SUPPORT</Link>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">DOWNLOAD APP</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-border-base shadow-sm px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-8">
          {/* Logo & Location */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <Link to="/" className="flex items-center gap-1.5 md:gap-2 cursor-pointer group">
              <div className="bg-primary p-1.5 md:p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <div className="w-4 h-4 md:w-5 md:h-5 border-[1.5px] md:border-2 border-white rounded-sm relative">
                  <div className="absolute inset-[2px] md:inset-1 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-lg md:text-2xl font-extrabold tracking-tight text-text-primary">
                Medi<span className="text-primary">Care</span>
              </span>
            </Link>

            <div className="relative">
              <div 
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 hover:bg-canvas rounded-lg cursor-pointer transition-colors group"
                onClick={() => setIsLocationModalOpen(!isLocationModalOpen)}
              >
                <MapPin size={16} className="text-primary" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-text-muted leading-none uppercase tracking-tighter">Deliver to</div>
                  <div className="text-sm font-semibold text-text-primary flex items-center gap-0.5">
                    {currentLocation.name} {currentLocation.pincode} <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              <LocationModal 
                isOpen={isLocationModalOpen} 
                onClose={() => setIsLocationModalOpen(false)}
                currentCity={currentLocation.name}
                onSelect={setCurrentLocation}
              />
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <Link to="/dashboard" className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors font-medium text-sm group">
              <div className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <User size={18} />
              </div>
              <span>Sign In</span>
            </Link>
            
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsCartOpen(true)}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <ShoppingCart size={20} className="text-primary" />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="lg:hidden text-text-primary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Category Nav */}
      <div className="bg-white border-b border-border-base px-4 md:px-8 py-2 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-5 md:gap-8 whitespace-nowrap scrollbar-hide">
          {[
            { name: 'Medicine', href: '#medicine' },
            { name: 'Lab Tests', href: '#lab-tests' },
            { name: 'Healthcare Devices', href: '#medicine' },
            { name: 'Wellness', href: '#wellness' },
            { name: 'Ayurveda', href: '#categories' },
            { name: 'Personal Care', href: '#categories' },
            { name: 'Diabetes Care', href: '#medicine' }
          ].map((cat, i) => (
            <a
              key={cat.name}
              href={cat.href}
              className={`text-[13px] font-semibold transition-colors hover:text-primary ${
                i === 0 ? 'text-primary' : 'text-text-muted'
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
