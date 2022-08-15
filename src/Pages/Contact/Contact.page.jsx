import React from "react";
import { ContactContainer } from "./styles/Contact.style";

export const Contact = () => {
  return (
    <ContactContainer className="py-5">
      <div className="container">
        <h1 className="contact__title">Contact</h1>
        <div className="contact__form">
          <form
            action="https://send.pageclip.co/siQYENJc3rIJ6D8wtOwLGVlw4zDPc0Fa/Subscribe"
            className="pageclip-form"
            method="post"
          >
            <div className="container">
              <div className="row justify-content-center py-5">
                <div className="col-12 col-md-6 px-0 px-md-3">
                  <div className="input-group d-flex flex-column">
                    <input
                      type="text"
                      name="name"
                      className="form-control w-100 py-2 rounded-0"
                      placeholder="Name"
                      required
                    />

                    <span className="text-danger my-2 text-start">Error</span>
                  </div>
                  <div className="input-group d-flex flex-column">
                    <input
                      type="text"
                      name="surname"
                      className="form-control w-100 py-2 rounded-0"
                      placeholder="Surname"
                      required
                    />
                    <span className="text-danger my-2 text-start">Error</span>
                  </div>
                  <div className="input-group d-flex flex-column">
                    <input
                      type="email"
                      name="email"
                      className="form-control w-100 py-2 rounded-0"
                      placeholder="Email"
                      required
                    />
                    <span className="text-danger my-2 text-start">Error</span>
                  </div>
                  <div className="input-group d-flex flex-column">
                    <textarea
                      name="message"
                      className="form-control w-100 py-3 rounded-0"
                      rows={5}
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <span className="text-danger my-2 text-start">Error</span>
                  </div>
                  <button className="btn btn-grad">Send me</button>
                </div>
                <div className="col-12 col-md-6 mt-5 mt-md-0">
                  <div className="info">
                    <div className="info__top">
                      <div className="d-flex justify-content-start  px-0 px-md-3 py-2">
                        <i className="fa-solid fa-location-dot fs-4 me-2"></i>
                        <p className="text-start">
                          Information technologies building, Victoria Island,
                          Lagos, Nigeria.
                        </p>
                      </div>
                      <div className="d-flex justify-content-start  px-0 px-md-3 py-2">
                        <i className="fa-solid fa-phone fs-4 me-2"></i>
                        <p className="text-start">+234 081-1236-4568</p>
                      </div>
                      <div className="d-flex justify-content-start  px-0 px-md-3 py-2">
                        <i className="fa-solid fa-envelope fs-4 me-2"></i>
                        <p className="text-start">hello@info.com.ng</p>
                      </div>
                      <div className="d-flex justify-content-start  px-0 px-md-3">
                        <div className="socials py-2">
                          <a href="#">
                            <i className="fa-brands fa-youtube fs-3 me-3"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram fs-3 me-3"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f fs-3 me-3"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter fs-3 me-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="info__bottom">
                      <div className="d-flex justify-content-start  px-0 px-md-3 py-3">
                        <div className="w-100 info__map">
                          <iframe
                            title="Baku American Center"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=baku%20american%20center+(Baku%20American%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          >
                            <a href="https://www.gps.ie/wearable-gps/">
                              Kids wearables
                            </a>
                          </iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};
