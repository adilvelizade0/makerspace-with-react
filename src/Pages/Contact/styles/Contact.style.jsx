import styled from "styled-components";

const ContactContainer = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  .contact__title {
    font-family: "Poppins", sans-serif;
  }
  .contact__form {
    .btn-grad {
      background-image: linear-gradient(
        to right,
        #fc00ff 0%,
        #00dbde 51%,
        #fc00ff 100%
      );

      padding: 10px 35px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 0;
      display: block;
    }

    .btn-grad:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }

    .info__top {
      i {
        color: #001d6e;
      }
      p {
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .info__bottom {
      .info__map {
        border: 1px solid #001d6e;
      }
    }
  }
`;

export { ContactContainer };
