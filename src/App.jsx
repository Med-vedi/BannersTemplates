import { useState } from "react";
import "./App.css";
import BannerOptions from "./components/BannerOptions";
import BannerSelect from "./components/BannerSelect";
import HorisontalCarouselBottom from "./components/HorisontalCarouselBottom";
import VerticalCarouselBottom from "./components/VerticalCarouselBottom";
import VerticalCarouselRight from "./components/VerticalCarouselRight";

function App() {
  const [bannerSize, setBannerSize] = useState({ w: 0, h: 0, type: "" });
  const [bannerProps, setBannerProps] = useState("");
  const [selectedPlug, setPlug] = useState("");

  const onBannerSelected = (node) => {
    const { value, title, extra } = node;
    const type = value.split("x")[0];
    const splittedTitle = title.split("x");
    setBannerSize({ w: splittedTitle[0], h: splittedTitle[1], type });
    setBannerProps(extra);
  };

  const { w, h, type } = bannerSize;
  return (
    <div className="main">
      <div className="banners-container">
        {type === "vcb" ? (
          <VerticalCarouselBottom
            width={w}
            height={h}
            selectedPlug={selectedPlug}
            bannerProps={bannerProps}
          />
        ) : null}
        {type === "vcr" ? (
          <VerticalCarouselRight
            width={w}
            height={h}
            selectedPlug={selectedPlug}
            bannerProps={bannerProps}
          />
        ) : null}
        {type === "hcb" ? (
          <HorisontalCarouselBottom
            width={w}
            height={h}
            selectedPlug={selectedPlug}
            bannerProps={bannerProps}
          />
        ) : null}
      </div>
      <div className="options-container">
        <BannerOptions
          onSelect={onBannerSelected}
          handleWarnPlugChange={setPlug}
        />
      </div>
    </div>
  );
}

export default App;
