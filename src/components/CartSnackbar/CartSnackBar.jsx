import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "../CartSnackbar/CartSnackbar.module.css";

const CartSnackbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get current route

  if (cart.length === 0) return null; // show only when cart not empty
  if (location.pathname === "/cart") return null; // ✅ hide when on cart page

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className={styles.cartSnackbar} onClick={() => navigate("/cart")}>
      <div className={styles.cartInfo}>
        {/* cart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 
            22 7 22s2-.9 2-2-.9-2-2-2zm10
            0c-1.1 0-1.99.9-1.99 2S15.9 
            22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
            14l-.94-2h11.45c.75 
            0 1.41-.41 1.75-1.03l3.58-6.49A1 
            1 0 0021.17 3H5.21l-.94-2H1v2h2l3.6 
            7.59-1.35 2.44C4.52 13.37 5.48 15 
            7.16 15H19v-2H7.42c-.14 0-.25-.11-.26-.25l.01-.03z"
          />
        </svg>

        <div>
          <p>{itemCount} items</p>
          <p>
            <span style={{ fontFamily: "monospace" }}>₹</span> {totalPrice}
          </p>
        </div>
      </div>
      <div className={styles.cartAction}>View Cart →</div>
    </div>
  );
};

export default CartSnackbar;
