import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";

// Google Analytics
ReactGA.initialize("G-CKVWNWFK0C");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});

// AOS
AOS.init({
  duration: 700,
  once: true,
  mirror: false,
  debounceDelay: 50,
  throttleDelay: 99,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
