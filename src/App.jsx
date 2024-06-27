import "./App.css";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
