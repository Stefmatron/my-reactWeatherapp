import { createRoot } from "react-dom/client";
import "./styles.css";

import WeatherApp from "./WeatherApp";
import SearchEngine from "./SearchEngine";
import Day from "./Day";
import Data from "./Data";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="container">
      <div className="box">
      <div className="row">
        <div className="col-6">
          <WeatherApp /> </div>
            <div className="col-6">
      <SearchEngine />
    </div>
    </ div>
    <Day />
    <Data />
    </div>
    <Footer />
  </div>
 
);