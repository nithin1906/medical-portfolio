import { ChevronLeft, ChevronRight, Star, ShoppingCart, ShieldCheck, X, Minus, Plus } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCarousel = ({ title, products, subtitle }) => {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">{title}</h2>
          {subtitle && <p className="text-text-muted font-medium">{subtitle}</p>}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-border-base flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-border-base flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] bg-white border border-border-base rounded-2xl p-4 transition-all hover:border-primary hover:shadow-premium group snap-start flex flex-col"
          >
            <div 
              className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-canvas flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.prescriptionRequired && (
                <div className="absolute top-2 left-2 bg-text-primary/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                  <ShieldCheck size={12} /> Rx Required
                </div>
              )}
              {product.discount && (
                <div className="absolute top-2 right-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded">
                  {product.discount} OFF
                </div>
              )}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Quick View</span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{product.manufacturer}</div>
              <h3 className="font-bold text-text-primary line-clamp-1">{product.name}</h3>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-text-primary">{product.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <div className="text-lg font-extrabold text-text-primary">₹{product.sellingPrice}</div>
                <div className="text-xs text-text-muted line-through">MRP ₹{product.mrp}</div>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QuickView Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-text-muted hover:text-primary transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Product Image */}
              <div className="md:w-1/2 bg-canvas p-12 flex items-center justify-center relative">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
                {selectedProduct.discount && (
                  <div className="absolute top-8 left-8 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-accent/20">
                    {selectedProduct.discount} OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="mb-8">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{selectedProduct.manufacturer}</div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4 leading-tight">{selectedProduct.name}</h2>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 px-2 py-1 rounded-lg text-sm font-bold">
                      <Star size={14} fill="currentColor" /> {selectedProduct.rating}
                    </div>
                    <div className="text-sm text-text-muted font-medium">1.2k+ Reviews</div>
                    {selectedProduct.prescriptionRequired && (
                      <div className="flex items-center gap-1 bg-text-primary/5 text-text-primary px-2 py-1 rounded-lg text-sm font-bold border border-text-primary/10">
                        <ShieldCheck size={14} /> Rx Required
                      </div>
                    )}
                  </div>

                  <p className="text-text-body text-sm leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>

                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-4xl font-black text-primary">₹{selectedProduct.sellingPrice}</span>
                    <span className="text-lg text-text-muted line-through font-medium">MRP ₹{selectedProduct.mrp}</span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-3 text-lg group"
                  >
                    <ShoppingCart size={22} /> Add to Cart
                  </button>
                  <p className="text-[10px] text-center text-text-muted font-bold uppercase tracking-widest">
                    FREE DELIVERY ON ORDERS ABOVE ₹500
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCarousel;
