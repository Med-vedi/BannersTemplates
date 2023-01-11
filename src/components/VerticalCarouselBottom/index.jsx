import React from "react";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const rating = 5;

const VerticalCarouselBottom = ({
  width,
  height,
  selectedPlug,
  bannerProps,
}) => {
  const imagesContainerL = parseInt((width - 10) / 50);

  const { no_padding } = bannerProps || {};

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const contentH = 80 - plugHeight;

  const imagesDim = imagesContainerL >= 4 ? 53 : 40;
  const imagesL = imagesContainerL >= 5 ? 5 : 4;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="banner-vertical__content"
        style={{ height: `${contentH}%`, marginTop: height / 10 + "px" }}
      >
        <div className="banner-vertical__brand padding-x-m">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <img
          className="banner-vertical-cb-main__img padding-x-m"
          src={IMAGE}
          alt=""
        />

        <div
          className="carousel-hor"
          style={{ padding: no_padding ? 0 : "0.6rem" }}
        >
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
                alt="."
              />
            ))}
        </div>

        <div className="banner__content-price rating padding-x-m">
          <span className="price-orig">2 490₽</span>
          <span className="price-old">4 290₽</span>
        </div>

        <span className="bestseller padding-x-m">Бестселлер</span>

        <span className="description padding-x-m">
          Энергобаланс - нуклеиновые кислоты для энергии, ускорения метаболизма{" "}
        </span>

        <div className="rating padding-x-m">
          {Array(5)
            .fill(0)
            .map((item, idx) => (
              <img key={item + idx} src={RATING} alt="*" />
            ))}
        </div>
        <div className="margin-custom-m">
          <button className="btn">Купить на OZON</button>
        </div>
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
