import React from "react";
import "./style.scss";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const rating = 5;

const VerticalCarouselBottom = ({ width, height, selectedPlug }) => {
  const imagesContainerL = parseInt((width - 10) / 50);

  // console.log("=========================================");
  // console.log(`WE GOT: `, width);
  // console.log(`WE GOT: `, width / 50);
  // console.log(`WE GOT: `, imagesContainerL);
  // console.log(`WE GOT: `, width / 40);
  // console.log("=========================================");

  const imagesDim = imagesContainerL >= 4 ? 50 : 40;
  const imagesL = imagesContainerL >= 5 ? 5 : 4;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="banner__content">
        <div className="banner__content-header">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <img className="banner__content-img" src={IMAGE} alt=""></img>

        <div className="banner__content-carousel">
          {Array(+imagesL)
            .fill(0)
            .map((item, idx) => (
              <img
                style={{
                  width: imagesDim + "px",
                  height: imagesDim + "px",
                }}
                key={item + idx + "img"}
                src={IMAGE}
                alt="*"
              />
            ))}
        </div>

        <div className="banner__content-price">
          <span className="price-orig">2 490₽</span>
          <span className="price-old">4 290₽</span>
        </div>

        <div className="banner__content-bestseller">
          <span className="bestseller">Бестселлер</span>
        </div>

        <div className="banner__content-description">
          <span className="bestseller">
            Энергобаланс - нуклеиновые кислоты для энергии, ускорения
          </span>
        </div>

        <div className="banner__content-rating">
          {Array(5)
            .fill(0)
            .map((item, idx) => (
              <img key={item + idx} src={RATING} alt="*" />
            ))}
        </div>
        <button className="btn">Купить на OZON</button>
      </div>

      {selectedPlug ? (
        <div
          className="banner__marking_plug"
          style={{
            fontSize:
              bannerHints[selectedPlug]?.height_percent > 5 ? "1rem" : ".6rem",
            height:
              selectedPlug && bannerHints[selectedPlug]?.height_percent + "%",
          }}
        >
          <span>{selectedPlug && bannerHints[selectedPlug]?.text}</span>
        </div>
      ) : null}
    </div>
  );
};

export default VerticalCarouselBottom;
