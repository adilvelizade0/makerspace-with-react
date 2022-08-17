import React from "react";
import {
  HeroContainer,
  ContentContainer,
  ImageContainer,
  LinkArrow,
  HighlightSvg,
  Line,
} from "./styles/Hero.style";

import RightArrowCircleUrl from "./right-arrow-circle.svg";
import LinkArrowUrl from "./link-arrow.svg";
import HightlightSvgUrl from "./highlight-1.svg";

export const Hero = () => {
  return (
    <HeroContainer className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <ContentContainer>
            <h1 className="display-3">
              Welcome to our makerspace <HighlightSvg src={HightlightSvgUrl} />{" "}
            </h1>

            <p>
              Maker Space established in December 2015, the Maker Space of the
              Baku American Center provides free classes on STEM, 3D designs and
              printing, robotics and other classes. Space can be considered as
              an entrepreneurial lab for young creators. Also, the center
              includes a special book collection.
            </p>

            <a href="."> 
              GO TO GALLERY
              <img src={RightArrowCircleUrl} alt="=>"></img>
            <LinkArrow src={LinkArrowUrl} alt="arrow"></LinkArrow>

            </a>

          </ContentContainer>
        </div>

        <div className="col-md-4">
          <ImageContainer>s</ImageContainer>
        </div>
      </div>

      <Line />
    </HeroContainer>
  );
};
