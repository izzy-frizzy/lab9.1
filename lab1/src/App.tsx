import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import headphonesImage from "./assets/headphones.avif";
import defaultavatar from "./assets/default avatar.jpg"

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: defaultavatar,
};
const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl: headphonesImage,
  inStock: true,
};

function App() {
  return (
    <div>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        
      </AlertBox>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId: any) => alert(`Editing user ${userId}`)}
      ></UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      ></ProductDisplay>
    </div>
  );
}

export default App;
