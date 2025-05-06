import React, { useState } from 'react';

export default function CheckoutPage({ cart, setPage }) {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    paymentMethod: '',
    shippingMethod: '',
    billingAddress: '',
    shippingAddress: ''
  });

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('summary');
  };

  function handleConfirmCheckout() {
    setStep('invoice');
  }

  return (
    <div className="container mt-4">
      {step === 'form' && (
        <form onSubmit={handleFormSubmit}>
          <h2>Enter Checkout Information</h2>
          
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select a method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Shipping Method</label>
            <input
              type="text"
              className="form-control"
              name="shippingMethod"
              value={formData.shippingMethod}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Billing Address</label>
            <input
              type="text"
              className="form-control"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Shipping Address</label>
            <input
              type="text"
              className="form-control"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Review Order</button>
        </form>
      )}

      {step === 'summary' && (
        <div>
          <h2>Order Summary</h2>
          <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
          <p><strong>Shipping Method:</strong> {formData.shippingMethod}</p>
          <p><strong>Billing Address:</strong> {formData.billingAddress}</p>
          <p><strong>Shipping Address:</strong> {formData.shippingAddress}</p>
          <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
          <p><strong>Tax (6%):</strong> ${tax.toFixed(2)}</p>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button className="btn btn-success mt-3" onClick={handleConfirmCheckout}>
            Confirm Checkout
          </button>
        </div>
      )}

      {step === 'invoice' && (
        <div>
          <h2>Invoice</h2>
          <p>Thank you for your purchase!</p>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <span>{item.name} (x{item.qty})</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p><strong>Total Paid:</strong> ${total.toFixed(2)}</p>
          <button className="btn btn-primary mt-3" onClick={() => setPage('landing')}>
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
}
