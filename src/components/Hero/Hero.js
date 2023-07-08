import styled from "styled-components";
import MainButton from "../Buttons/MainButton";

const Hero = () => {
  return (
    <Section className="bor-2b">
      <Filter />
      <div className="bor-2y">
        <div className="clr-green">
          <h1 className="font-medium bor-2r">Acompañamos tu desarrollo</h1>
          <p>
            Somos una consultora de jóvenes profesionales. Nos dedicamos a la
            asesoría, gestión y diseño de proyectos inmobiliarios para grupos
            desarrolladores y emprendedores privados.
          </p>
        </div>
        <ButtonContainer href="#contacto">
          <MainButton>Contactá con nosotros</MainButton>
        </ButtonContainer>
      </div>
      <img src="/images/hero.png" alt="GBM Ingeniería y Ambiente" />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 400px;

  @media (min-width: 700px) {
    height: 90vh;
  }

  & > div {
    position: absolute;
    border: 5px thick saddlebrown;
    top: 0;
    right: 0;
    max-width: 520px;
    padding: 6rem 1rem;
    text-align: center;

    @media (max-width: 700px) {
      height: 100%;
      display: grid;
      align-items: center;
      padding: 2rem;
      text-align: center;
    }
  }

  & h1 {
    font-size: 24px;
    @media (min-width: 500px) {
      font-size: 36px;
    }
  }

  & p {
    border: 3px solid yellow;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-inline: 2rem;
    @media (min-width: 700px) {
      padding-inline: 4rem;
    }
  }

  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    overflow: hidden;

    @media (min-width: 700px) {
      padding-bottom: 2.5rem;
    }
  }
`;

const ButtonContainer = styled.a`
  @media (max-width: 700px) {
    width: fit-content;
    margin-inline: auto;
  }
`;

const Filter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff1;

  @media (max-width: 700px) {
    backdrop-filter: blur(2px);
  }
`;

export default Hero;
