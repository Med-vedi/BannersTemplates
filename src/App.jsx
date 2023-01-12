import { useEffect, useState } from "react";
import "./App.css";
import BannerOptions from "./components/BannerOptions";
import HorisontalCarouselBottom from "./components/HorisontalCarouselBottom";
import VerticalCarouselBottom from "./components/VerticalCarouselBottom";
import VerticalCarouselRight from "./components/VerticalCarouselRight";

function App() {
  const [bannerSize, setBannerSize] = useState({ w: 0, h: 0, type: "" });
  const [bannerProps, setBannerProps] = useState("");
  const [selectedPlug, setPlug] = useState("");
  const [settings, setSettings] = useState({
    hideCarousel: false,
    hideRating: false,
    hideBest: false,
  });

  const settingsHandler = (option = {}) => {
    setSettings((prev) => ({ ...prev, ...option }));
  };

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
            settings={settings}
          />
        ) : null}
        {type === "vcr" ? (
          <VerticalCarouselRight
            width={w}
            height={h}
            selectedPlug={selectedPlug}
            bannerProps={bannerProps}
            settings={settings}
          />
        ) : null}
        {type === "hcb" ? (
          <HorisontalCarouselBottom
            width={w}
            height={h}
            selectedPlug={selectedPlug}
            bannerProps={bannerProps}
            settings={settings}
          />
        ) : null}
      </div>
      <div className="options-container">
        <BannerOptions
          onSelect={onBannerSelected}
          handleWarnPlugChange={setPlug}
          settingsHandler={settingsHandler}
        />
      </div>
    </div>
  );
}

export default App;
