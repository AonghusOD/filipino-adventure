import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { format } from 'date-fns'; // Importing a date formatting library

const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>Tour: {item.tour}</p>
            <p>Date: {format(new Date(item.date), 'PPP')}</p> {/* Formatting the date */}
            <p>People: {item.people}</p>
            <p>Price: {item.price} php</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
