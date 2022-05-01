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

  useEffect(() => {
    promise.then((assets) => {
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

  return (
    <GallerySection className="py-3 py-md-5">
      <div className="container-lg">
        <div className="row px-2 px-sm-3 px-md-4" id="gallery">
          {isLoading && (
            <div className=" d-flex justify-content-center align-items-center flex-column">
              <Lottie options={defaultOptions} height={300} width={300} />
              <h1 className="mt-4 fw-bold">Photos is loading...</h1>
            </div>
          )}
          {!isLoading &&
            // eslint-disable-next-line array-callback-return
            assets.items.map(({ fields }, index) => {
              if (fields.file.contentType === "image/jpeg") {
                return (
                  <div className="col-12 col-sm-6 col-md-4 pb-2" key={index}>
                    <a
                      style={{ display: isImg ? "" : "none" }}
                      href={fields.file.url}
                      data-pswp-src={fields.file.url}
                      data-pswp-width={fields.file.details.image.width}
                      data-pswp-height={fields.file.details.image.height}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        onLoadStart={() => setIsImg(false)}
                        onLoad={() => setIsImg(true)}
                        className="img-fluid"
                        src={fields.file.url}
                        alt="img"
                      />
                    </a>
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
            })}
        </div>
      </div>
    </GallerySection>
  );
};
