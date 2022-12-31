import { useCallback, useEffect, useRef, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photo1 from "~/images/photo1.jpg";
import photo2 from "~/images/photo2.jpg";
import photo3 from "~/images/photo3.jpg";
import photo4 from "~/images/photo4.jpg";

const photos = [
  {
    src: photo1,
    width: 2,
    height: 2,
  },
  {
    src: photo2,
    width: 5,
    height: 5,
  },
  {
    src: photo3,
    width: 5,
    height: 5,
  },
  {
    src: photo4,
    width: 5,
    height: 5,
  },
  {
    src: photo2,
    width: 5,
    height: 5,
  },
  {
    src: photo2,
    width: 5,
    height: 5,
  },
  {
    src: photo2,
    width: 5,
    height: 5,
  },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Gallery
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  styles={{}}
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    source: x.src,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
