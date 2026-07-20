import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";

ReactGA.initialize("G-CKVWNWFK0C");
ReactGA.send("pageview");

AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);