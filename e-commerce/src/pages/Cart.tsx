import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, clearCart } from '../features/cartSlice';
import { useAuth } from "../context/AuthContext";
import type { RootState } from '../store/store';

const Cart = () => {
  const { user } = useAuth();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    if (!user) {
      alert('You must be logged in to remove items!');
      return;
    }
    dispatch(removeFromCart(id));
  };

  const handleAdd = (item) => {
    if (!user) {
      alert('You must be logged in to add items!');
      return;
    }
    dispatch(addToCart({ ...item, count: 1 }));
  };

  const handleClear = () => {
    if (!user) {
      alert('You must be logged in to clear your cart!');
      return;
    }
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (!user) {
      alert("You must be logged in to checkout!");
      return;
    }
    // Add your transaction logic here
    alert("Transaction completed! (Demo)");
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {!user && <div>Please log in to interact with the cart!</div>}
      {cartItems.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ border: "1px solid #eee", margin: 8, padding: 8 }}>
            <img src={item.image} alt={item.title} style={{ width: 50 }} />
            <span>{item.title}</span>
            <span>Qty: {item.count}</span>
            <span>Price: ${item.price}</span>
            {user && (
              <>
                <button onClick={() => handleRemove(item.id)}>-</button>
                <button onClick={() => handleAdd(item)}>+</button>
              </>
            )}
          </div>
        ))
      )}
      {user && cartItems.length > 0 && (
        <>
          <button onClick={handleClear}>Clear Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
