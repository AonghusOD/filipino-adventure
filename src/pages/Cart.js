import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { format } from 'date-fns';
import './Cart.css';
import Boracay from '../images/tours/img1.png';
import Palawan from '../images/tours/img2.png';
import Cebu from '../images/tours/img3.png';
import Shark from '../images/tours/img4.png';
import Choc from '../images/tours/img5.png';
import Albay from '../images/tours/img6.png';
import Scuba from '../images/tours/img7.png';


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, people: parseInt(newQuantity, 10) };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.people), 0);

  return (
    <div className="cart-container">
      <h2>Your Bookings - Total: {totalPrice} php</h2>
      <ul className="cart-list">
       {cart.map((item, index) => (
  <li key={index} className="cart-item">
  <img src={item.image} alt={item.tour} />
  <div className="item-details">
    <h3>{item.tour}</h3>
    <p><i className="date-icon"></i> {format(new Date(item.date), 'PPP')}</p>
    <div>
      <i className="people-icon"></i>
      <input 
        type="number" 
        value={item.people} 
        onChange={(e) => handleQuantityChange(index, e.target.value)}
        min="1"
      />
    </div>
    <p><i className="price-icon"></i> {item.price} php per person</p>
    <p>Total Price: {item.price * item.people} php</p>
  </div>
  <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
</li>

))}

      </ul>
      {cart.length > 0 && <button onClick={handleClearCart}>Clear Cart</button>}
      {cart.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
};

export default Cart;
