import React from "react";
import { HomeComponent } from "./styles/Hemo.style";
import { Hero } from "../../components/Hero/Hero.component";
import { About } from "../../components/About/About.component";
export const Home = () => {
  return (
    <HomeComponent>
      <Hero />
      <About />
    </HomeComponent>
  );
};
