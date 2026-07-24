import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SeoTips from "./pages/SeoTips";
import GoogleAdsVsFacebookAds from "./pages/GoogleAdsVsFacebookAds";
import DigitalMarketingGuide from "./pages/DigitalMarketingGuide";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/seo-tips" element={<SeoTips />} />
        <Route
          path="/blog/google-ads-vs-facebook-ads"
          element={<GoogleAdsVsFacebookAds />}
        />
        <Route
          path="/blog/digital-marketing-guide-2026"
          element={<DigitalMarketingGuide />}
        />
      </Route>
    </Routes>
  );
}

export default App;
