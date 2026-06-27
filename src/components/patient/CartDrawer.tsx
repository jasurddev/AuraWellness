"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { PaymentSimulator } from './PaymentSimulator';

export function CartDrawer({ isOpen, onClose, onCheckoutSuccess }: { isOpen: boolean, onClose: () => void, onCheckoutSuccess: () => void }) {
  const { cartItems, removeFromCart, addToCart, clearCart } = useStore();
  const [showPayment, setShowPayment] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 15000 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    clearCart();
    onClose();
    onCheckoutSuccess();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#F9F8F6] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between bg-white border-b border-border/50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-lg text-primary">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-secondary text-primary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-60">
                  <ShoppingBag className="w-16 h-16 mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 bg-white p-4 rounded-2xl border border-border/50 shadow-sm">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 rounded-xl object-cover bg-secondary" />
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-sm font-medium text-primary line-clamp-2">{item.product.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs font-semibold text-accent mt-auto mb-2">
                        Rp {item.product.price.toLocaleString('id-ID')}
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => removeFromCart(item.product.id)} // Simplified: just remove if they want less, or implement decrease logic
                          className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item.product)}
                          className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="bg-white border-t border-border/50 p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-primary">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-primary">Rp {shipping.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-serif text-primary">Total</span>
                    <span className="font-bold text-accent text-lg">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary text-white font-medium rounded-xl active:scale-95 transition-all shadow-lg hover:bg-primary/90"
                >
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}

      {showPayment && (
        <PaymentSimulator 
          amount={total} 
          onClose={() => setShowPayment(false)} 
          onSuccess={handlePaymentSuccess} 
        />
      )}
    </AnimatePresence>
  );
}
