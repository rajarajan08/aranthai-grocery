import React from "react";
import "./Categories.css";

// ✅ Import all category images from src/assets/categories/
import category_001 from "../../assets/categories/category_001.png";
import category_002 from "../../assets/categories/category_002.png";
import category_003 from "../../assets/categories/category_003.png";
import category_004 from "../../assets/categories/category_004.png";
import category_005 from "../../assets/categories/category_005.png";
import category_006 from "../../assets/categories/category_006.png";
import category_007 from "../../assets/categories/category_007.png";
import category_008 from "../../assets/categories/category_008.png";
import category_009 from "../../assets/categories/category_009.png";
import category_010 from "../../assets/categories/category_010.png";
import category_011 from "../../assets/categories/category_011.png";
import category_012 from "../../assets/categories/category_012.png";
import category_013 from "../../assets/categories/category_013.png";
import category_014 from "../../assets/categories/category_014.png";
import category_015 from "../../assets/categories/category_015.png";
import category_016 from "../../assets/categories/category_016.png";
import category_017 from "../../assets/categories/category_017.png";
import category_018 from "../../assets/categories/category_018.png";
import category_019 from "../../assets/categories/category_019.png";
import category_020 from "../../assets/categories/category_020.png";
import category_021 from "../../assets/categories/category_021.png";

const categories = [
  { id: "category_001", name: "Vegetables & Fruits", img: category_001 },
  { id: "category_002", name: "Dairy & Breakfast", img: category_002 },
  { id: "category_003", name: "Munchies", img: category_003 },
  { id: "category_004", name: "Cold Drinks & Juices", img: category_004 },
  { id: "category_005", name: "Instant & Frozen Food", img: category_005 },
  { id: "category_006", name: "Tea, Coffee & Health", img: category_006 },
  { id: "category_007", name: "Bakery & Biscuits", img: category_007 },
  { id: "category_008", name: "Sweet Tooth", img: category_008 },
  { id: "category_009", name: "Atta, Rice & Dal", img: category_009 },
  { id: "category_010", name: "Dry Fruits, Masala & Oil", img: category_010 },
  { id: "category_011", name: "Sauces & Spreads", img: category_011 },
  { id: "category_012", name: "Chicken, Meat & Fish", img: category_012 },
  { id: "category_013", name: "Paan Corner", img: category_013 },
  { id: "category_014", name: "Organic & Premium", img: category_014 },
  { id: "category_015", name: "Baby Care", img: category_015 },
  { id: "category_016", name: "Pharma & Wellness", img: category_016 },
  { id: "category_017", name: "Cleaning Essentials", img: category_017 },
  { id: "category_018", name: "Home & Office", img: category_018 },
  { id: "category_019", name: "Personal Care", img: category_019 },
  { id: "category_020", name: "Pet Care", img: category_020 },
  { id: "category_021", name: "Fashion & Accessories", img: category_021 },
];

export default function Categories() {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <div className="cardContainer">
          <div key={cat.id} className="card">
            <img src={cat.img} alt={cat.name} width="100%" />
          </div>
          <p className="cardText">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
