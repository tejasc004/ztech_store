import React, { useState } from 'react';
import MyNavbar from './components/MyNavbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import products from './data/products.json';

export default function App() {
  const [page, setPage] = useState('landing');
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart];
    let found = false;
    for (let item of newCart) {
      if (item.name === product.name) {
        item.qty += 1;
        found = true;
        break;
      }
    }
    if (!found) {
      newCart.push({ ...product, qty: 1 });
    }
    setCart(newCart);
  }

  function updateQty(name, qty) {
    const newCart = [];
    for (let item of cart) {
      if (item.name === name) {
        if (qty > 0) {
          newCart.push({ ...item, qty });
        }
      } else {
        newCart.push(item);
      }
    }
    setCart(newCart);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <MyNavbar setPage={setPage} cartCount={cartCount} />
      <div className="container mt-4">
        {page === 'landing' && (
          <LandingPage hotItems={products['Computer Department'].slice(0,3)} setPage={setPage} />
        )}
        {page === 'products' && (
          <ProductsPage addToCart={addToCart} products={products} />
        )}
        {page === 'cart' && (
          <CartPage cart={cart} updateQty={updateQty} setPage={setPage} />
        )}
        {page === 'checkout' && (
          <CheckoutPage cart={cart} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
