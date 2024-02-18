import { createRoot } from "react-dom/client";

import WeatherApp from "./WeatherApp";
import SearchEngine from "./SearchEngine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <WeatherApp />
    <SearchEngine />
  </div>
);