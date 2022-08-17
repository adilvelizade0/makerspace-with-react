import React from "react";

import { AboutCardContainer } from "./styles/AboutCard.style";

export const AboutCard = ({isShifted}) => {

  return (
    <AboutCardContainer isShifted={isShifted}>
      <div className="image-box">
        <img src="#" alt="img"/>
      </div>
      <div className="card-content">
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
          ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit
          in id hac platea leo vulputate.
        </p>
        <button>Learn more</button>
      </div>
    </AboutCardContainer>
  );

};
