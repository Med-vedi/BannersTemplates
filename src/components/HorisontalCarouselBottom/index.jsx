import React from "react";
import "./style.scss";
import LOGO from "../../assets/logo.png";
import IMAGE from "../../assets/image.png";
import RATING from "../../assets/rating.svg";
import { bannerHints, treeData } from "../../constants/banners";

const rating = 5;

const HorisontalCarouselBottom = ({
  width,
  height,
  selectedPlug,
  bannerProps,
}) => {
  const imagesContainerL = parseInt((width - 10) / 2.1 / 50);
  const { no_carousel, no_rating, no_best } = bannerProps || {};

  const plugHeight = selectedPlug
    ? bannerHints[selectedPlug]?.height_percent
    : 0;

  const contentH = 80 - plugHeight;

  const imagesDim = imagesContainerL >= 4 ? 50 : 32;
  const imagesL = imagesContainerL >= 5 ? 5 : 4;

  return (
    <div
      className="banner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="banner-hcb__content" style={{ height: `${contentH}%` }}>
        <div className="banner-hcb__content-header">
          <img src={LOGO} alt="" />
          <span>Доктор Море</span>
        </div>

        <div
          className="banner-hcb__content-wrapper"
          style={{ height: 95 - plugHeight + "%" }}
        >
          <div className="banner-hcb__content-main">
            <img
              className="banner-hcb__content-main__img"
              src={IMAGE}
              alt=""
              style={{ height: no_carousel ? "100%" : "80%" }}
            ></img>

            {!no_carousel ? (
              <div className="banner-hcb__content-main__carousel">
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
            ) : null}
          </div>

          <div className="banner-hcb__content-aside">
            <div className="banner-hcb__content-aside__price">
              <span className="price-orig">2 490₽</span>
              <span className="price-old">4 290₽</span>
            </div>

            {!no_best ? (
              <div className="banner-hcb__content-aside__bestseller">
                <span className="bestseller">Бестселлер</span>
              </div>
            ) : null}

            <span className="banner-hcb__content-aside__description">
              Энергобаланс - нуклеиновые кислоты для энергии, ускорения
            </span>

            {!no_rating ? (
              <div className="banner-hcb__content-aside__rating">
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
          className="banner-hcb__marking_plug"
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
