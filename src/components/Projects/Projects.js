import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styled from "styled-components";
import { ProjectsModal, Heading } from "../index";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  { src: "/images/projects/foto1.png", alt: "Proyecto 1" },
  { src: "/images/projects/foto2.png", alt: "Proyecto 2" },
  { src: "/images/projects/foto3.png", alt: "Proyecto 3" },
  { src: "/images/projects/foto4.png", alt: "Proyecto 4" },
  { src: "/images/projects/foto5.png", alt: "Proyecto 5" },
  { src: "/images/projects/foto6.png", alt: "Proyecto 6" },
  { src: "/images/projects/foto7.png", alt: "Proyecto 7" },
  { src: "/images/projects/foto8.png", alt: "Proyecto 8" },
  { src: "/images/projects/foto9.png", alt: "Proyecto 9" },
  { src: "/images/projects/foto10.png", alt: "Proyecto 10" },
  { src: "/images/projects/foto11.png", alt: "Proyecto 11" },
  { src: "/images/projects/foto12.png", alt: "Proyecto 12" },
  { src: "/images/projects/foto13.png", alt: "Proyecto 13" },
  { src: "/images/projects/foto14.png", alt: "Proyecto 14" },
  { src: "/images/projects/foto15.png", alt: "Proyecto 15" },
  { src: "/images/projects/foto16.png", alt: "Proyecto 16" },
  { src: "/images/projects/foto17.png", alt: "Proyecto 17" },
  { src: "/images/projects/foto18.png", alt: "Proyecto 18" },
  { src: "/images/projects/foto19.png", alt: "Proyecto 19" },
  { src: "/images/projects/foto20.png", alt: "Proyecto 20" },
  { src: "/images/projects/foto21.png", alt: "Proyecto 21" },
  { src: "/images/projects/foto22.png", alt: "Proyecto 22" },
];

export const Projects = () => {
  const [show, setShow] = useState(false);
  const [imagen, setImagen] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (alt) => {
    const image = images.find((i) => i.alt === alt);
    setImagen(image);
    handleShow();
  };

  return (
    <>
      <Heading line="left">Proyectos</Heading>
      <Container id="proyectos">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1.5}
          centeredSlides={false}
          loop={true}
          loopedSlides={2}
          autoplay={{
            reverseDirection: false,
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            650: {
              slidesPerView: 2.5,
              loopedSlides: 3,
            },
            1000: {
              slidesPerView: 3.5,
              loopedSlides: 4,
            },
          }}
        >
          {images.map((image, i) => (
            <>
              <SwiperSlide key={image.alt} onClick={() => openModal(image.alt)}>
                <Image>
                  <img src={image.src} alt={image.alt} />
                </Image>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <ProjectsModal imagen={imagen} show={show} handleClose={handleClose} />
      </Container>
    </>
  );
};

const Image = styled.div`
  img {
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1rem;
`;
