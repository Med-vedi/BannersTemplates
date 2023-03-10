import React from "react";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const HorisontalCarouselBottom = ({
  width,
  height,
  selectedPlug,
  bannerProps,
  settings = {},
}) => {
  const { hideCarousel, hideRating, hideBest } = settings;

  const { no_carousel, no_rating, no_best } = bannerProps || {};
  const disclaimerH = 16 * 1.2;
  const containerPadding = 16 * 0.6;

  const disclaimerHpercent = disclaimerH / (height / 100);

  const mainImageWidth = width * 0.45 - containerPadding;

  const carouselLength = mainImageWidth / 50 >= 5 ? 5 : 4;
  const imagesDim = mainImageWidth / carouselLength;

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const bannerHeight = height - disclaimerH - containerPadding - plugHeight;

  return (
    <a
      className="banner"
      href="#"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="d-flex-col padding-custom-m"
        style={{
          height: `${bannerHeight}px`,
          marginTop: "1.2rem",
          flex: 1,
        }}
      >
        <section className="banner-brand">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </section>

        <div
          className="d-flex"
          style={{
            height:
              100 - disclaimerHpercent - containerPadding - plugHeight + "%",
          }}
        >
          <div className="w-90p d-flex-col center-center">
            <img
              src={IMAGE}
              alt=""
              style={{
                height: no_carousel ? "100%" : "80%",
                maxWidth: "100%",
              }}
            ></img>

            {!no_carousel && !hideCarousel ? (
              <div
                className="carousel d-flex align-center"
                style={{ height: "20%" }}
              >
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

          <div className="d-flex-col justify-csb ml-6">
            <div className="price">
              <span className="price-orig">2 490₽</span>
              <span className="price-old">4 290₽</span>
            </div>

            {!no_best && !hideBest ? (
              <div className="bestseller">
                <span className="bestseller">Бестселлер</span>
              </div>
            ) : null}

            <span className="description">
              Энергобаланс - нуклеиновые кислоты для энергии, ускорения
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
    </a>
  );
};

export default HorisontalCarouselBottom;
