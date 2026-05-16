import React from 'react';
import './cart.css';

function Cart({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, onCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p style={{textAlign: 'center', marginTop: '20px'}}>Your Amazon Cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imageURL} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to checkout ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
