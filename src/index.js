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
        <SearchEngine />
        <WeatherApp />
        <Day />
        <Data />
      </div>
        <Footer />
  </div>
);