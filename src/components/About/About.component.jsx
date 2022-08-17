import React from "react";
import { AboutContainer } from "./styles/About.style";
import { AboutCard } from "../AboutCard/AboutCard.component";
import { SectionTitle } from "../SectionTitle/SectionTitle.component";



export const About = () => {


  return (
    
    <AboutContainer>
      <div className="container">
        <SectionTitle />

        <div className="row justify-content-center">

          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-lg-start">
              <AboutCard  isShifted="true"/>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-lg-end align-items-start ">
            <AboutCard/>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-lg-start">
              <AboutCard isShifted="true"/>
          </div>

          <div className="col-12 col-md-6  d-flex justify-content-center justify-content-lg-end align-items-start ">
            <AboutCard/>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};
