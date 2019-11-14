import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./LiverkaPortfolioImages";
import Lightbox from 'react-image-lightbox'; //https://github.com/frontend-collective/react-image-lightbox
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default function LiverkaPortfolio2() {
  const [photoIndex, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const PrevRequest = () => {
    setCurrentImage((photoIndex + photos.length - 1) % photos.length)
  };
  const NextRequest = () => {
    setCurrentImage((photoIndex + 1) % photos.length)
  };
  return (
    <>
      <Gallery photos={photos} direction="column" margin={0} onClick={openLightbox} />
      {viewerIsOpen ? (
        <Lightbox
          mainSrc={photos[photoIndex].src}
          nextSrc={photos[(photoIndex + 1) % photos.length].src}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={PrevRequest}
          onMoveNextRequest={NextRequest}
          // imageTitle={11}
          // imageCaption={22}
        />
      ) : null}
    </>
  )
}