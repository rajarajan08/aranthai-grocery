import Categories from "../../components/categories/categories.jsx";
import HorizondalScroll from "../../components/HorizondalScroll/HorizondalScroll.jsx";
import { yourDailyFresh } from "../../assets/jsons/jsons.jsx";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h2>Aranthai Super Store</h2>
      </div>

      <Categories />
      <HorizondalScroll title="Your Daily Fresh needs" items={yourDailyFresh} />
    </div>
  );
}

export default Home;
