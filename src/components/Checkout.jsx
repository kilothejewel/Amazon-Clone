import React, { useState } from 'react';
import './checkout.css';

function Checkout({ isOpen, onClose, clearCart }) {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="checkout-overlay" onClick={handleClose}>
      <div className="checkout-modal" onClick={e => e.stopPropagation()}>
        <div className="checkout-header">
          <h2>{isSuccess ? 'Order Placed' : 'Checkout'}</h2>
          <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>
        
        <div className="checkout-body">
          {isSuccess ? (
            <div className="order-success">
              <div className="success-icon">✓</div>
              <h3>Thank you, your order has been placed.</h3>
              <p>An email confirmation has been sent to you.</p>
              <button className="continue-btn" onClick={handleClose}>Continue Shopping</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="First and Last name" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" required placeholder="Street address or P.O. Box" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Delivery Option</label>
                <select required>
                  <option value="standard">Standard Delivery (3-5 days) - FREE</option>
                  <option value="express">Express Delivery (1-2 days) - $5.99</option>
                </select>
              </div>
              <button type="submit" className="place-order-btn">Place your order</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
