import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MobileDevices({ products, addToCart }) {
  return (
    <div>
      <h3>Mobile Devices</h3>
      <div className="d-flex flex-wrap">
        {products.map(function(p, i) {
          return (
            <Card
              key={i}
              className="d-flex flex-column h-100"
              style={{ width: '14rem', margin: '0.5rem' }}
            >
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Card.Text>
                  <strong>${p.price}</strong>
                </Card.Text>
                <Button
                  className="mt-auto"
                  disabled={!p.inStock}
                  onClick={function() { addToCart(p); }}
                >
                  {p.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
