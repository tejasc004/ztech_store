import React, { useState } from 'react';
import ComputerDepartment from './ComputerDept';
import MobileDevices from './MobileDevices';
import Accessories from './Accessories';

export default function ProductsPage({ addToCart, products }) {
  const categories = [
    'Computer Department',
    'Mobile Devices',
    'Accessories'
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <div>
      <h2>Products</h2>
      <p>Please select a categpry below to view the products</p>
      <div className="mb-3">
        {categories.map(function(cat) {
          return (
            <button
              key={cat}
              className="btn btn-secondary me-2"
              onClick={function() { setSelected(cat); }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {selected === 'Computer Department' && (
        <ComputerDepartment
          products={products['Computer Department']}
          addToCart={addToCart}
        />
      )}
      {selected === 'Mobile Devices' && (
        <MobileDevices
          products={products['Mobile Devices']}
          addToCart={addToCart}
        />
      )}
      {selected === 'Accessories' && (
        <Accessories
          products={products['Accessories']}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
