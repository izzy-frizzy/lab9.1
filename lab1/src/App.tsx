import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <div>
      <AlertBox
        type="success"
        message="this is a message"
        onClose={() => {}}
      ></AlertBox>
      <ProductDisplay
        product={{
          id: "0",
          name: "laptop",
          price: 380,
          description: "a laptop",
          imageUrl: "https://example.com/headphones.jpg",
          inStock: false,
        }}
        showStockStatus={true}
      />
    </div>
  );
}

export default App;
