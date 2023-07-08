import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";

export const AboutUs = () => {
  return (
    <StyledAboutUs className="d-flex flex-column gap-2 gap-lg-4">
      <div className="d-flex flex-column gap-3">
        <StyledDivImg>
          <Filter />
          <StyledImg src="/images/projects/foto16.png" alt="Excavación" />
        </StyledDivImg>
        <HeadingContainer>
          <Heading line="left">Nosotros</Heading>
        </HeadingContainer>
      </div>
      <div className="col-10 col-lg-8 m-auto my-4">
        <h5>
          Somos una consultora de jóvenes profesionales gestada en el año 2020,
          que radica en la provincia de Mendoza. Buscamos las soluciones
          perfectas para tu proyecto.
        </h5>
      </div>
      <AboutUsInfo className="d-flex flex-column justify-content-center flex-lg-row justify-content-center col-12">
        <div className="col-12 col-lg-5 py-2 px-3 px-lg-4 d-flex flex-column justify-content-center">
          <Subtitle className="py-2 py-lg-0 pb-lg-2">¿Quíenes somos?</Subtitle>
          <p className="p-0">
            Encabezada por un Ingeniero Civil y un Licenciado en Gestión
            Ambiental, en colaboración con una red de profesionales, entre
            ellos: arquitectos, geógrafos y agrimensores.
          </p>
          <p className="p-0">
            Nuestra labor surgió al identificar la problemática de la
            trazabilidad de un proyecto de loteo y urbanización.
          </p>
          <p className="p-0">
            Nos dedicamos a la asesoría, gestión y diseño de proyectos para
            grupos desarrolladores y emprendedores privados.
          </p>
        </div>

        <StyledDivImg className="m-auto col-11 col-lg-5">
          <AboutUsImage src="/images/projects/foto14.png" alt="Excavación" />
        </StyledDivImg>
      </AboutUsInfo>

      <div className="mt-5">
        <Subtitle className="pb-2">Nuestro objetivo</Subtitle>
        <ServicesIntro className="px-3">
          <p className="font-regular">
            Es guiar al cliente en las diversas etapas de su proyecto. Dentro de
            nuestra labor se encuentran:
          </p>
          <ObjetivesList>
            <ItemList>
              <p>
                Asesorar a emprendedores y desarrolladores inmobiliarios sobre
                factibilidades y viabilidad del proyecto.
              </p>
            </ItemList>
            <ItemList>
              <p>Desarrollo de proyecto de loteo y urbanización.</p>
            </ItemList>
            <ItemList>
              <p>
                Ejecución de estudios ambientales, estudios hídricos e
                hidráulicos.
              </p>
            </ItemList>
            <ItemList>
              <p>
                Acompañamiento a clientes en la dirección y ejecución de las
                obras de urbanización.
              </p>
            </ItemList>
          </ObjetivesList>
        </ServicesIntro>
      </div>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.div`
  padding: 5.3rem 0 3rem 0;
  min-height: 100vh;
  @media (min-width: 992px) {
    padding: 5.3rem 0;
  }
`;

const AboutUsInfo = styled.div`
  background-color: #ececed;
`;

const HeadingContainer = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  top: 200px;
`;

const Subtitle = styled.h3`
  color: var(--green);
  text-align: center;
  font-size: 2.5rem;
  font-weight: lighter;
`;

const ItemList = styled.li`
  list-style: disc;
  font-weight: unset;
  text-decoration: none;
`;

const ObjetivesList = styled.ul`
  li {
    p {
      padding: 0;
    }
  }
`;

const ServicesIntro = styled.div`
  font-size: 20px;
  font-family: MullerLightItalic;
  border-left: 3px solid var(--green);
  max-width: 900px;
  margin-inline: auto;
`;

const StyledDivImg = styled.div`
  height: 250px;
  position: relative;
  @media (min-width: 992px) {
    height: 350px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const AboutUsImage = styled(StyledImg)`
  border-radius: 2rem;
  @media (min-width: 992px) {
    border-radius: 3rem;
  }
`;

const Filter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff5;
  backdrop-filter: blur(2px);
  @media (max-width: 700px) {
    background-color: #fff8;
  }
`;
