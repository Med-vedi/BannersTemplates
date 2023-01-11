import React from "react";
import "./style.scss";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const rating = 5;

const VerticalCarouselRight = ({ width, height, selectedPlug }) => {
  const imagesContainerH = parseInt(height / 2.1 / 50);

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const imageCarouselHeight = ((height / 100) * (50 - plugHeight)) / 4;

  const imagesDim = imageCarouselHeight;
  const imagesH = imagesContainerH >= 5 ? 5 : 4;

  return (
    <div
      className="banner-vcr"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="banner-vertical__content"
        style={{ height: `${contentH}%`, marginTop: height / 10 + "px" }}
      >
        <div className="banner-vertical__brand">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <div className="banner-vcr__content-img-container">
          <img
            className="banner-vcr__content-img-container-img"
            src={IMAGE}
            alt=""
          ></img>

          <div className="banner-vcr__content-img-container-carousel">
            {Array(+imagesH)
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
        </div>

        <div className="banner-vcr__content-price">
          <span className="price-orig">2 490₽</span>
          <span className="price-old">4 290₽</span>
        </div>

        {/* <div className="banner-vcr__content-bestseller">
          <span className="bestseller">Бестселлер</span>
        </div> */}

        <span className="description">
          Энергобаланс - нуклеиновые кислоты для энергии, ускорения
        </span>

        <div className="banner-vcr__content-rating">
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

export default VerticalCarouselRight;
