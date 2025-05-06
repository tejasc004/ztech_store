import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CartPage({ cart, updateQty, setPage }) {
  let preTax = 0;
  for (let item of cart) preTax += item.price * item.qty;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table">
            <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr></thead>
            <tbody>
              {cart.map(i => (
                <tr key={i.name}>
                  <td>{i.name}</td>
                  <td>
                    <input
                      type="number"
                      value={i.qty}
                      min="0"
                      onChange={e => updateQty(i.name, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${i.price}</td>
                  <td>${i.price * i.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Pre-tax Total: ${preTax.toFixed(2)}</p>
          <Button onClick={() => setPage('checkout')}>Checkout</Button>
        </div>
      )}
    </div>
  );
}
