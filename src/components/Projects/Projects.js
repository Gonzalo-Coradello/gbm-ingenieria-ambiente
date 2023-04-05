import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";

const images = [
  { src: "/images/projects/project1.png", alt: "Proyecto 1" },
  { src: "/images/projects/project2.png", alt: "Proyecto 2" },
  { src: "/images/projects/project3.png", alt: "Proyecto 3" },
  { src: "/images/projects/project4.png", alt: "Proyecto 4" },
  { src: "/images/projects/project5.png", alt: "Proyecto 5" },
  { src: "/images/projects/project6.png", alt: "Proyecto 6" },
  { src: "/images/projects/project7.png", alt: "Proyecto 7" },
  { src: "/images/projects/project8.png", alt: "Proyecto 8" },
  { src: "/images/projects/project9.png", alt: "Proyecto 9" },
  { src: "/images/projects/project3.png", alt: "Proyecto 10" },
  { src: "/images/projects/project5.png", alt: "Proyecto 11" }
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
  font-size: 36px;
  color: var(--green);
  text-align: center;
  margin-bottom: 2.8rem;
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
  padding-inline: 1rem;

  & img {
    margin-left: 1.3rem;

    @media (min-width: 500px) {
      margin-left: 2rem;
    }

    @media (min-width: 1200px) {
      margin-left: 0;
    }
  }
`;

export default Projects;
