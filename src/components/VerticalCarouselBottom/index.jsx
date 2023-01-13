import React from "react";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const VerticalCarouselBottom = ({
  width,
  height,
  selectedPlug,
  bannerProps,
  settings = {},
}) => {
  const { hideCarousel, hideRating, hideBest } = settings;
  const { no_padding } = bannerProps || {};

  const disclaimerH = 16 * 1.2;
  const containerPadding = 16 * 0.6 * 2;

  const mainImageWidth = no_padding ? width : width - containerPadding;

  const carouselLength = mainImageWidth / 50 >= 5 ? 5 : 4;
  const imagesDim = mainImageWidth / carouselLength;

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const bannerHeight = height - disclaimerH - containerPadding - plugHeight;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="banner-vertical__content"
        style={{ height: `${bannerHeight}%`, marginTop: disclaimerH + "px" }}
      >
        <div className="banner-brand padding-x-m">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <img
          className="banner-vertical-cb-main__img padding-x-m"
          src={IMAGE}
          alt=""
        />

        {!hideCarousel ? (
          <div
            className="carousel-hor"
            style={{ padding: no_padding ? 0 : "0.6rem" }}
          >
            {Array(+carouselLength)
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
        ) : null}

        <div className="padding-x-m d-flex-col">
          <div className="banner__content-price rating ">
            <span className="price-orig">2 490₽</span>
            <span className="price-old">4 290₽</span>
          </div>

          {!hideBest ? <span className="bestseller ">Бестселлер</span> : null}

          <span className="description ">
            Энергобаланс - нуклеиновые кислоты для энергии, ускорения
            метаболизма{" "}
          </span>
        </div>

        {!hideRating ? (
          <div className="rating padding-x-m">
            {Array(5)
              .fill(0)
              .map((item, idx) => (
                <img key={item + idx} src={RATING} alt="*" />
              ))}
          </div>
        ) : null}
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
