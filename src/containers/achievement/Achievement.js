import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            
          </div>
          <div className="achievement-cards-div">
            <Slider {...settings}>
              {achievementSection.achievementsCards.map((card, i) => {
                return (
                  <div key={i} className="achievement-card-slider">
                    <AchievementCard
                      isDark={isDark}
                      cardInfo={{
                        title: card.title,
                        description: card.subtitle,
                        image: card.image,
                        imageAlt: card.imageAlt,
                        footer: card.footerLink
                      }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </Fade>
  );
}
