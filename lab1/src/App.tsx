import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};
function App() {
  return (
    <div>
      <AlertBox
        type="success"
        message="this is a message"
        onClose={() => alert('Alert closed')}
      ></AlertBox>
      <UserProfileCard
        user={user}
      showEmail={true}
      showRole={true}
      onEdit={(userId: any) => alert(`Editing user ${userId}`)}
      >
      </UserProfileCard>

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
