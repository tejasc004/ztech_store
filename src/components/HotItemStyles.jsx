import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function HotItemStyles(props) {
  return (
    <Card
      className="d-flex flex-column h-100"
      style={{
        width: '14rem',
        margin: '0.5rem'
      }}>

      <Card.Img
        variant="top"
        src={props.image}
        alt={props.title}
        style={{
          width: '100%',      
          height: '12rem',    
          objectFit: 'fit'  
        }}/>

      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button className="mt-auto" onClick={props.onClick}>View Products</Button>
      </Card.Body>
    </Card>
  );
}
