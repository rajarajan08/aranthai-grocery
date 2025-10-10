import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartPage.module.css"; // ✅ CSS Module
import { useNavigate } from "react-router-dom";
import whatsapp from "../../assets/images/whatsapp.png";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 👇 Scroll to top when component renders
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  function handleWhatsAppCheckout() {
    const phoneNumber = "919344998525";

    const message = cart
      .map(
        (item, index) =>
          `*${index + 1}.${item.name}* (${item.qty}) = ₹${
            item.qty * item.price
          }`
      )
      .join("\n");

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const fullMessage = `*My Grocery Order:*\n -------------------  \n${message}\n -------------------  \n*Total: ₹${total}* \n\n Check the Order list and send this message to place order.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    window.open(whatsappLink, "_blank");
    setTimeout(() => navigate("/"), 500);
  }

  return (
    <div className={styles.cartContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
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
          {/* Chevron Left */}
          <path
            d="M15 19L8 12L15 5"
            stroke="green"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p style={{ color: "green" }}>Add more items</p>
      </div>
      <h2 className={styles.cartTitle}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <p className={styles.emptyCart}>Your cart is empty.</p>
        </>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <>
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartDetails}>
                    <h5>{item.name}</h5>
                    <p className={styles.cartWeight}>{item.weight}</p>
                    <p className={styles.cartPrice}>
                      {item.price} × {item.qty}
                    </p>

                    <p className={styles.cartSubtotal}>
                      Subtotal :{" "}
                      <strong>
                        <span style={{ fontFamily: "monospace" }}>₹</span>
                        {item.qty * item.price}
                      </strong>
                    </p>
                  </div>
                  <div className={styles.cartControls}>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>
              Total: <span style={{ fontFamily: "monospace" }}>₹</span>
              {total}
            </h3>
            <button
              onClick={handleWhatsAppCheckout}
              className={styles.checkoutBtn}
            >
              Buy now <img width={"30px"} src={whatsapp} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
              fontSize: "0.9rem",
              color: "#555",
              borderTop: "1px solid #1b5e20",
              paddingTop: "0.5rem",
            }}
          >
            Clicking the button will open WhatsApp with your order. You need to
            send the message to complete your order.
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
