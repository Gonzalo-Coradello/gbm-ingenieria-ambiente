import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";

const images = [
  { src: "http://placekitten.com/300/300", alt: "img1" },
  { src: "http://placekitten.com/300/300", alt: "img2" },
  { src: "http://placekitten.com/300/300", alt: "img3" },
  { src: "http://placekitten.com/300/300", alt: "img4" },
  { src: "http://placekitten.com/300/300", alt: "img5" },
  { src: "http://placekitten.com/300/300", alt: "img6" },
  { src: "http://placekitten.com/300/300", alt: "img7" },
  { src: "http://placekitten.com/300/300", alt: "img8" },
  { src: "http://placekitten.com/300/300", alt: "img9" },
  { src: "http://placekitten.com/300/300", alt: "img10" },
  { src: "http://placekitten.com/300/300", alt: "img11" },
  { src: "http://placekitten.com/300/300", alt: "img12" }
];

const Projects = () => {
  return (
    <Container>
      <Heading>Proyectos</Heading>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        centeredSlides={false}
        loop={true}
        loopedSlides={2}
        autoplay={{
          reverseDirection: false,
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={600}
        breakpoints={{
          650: {
            slidesPerView: 3,
            loopedSlides: 3,
          },
          900: {
            slidesPerView: 4,
            loopedSlides: 4,
          },
          1200: {
            slidesPerView: 5.5,
            loopedSlides: 5,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.alt}>
            <RoundImg>
              <img src={image.src} alt={image.alt} />
            </RoundImg>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Heading = styled.h2`
  font-size: 1.5rem;
  color: var(--green);
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const RoundImg = styled.div`
  width: 125px;
  img {
    border-radius: 100%;
    width: 100%;
  }

  @media screen and (min-width: 415px) {
    width: 150px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
`;

export default Projects;
