import React, { useState } from "react";
import { categories } from "../Categories/Categories"; // Your categories array
import { yourDailyFresh as items } from "../../assets/jsons/jsons"; // Your items array
import { milk } from "../../assets/jsons/snacks"; // Your items array
import styles from "../HorizondalScroll/HorizondalScroll.module.css";
import { useCart } from "../../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const categoriesMap = {
  category_001: items,
  category_002: milk,
  // Add other categories and their corresponding item arrays here
};

export default function CategoryTabsView() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get("id");
  const [selectedCategory, setSelectedCategory] = useState(paramValue);
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "16px",
          borderBottom: "1px solid rgb(221, 221, 221)",
        }}
        onClick={() => navigate(-1)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Arrow */}
          <path
            d="M19 12H5M12 19l-7-7 7-7"
            stroke="green"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p style={{ color: "green", fontSize: "16px" }}>back</p>
      </div>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Left Panel: Categories with independent scroll */}
        <div
          style={{
            width: "20%",
            background: "#f5f5f5",
            borderRight: "1px solid #ddd",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              style={{
                padding: "16px",
                cursor: "pointer",
                background:
                  selectedCategory === cat.id ? "#fff" : "transparent",
                borderLeft:
                  selectedCategory === cat.id ? "4px solid #4caf50" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{ width: "100%", marginRight: 8 }}
              />
            </div>
          ))}
        </div>

        {/* Right Panel: Items with independent scroll */}
        <div
          style={{
            flex: 1,
            padding: "24px",
            background: "#fff",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {categoriesMap[selectedCategory] ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {(categoriesMap[selectedCategory] ?? []).map((item) => {
                const cartItem = cart.find((i) => i.id === item.id);
                return (
                  <div key={item.id} className={styles.card}>
                    {item.discount && (
                      <div className={styles.badges}>
                        <span className={styles.discount}>{item.discount}</span>
                      </div>
                    )}

                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.image}
                    />
                    <div className={styles.body}>
                      <p className={styles.name}>{item.name}</p>
                    </div>
                    <p className={styles.weight}>
                      {item.weight}{" "}
                      {item.oldPrice && (
                        <span className={styles.oldPrice}>
                          <span style={{ fontFamily: "monospace" }}>₹</span>
                          {item.oldPrice}
                        </span>
                      )}
                    </p>

                    <div className={styles.footer}>
                      <span className={styles.price}>
                        <span style={{ fontFamily: "monospace" }}>₹</span>
                        {item.price}
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
          ) : (
            <h3>
              {categories.find((d) => d.id === selectedCategory).name} yet to be
              added
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
