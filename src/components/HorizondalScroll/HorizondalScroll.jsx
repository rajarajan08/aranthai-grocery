import React from "react";
import styles from "./HorizondalScroll.module.css";
import category_001 from "../../assets/categories/category_001.png";
import { useCart } from "../../context/CartContext";

const HorizondalScroll = ({ title, items }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <a href="#">see all</a>
      </div>

      <div className={styles.scrollContainer}>
        {items.map((item) => {
          const cartItem = cart.find((i) => i.id === item.id);

          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.badges}>
                <span className={styles.discount}>{item.discount}</span>
                <span className={styles.discount}>⏱ 20 MINS</span>
              </div>
              <img src={item.img} alt={item.name} className={styles.image} />

              <div className={styles.body}>
                <p className={styles.name}>{item.name}</p>
              </div>
              <p className={styles.weight}>{item.weight}</p>

              <div className={styles.footer}>
                <span className={styles.price}>
                  <span style={{ fontFamily: "monospace" }}>₹</span>
                  {item.price}
                </span>
                <span className={styles.oldPrice}>
                  <span style={{ fontFamily: "monospace" }}>₹</span>
                  {item.oldPrice}
                </span>

                {cartItem ? (
                  <div className={styles.counter}>
                    <button
                      className={styles.addBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{cartItem.qty}</span>
                    <button
                      className={styles.addBtn}
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.addBtn}
                    onClick={() => addToCart(item)}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizondalScroll;
