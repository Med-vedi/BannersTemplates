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
  const { hideCarousel, hideRating, hideBest } = settings;

  const { no_carousel, no_rating, no_best } = bannerProps || {};
  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const disclaimerH = 16 * 1.2;
  const paddingSizePx = 16 * 0.6;
  const containerYPadding = paddingSizePx * 2;

  const mainImageHeighPx =
    (height - disclaimerH - paddingSizePx - plugHeight) / 2;

  const bannerHeight = height - disclaimerH - containerYPadding - plugHeight;

  const carouselLength = mainImageHeighPx / 50 >= 5 ? 5 : 4;

  const imagesDim = mainImageHeighPx / carouselLength;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="d-flex-col padding-custom-m"
        style={{ height: `${bannerHeight}%`, marginTop: disclaimerH + "px" }}
      >
        <section className="banner-brand">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </section>

        <div className="d-flex h-50p">
          <img className="w-80p" src={IMAGE} alt=""></img>
          {!no_carousel && !hideCarousel ? (
            <div className="carousel d-flex-col align-center">
              {Array(+carouselLength)
                .fill(0)
                .map((item, idx) => (
                  <img
                    className="carousel-image"
                    style={{
                      width: `${imagesDim}px`,
                      height: `${imagesDim}px`,
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
          className="disclaimer-warning-plug"
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
