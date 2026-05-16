import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  // --- STATE ---
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('amazon_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Theme state persisted to localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('amazon_theme');
    return savedTheme === 'dark';
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // --- EFFECTS ---
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('amazon_cart', JSON.stringify(cart));
  }, [cart]);

  // Apply dark mode class to body and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('amazon_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('amazon_theme', 'light');
    }
  }, [isDarkMode]);

  // --- CART LOGIC ---
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Optional: Open cart automatically when adding
    // setIsCartOpen(true); 
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // --- RENDER ---
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar 
        cartCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)} 
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <Hero />
      <ProductGrid addToCart={addToCart} />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        clearCart={clearCart}
      />
    </>
  );
}

export default App;
