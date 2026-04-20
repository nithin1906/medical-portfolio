import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-base flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text-primary">Your Cart</h2>
                  <p className="text-xs text-text-muted font-medium">{cart.length} Items</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-canvas flex items-center justify-center text-text-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-canvas flex items-center justify-center text-text-muted">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">Your cart is empty</h3>
                    <p className="text-sm text-text-muted">Add some products to get started!</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-xl bg-canvas overflow-hidden flex-shrink-0 border border-border-base">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-text-primary text-sm line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-text-muted hover:text-danger p-1 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-text-muted mb-3 font-medium">{item.manufacturer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-canvas rounded-lg p-1 border border-border-base">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-text-primary shadow-sm hover:text-primary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-text-primary w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-text-primary shadow-sm hover:text-primary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-primary">₹{item.sellingPrice * item.quantity}</div>
                          <div className="text-[10px] text-text-muted font-medium">₹{item.sellingPrice} / unit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border-base space-y-4 bg-canvas/30">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Subtotal</span>
                    <span className="font-bold text-text-primary">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Delivery Charges</span>
                    <span className="text-accent font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-dashed border-border-base">
                    <span className="font-bold text-text-primary">Total Amount</span>
                    <span className="font-extrabold text-primary">₹{cartTotal}</span>
                  </div>
                </div>
                <button className="w-full btn-primary py-4 flex items-center justify-center gap-2 group">
                  Proceed to Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
