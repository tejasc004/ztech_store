import React from 'react';
import HotItemStyles from '../components/HotItemStyles';

export default function LandingPage({ setPage }) {
  return (
    <div>
      <h1 className="text-center">Welcome to</h1>
      <img className="d-block mx-auto rounded-pill" src="landinglogo.png"></img>
      <br></br>
      <h3>Hot Items</h3>
      <div className="d-flex flex-wrap">
        <HotItemStyles
          title="Gaming Laptop"
          price={2499}
          image="alienware.jpg"
          onClick={() => setPage('products')} />
        <HotItemStyles
          title="Smartphone A1"
          price={699}
          image="smartphone.jpg"
          onClick={() => setPage('products')} />
        <HotItemStyles
          title="USB-C Cable"
          price={12}
          image="usbc.jpg"
          onClick={() => setPage('products')} />
      </div>
    </div>
  );
}
