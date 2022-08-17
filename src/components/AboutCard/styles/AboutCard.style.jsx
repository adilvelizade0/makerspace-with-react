import styled from "styled-components";
const AboutCardContainer = styled.div`
  width: 70%;

  border-radius: 1rem;
  border: 1px solid black;

  @media (min-width: 768px) {
    margin-top: ${({ isShifted }) => (isShifted ? "180px" : 0)};
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 992px) {
    width: 85%;
  }

  .image-box {
    height: 300px;
    background-color: pink;
    border-radius: 1rem;
  }

  .card-content {
    padding: 1.4rem 1.6rem;
    text-align: left;

    h4 {
      font-size: 1.375rem;
      font-weight: 500;
    }

    p {
      font-size: .9rem;
    }

    button {
      color: #fff;
      background-color: #b224ef;
      outline: none;
      border: none;
      border-radius: 0.6rem;
      padding: 0.5rem 1.5rem;
      font-size: 0.85rem;
    }
    @media (max-width: 992px) {
      padding: 0.4rem 1.2rem;
    }

    @media (max-width: 576px) {
      padding: 0.3rem .9rem;
    }
  }
`;

export { AboutCardContainer };
