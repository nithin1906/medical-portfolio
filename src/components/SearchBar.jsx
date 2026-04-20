import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex-grow max-w-2xl mx-8" ref={searchRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
          <Search size={18} />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-12 py-3 bg-canvas border border-transparent rounded-xl leading-5 transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm"
          placeholder="Search for medicines, lab tests or wellness products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length > 1 && setIsOpen(true)}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-primary"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-border-base overflow-hidden"
          >
            <div className="py-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-3 hover:bg-canvas transition-colors cursor-pointer flex items-center gap-4"
                >
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-grow">
                    <div className="text-sm font-semibold text-text-primary">{product.name}</div>
                    <div className="text-xs text-text-muted">{product.category} • {product.manufacturer}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">₹{product.sellingPrice}</div>
                    <div className="text-xs text-text-muted line-through">₹{product.mrp}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-canvas-alt px-4 py-2 text-xs font-medium text-text-muted text-center border-t border-border-base">
              Press Enter to see all results
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
