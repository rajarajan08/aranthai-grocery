import Categories from "../../components/Categories/Categories.jsx";

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
    </div>
  );
}

export default Home;
