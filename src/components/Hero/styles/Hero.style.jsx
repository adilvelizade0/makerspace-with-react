import styled from "styled-components";

const HeroContainer = styled.div``;

const ContentContainer = styled.div`
  text-align: left;
  padding: 6.5rem 0;

  @media (max-width: 1200px) {
    padding: 5.5rem 0;
  }
  @media (max-width: 992px) {
    padding: 4.5rem 0;
  }

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  /* @media (max-width: 428px) {
    padding: 3rem 0;
  } */

  h1 {
    /* font-size: 30px; */
    font-weight: bold;
    position: relative;
    margin-bottom: 1.5rem;

    @media (max-width: 992px) {
    margin-bottom: 1.3rem;

  }

  @media (max-width: 576px) {
    margin-bottom: 1.1rem;
  }
  }

  p {
    font-size: 1rem;

    /* @media (max-width: 990px) {
      font-size: 18px;
    }

    @media (max-width:668px){
      font-size: 16px;
    } */
  }

  a {
    text-align: center;
    display: inline-block;
    border-radius: 0.7rem;
    border: 1px solid black;
    font-size: 0.8rem;
    text-decoration: none;
    background-color: purple;
    color: white;
    padding: 0.7rem 1rem;
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      margin-top: 1.1rem;
      margin-bottom: 1.3rem;
    }
    @media (max-width: 576px) {
      margin-top: 0.7rem;
      padding: 0.3rem 0.6rem;
    }

    img {
      margin-left: 0.8rem;
    }
  }
`;

const LinkArrow = styled.img`
  width: 13rem;
  position: absolute;
  left: 8.5rem;
  top: 0;
  @media (max-width: 1200px) {
    width: 11rem;
  }

  @media (max-width: 992px) {
    width: 9rem;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const HighlightSvg = styled.img`
  position: relative;
  bottom: 8rem;
  left: 6.5rem;

  @media (max-width: 991px) {
    width: 65px;
    bottom: 7rem;
    left: 4.5rem;
  }

  @media (max-width: 767px) {
    width: 55px;
    bottom: 6rem;
    left: 4rem;
  }

  @media (max-width: 444px) {
    width: 40px;
    bottom: 5rem;
    left: 3.5rem;
  }

  @media (max-width: 336px) {
    width: 35px;
    bottom: 4.3rem;
    left: 2.8rem;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  background-color: purple;
  width: 100%;
  height: 50%;
  margin-top: 12rem;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ede0ff;
  margin-top: 1.5rem;
`;

export {
  HeroContainer,
  ContentContainer,
  ImageContainer,
  LinkArrow,
  HighlightSvg,
  Line,
};
