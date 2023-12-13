import React, { useContext, useState } from "react";
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


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
<div style={{marginTop: '150px'}}>
<h1 style={{ color: 'blue', textAlign: 'center' }}>Complete Your Reservation</h1>
<div style={{marginTop: '30px'}} className="cart-page-container">
{cart.length > 0 && (
  <>
    
      <div className="form-container">
      
      <form>
          {/* Row for First Name and Last Name fields */}
          <div className="form-row">
            <label className="form-label">
              First Name*
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label className="form-label">
              Last Name*
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
          </div>

          {/* Row for Email and Phone fields */}
          <div className="form-row">
            <label className="form-label">
              Email*
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="form-label">
              Phone*
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
          </div>
      </form>
  
      </div>
   
  </>
)}


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
    </div>
    </div>
  );
};

export default Cart;
