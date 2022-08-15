import React, { useEffect, useState } from "react";
import { GallerySection } from "./styles/Gallery.style";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import { getAssets } from "../../contentful";
import Lottie from "react-lottie";
import rocketLoading from "../../lotties/81045-rocket-launch.json";
import ContentLoader from "react-content-loader";

const promise = getAssets();

export const Gallery = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isImg, setIsImg] = useState(false);
  const [tabName, setTabName] = useState("all");

  useEffect(() => {
    promise.then((assets) => {
      console.log(assets);
      setAssets(assets);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: PhotoSwipe,
    });

    lightbox.init();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(tabName);
  return (
    <GallerySection className="py-3">
      <div className="container-lg">
        <div className="d-flex justify-content-center py-5">
          <button
            onClick={() => setTabName("all")}
            className="btn btn-outline-light text-dark mx-2"
            style={{ fontWeight: tabName === "all" ? "bold" : "normal" }}
          >
            All
          </button>
          <button
            onClick={() => setTabName("images")}
            className="btn btn-outline-light text-dark mx-2"
            style={{ fontWeight: tabName === "images" ? "bold" : "normal" }}
          >
            Images
          </button>
          <button
            onClick={() => setTabName("videos")}
            className="btn btn-outline-light text-dark mx-2"
            style={{ fontWeight: tabName === "videos" ? "bold" : "normal" }}
          >
            Videos
          </button>
        </div>
        <div className="h-100 row px-2 px-sm-3 px-md-4" id="gallery">
          {isLoading && (
            <div className="loading-screen d-flex justify-content-center align-items-center flex-column">
              <Lottie options={defaultOptions} height={250} width={250} />
              <h1 className="mt-4 fw-bold">Photos is loading...</h1>
            </div>
          )}
          {!isLoading &&
            // eslint-disable-next-line array-callback-return
            assets.items.map(({ fields }, index) => {
              console.log(fields);
              if (tabName === "images") {
                if (fields.file.contentType === "image/jpeg") {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-4 pb-2 pb-md-3"
                      key={index}
                    >
                      <div className="photo">
                        <div className="img-title">
                          <p>{fields.title}</p>
                        </div>

                        <a
                          style={{ display: isImg ? "" : "none" }}
                          href={fields.file.url}
                          data-pswp-src={fields.file.url}
                          data-pswp-width={fields.file.details.image.width}
                          data-pswp-height={fields.file.details.image.height}
                          target="_blank"
                          rel="noreferrer"
                          className="position-relative"
                        >
                          <img
                            onLoadStart={() => setIsImg(false)}
                            onLoad={() => setIsImg(true)}
                            className="img-fluid shadow rounded"
                            src={fields.file.url}
                            alt="img"
                          />
                        </a>
                      </div>
                      <ContentLoader
                        speed={2}
                        width="100%"
                        height="100%"
                        viewBox="0 0 400 400"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        display={!isImg ? "" : "none"}
                      >
                        <rect
                          x="8"
                          y="22"
                          rx="0"
                          ry="0"
                          width="400"
                          height="400"
                        />
                      </ContentLoader>
                    </div>
                  );
                }
              } else if (tabName === "all") {
                if (fields.file.contentType === "image/jpeg") {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-4 pb-2 pb-md-3"
                      key={index}
                    >
                      <div className="photo">
                        <div className="img-title">
                          <p>{fields.title}</p>
                        </div>

                        <a
                          style={{ display: isImg ? "" : "none" }}
                          href={fields.file.url}
                          data-pswp-src={fields.file.url}
                          data-pswp-width={fields.file.details.image.width}
                          data-pswp-height={fields.file.details.image.height}
                          target="_blank"
                          rel="noreferrer"
                          className="position-relative"
                        >
                          <img
                            onLoadStart={() => setIsImg(false)}
                            onLoad={() => setIsImg(true)}
                            className="img-fluid shadow rounded"
                            src={fields.file.url}
                            alt="img"
                          />
                        </a>
                      </div>
                      <ContentLoader
                        speed={2}
                        width="100%"
                        height="100%"
                        viewBox="0 0 400 400"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        display={!isImg ? "" : "none"}
                      >
                        <rect
                          x="8"
                          y="22"
                          rx="0"
                          ry="0"
                          width="400"
                          height="400"
                        />
                      </ContentLoader>
                    </div>
                  );
                } else {
                  if (fields.file.contentType !== "image/jpeg") {
                    return (
                      <div
                        className="col-12 col-sm-6 col-md-4 pb-2 pb-md-3 video__container"
                        key={index}
                      >
                        <iframe
                          width="100%"
                          height="290px"
                          src={fields.title.split(".be/").join("be.com/embed/")}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    );
                  }
                }
              } else {
                if (fields.file.contentType !== "image/jpeg") {
                  console.log(fields.title.split(".be/").join("be.com/embed/"));
                  return (
                    <div
                      className="col-12 col-md-6 pb-2 pb-md-3 video__container"
                      key={index}
                    >
                      <iframe
                        width="100%"
                        height="400px"
                        src={fields.title.split(".be/").join("be.com/embed/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                }
              }
            })}
        </div>
      </div>
    </GallerySection>
  );
};
