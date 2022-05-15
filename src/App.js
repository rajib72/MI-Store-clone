
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from './components/Offers.js';
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import ProductReview from './components/ProductReview';
import Videos from './components/Videos.js'



function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReview productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
    </Router>
  );
}

export default App;