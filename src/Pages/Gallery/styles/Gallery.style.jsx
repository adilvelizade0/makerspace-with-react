import styled from "styled-components";

const GallerySection = styled.section`
  height: 100%;

  .loading-screen {
    height: 85vh !important;
  }

  .photo {
    width: 100%;
    height: 100%;
    position: relative;

    .img-title {
      position: absolute;
      bottom: 0;
      border-radius: 0 0 0.25rem 0.25rem;
      z-index: 1;
      width: 100%;
      display: block;
      background-color: rgba(0, 0, 0, 0.3);
      padding-left: 20px;
      padding-top: 20px;
      text-align: start;

      p {
        color: white;
        font-family: "Poppins", sans-serif;
        font-weight: lighter;
        opacity: 1 !important;
      }
    }
  }

  h1 {
    font-family: "Righteous", cursive;
  }
`;

export { GallerySection };
