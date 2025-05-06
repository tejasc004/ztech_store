import React from 'react';

export default function MyNavbar({ setPage, cartCount }) {
  return (
    <nav className="bg-dark text-white p-2 d-flex justify-content-between">
      <div>
        <button className="btn btn-link text-white" onClick={() => setPage('landing')}>ZTech Store</button>
        <button className="btn btn-link text-white" onClick={() => setPage('products')}>Products</button>
      </div>
      <div>
        <button className="btn btn-link text-white" onClick={() => setPage('cart')}>
        <i className="bi bi-cart"></i>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}
