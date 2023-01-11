import { useState } from "react";
import "./App.css";
import BannerOptions from "./components/BannerOptions";
import BannerSelect from "./components/BannerSelect";
import VerticalCarouselBottom from "./components/VerticalCarouselBottom";
import VerticalCarouselRight from "./components/VerticalCarouselRight";

function App() {
  const [bannerSize, setBannerSize] = useState({ w: 0, h: 0, type: "" });
  const [selectedPlug, setPlug] = useState("");

  const { w, h, type } = bannerSize;
  return (
    <div className="main">
      <div className="banners-container">
        {type === "vcb" ? (
          <VerticalCarouselBottom
            width={w}
            height={h}
            selectedPlug={selectedPlug}
          />
        ) : null}
        {type === "vcr" ? (
          <VerticalCarouselRight
            width={w}
            height={h}
            selectedPlug={selectedPlug}
          />
        ) : null}
      </div>
      <div className="options-container">
        <BannerOptions
          onSelect={setBannerSize}
          handleWarnPlugChange={setPlug}
        />
      </div>
    </div>
  );
}

export default App;
