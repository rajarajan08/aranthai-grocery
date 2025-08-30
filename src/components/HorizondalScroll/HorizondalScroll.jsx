import React from "react";
import styles from "./HorizondalScroll.module.css";
import category_001 from "../../assets/categories/category_001.png";

// const hotDeals = [
//   {
//     id: 1,
//     name: "Whole Farm Grocery Almonds (200 g)",
//     weight: "200 g",
//     price: "₹189",
//     oldPrice: "₹260",
//     discount: "27% OFF",
//     img: category_001,
//   },
//   {
//     id: 2,
//     name: "Whole Farm Grocery Raisins (200 g)",
//     weight: "200 g",
//     price: "₹147",
//     oldPrice: "₹200",
//     discount: "26% OFF",
//     img: "/assets/products/raisins.png",
//   },
//   {
//     id: 3,
//     name: "Whole Farm Premium Rice (500 g)",
//     weight: "500 g",
//     price: "₹52",
//     oldPrice: "₹120",
//     discount: "56% OFF",
//     img: "/assets/products/rice.png",
//   },
// ];

const HorizondalScroll = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <a href="#">see all</a>
      </div>

      <div className={styles.scrollContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={styles.discount}>{item.discount}</span>
            <img src={item.img} alt={item.name} className={styles.image} />

            <div className={styles.body}>
              <p className={styles.time}>⏱ 8 MINS</p>
              <p className={styles.name}>{item.name}</p>
            </div>
            <p className={styles.weight}>{item.weight}</p>

            <div className={styles.footer}>
              <span className={styles.price}>{item.price}</span>
              <span className={styles.oldPrice}>{item.oldPrice}</span>
              <button className={styles.addBtn}>ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizondalScroll;
