import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Search, Navigation } from 'lucide-react';
import { useState } from 'react';

const cities = [
  { name: 'Mumbai', pincode: '400001' },
  { name: 'Delhi', pincode: '110001' },
  { name: 'Bangalore', pincode: '560001' },
  { name: 'Hyderabad', pincode: '500001' },
  { name: 'Ahmedabad', pincode: '380001' },
  { name: 'Chennai', pincode: '600001' },
  { name: 'Kolkata', pincode: '700001' },
  { name: 'Pune', pincode: '411001' },
];

const LocationModal = ({ isOpen, onClose, onSelect, currentCity }) => {
  const [search, setSearch] = useState('');

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Transparent Backdrop to detect outside clicks */}
          <div 
            className="fixed inset-0 z-[199]" 
            onClick={onClose}
          />
          
          {/* Dropdown Container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-4 w-[400px] bg-white rounded-3xl shadow-premium border border-border-base z-[200] overflow-hidden"
          >
            {/* Arrow */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-border-base rotate-45" />
            {/* Header */}
            <div className="p-8 border-b border-border-base">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">Select Location</h2>
                    <p className="text-xs text-text-muted font-medium">To see product availability and delivery time</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-canvas flex items-center justify-center text-text-muted transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Enter your city or pincode"
                  className="block w-full pl-11 pr-4 py-3 bg-canvas border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors mb-8 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Navigation size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">Use Current Location</div>
                  <div className="text-[10px] font-medium opacity-70 uppercase tracking-wider">Detecting location...</div>
                </div>
              </button>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Major Cities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {filteredCities.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => {
                        onSelect(city);
                        onClose();
                      }}
                      className={`flex flex-col items-start p-4 rounded-2xl border transition-all hover:border-primary hover:bg-primary/5 ${
                        currentCity === city.name 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border-base bg-white'
                      }`}
                    >
                      <span className="text-sm font-bold text-text-primary">{city.name}</span>
                      <span className="text-[10px] text-text-muted font-medium">{city.pincode}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-canvas/50 p-6 text-center border-t border-border-base">
              <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">
                Serving 22,000+ pin codes across India
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
