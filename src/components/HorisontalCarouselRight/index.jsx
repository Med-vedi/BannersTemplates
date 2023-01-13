import React from "react";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const HorisontalCarouselRight = ({
  width,
  height,
  selectedPlug,
  bannerProps,
  settings = {},
}) => {
  const { hideCarousel, hideRating, hideBest } = settings;

  const { no_carousel, no_rating, no_best } = bannerProps || {};
  const containerPadding = 16 * 0.6;

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const bannerHeight =
    height - plugHeight - containerPadding - containerPadding * 2;

  const carouselLength = height / 30 >= 5 ? 5 : height / 30;
  const imagesDim = bannerHeight / carouselLength;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="d-flex padding-y-m"
        style={{
          height: `${bannerHeight}px`,
          flex: 1,
        }}
      >
        <section className="banner-brand d-flex-col justify-cc w-30p">
          <img style={{ margin: 0 }} src={LOGO} alt="" />
          <span>Доктор Море</span>
        </section>

        <div className="d-flex">
          <div className="d-flex-center-center">
            <img
              src={IMAGE}
              alt=""
              style={{
                height: no_carousel ? "100%" : "80%",
                maxWidth: "100%",
              }}
            ></img>

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

          <div
            className="d-flex-col justify-csb"
            style={{ padding: `${height * 0.05}px ${height * 0.09}px` }}
          >
            <div className="price">
              <span
                className="price-orig"
                style={{ fontSize: height >= 200 ? "18px" : "16px" }}
              >
                2 490₽
              </span>
              <span
                className="price-old"
                style={{ fontSize: height >= 200 ? "16px" : "14px" }}
              >
                4 290₽
              </span>
            </div>

            {!no_best && !hideBest ? (
              <div className="bestseller">
                <span className="bestseller">Бестселлер</span>
              </div>
            ) : null}

            <span
              className="description m-w-300"
              style={{ fontSize: height >= 200 ? "16px" : "14px" }}
            >
              Энергобаланс - нуклеиновые кислоты для энергии, ускорения
              метаболизма{" "}
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
        </div>
      </div>

      {selectedPlug ? (
        <div
          className="disclaimer-warning-plug"
          style={{
            fontSize:
              bannerHints[selectedPlug]?.height_percent > 5 ? "1rem" : ".4rem",
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

export default HorisontalCarouselRight;
