import React from "react";
import "./style.scss";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints } from "../../constants/banners";

const rating = 5;

const HorisontalCarouselBottom = ({
  width,
  height,
  selectedPlug,
  bannerProps,
}) => {
  const { no_carousel, no_rating, no_best } = bannerProps || {};
  const disclaimerHpercent = (16 * 1.2) / (height / 100);
  const disclaimerH = 16 * 1.2;

  const containerPadding = 16 * 0.6;
  const mainImageWidth = width * 0.45 - containerPadding;

  const carouselWidth = mainImageWidth / 50 >= 5 ? 5 : 4;
  const imagesDim = mainImageWidth / carouselWidth;

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const contentH = height - containerPadding * 1.2 - containerPadding;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="d-flex-col padding-custom-m"
        style={{
          height: `${contentH - plugHeight - disclaimerH}px`,
          marginTop: "1.2rem",
          flex: 1,
        }}
      >
        <div className="banner-brand">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <div
          className="banner-content d-flex"
          style={{
            height:
              100 - disclaimerHpercent - containerPadding - plugHeight + "%",
          }}
        >
          <div className="w-45">
            <img
              className="banner-hcb__content-main__img"
              src={IMAGE}
              alt=""
              style={{
                height: no_carousel ? "100%" : "80%",
                maxWidth: "100%",
              }}
            ></img>

            {!no_carousel ? (
              <div className="carousel-hor">
                {Array(+carouselWidth)
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

          <div className="banner-hcb__content-aside">
            <div className="price">
              <span className="price-orig">2 490₽</span>
              <span className="price-old">4 290₽</span>
            </div>

            {!no_best ? (
              <div className="bestseller">
                <span className="bestseller">Бестселлер</span>
              </div>
            ) : null}

            <span className="description">
              Энергобаланс - нуклеиновые кислоты для энергии, ускорения
            </span>

            {!no_rating ? (
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
          className="banner__marking_plug"
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

export default HorisontalCarouselBottom;
