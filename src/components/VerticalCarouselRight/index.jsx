import React from "react";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const VerticalCarouselRight = ({
  width,
  height,
  selectedPlug,
  bannerProps,
  settings = {},
}) => {
  const realBannerHeight = height * 0.8; //100% - 10% of disclaimer on top

  const mainImageHeight = realBannerHeight / 2; //50% of real banner height
  const carouselLength = parseInt(mainImageHeight / 50);
  const imagesInRow = carouselLength >= 5 ? 5 : 4;

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  // percents 80 because of 20% of the disclaimer header
  const contentH = 80 - plugHeight;

  const imageCarouselHeight = plugHeight
    ? (mainImageHeight - plugHeight) / imagesInRow
    : mainImageHeight / imagesInRow;

  const imagesDim = imageCarouselHeight;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="banner-vertical__content padding-custom-m"
        style={{ height: `${contentH}%`, marginTop: height / 10 + "px" }}
      >
        <div className="banner-brand">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <div className="banner-vertical-cr-image__wrapper">
          <img
            className="banner-vertical-cr-image__img"
            src={IMAGE}
            alt=""
          ></img>
          {!no_carousel && !hideCarousel ? (
            <div className="carousel-vert">
              {Array(+imagesInRow)
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
          ) : null}
        </div>

        <div className="price">
          <span className="price-orig">2 490₽</span>
          <span className="price-old">4 290₽</span>
        </div>

        {/* <div className="banner-vcr__content-bestseller">
          <span className="bestseller">Бестселлер</span>
        </div> */}

        <span className="description">
          Энергобаланс - нуклеиновые кислоты для энергии, ускорения метаболизма{" "}
        </span>

        {!no_rating && !hideRating ? (
          <div className="rating">
            {Array(5)
              .fill(0)
              .map((item, idx) => (
                <img key={item + idx} src={RATING} alt="*" />
              ))}
          </div>
        ) : null}
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
