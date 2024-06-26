import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <SingleProductPage /> */}
        <CartPage />
      </main>
    </div>
  );
};

export default App;
