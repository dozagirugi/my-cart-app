import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
};

export default App;
