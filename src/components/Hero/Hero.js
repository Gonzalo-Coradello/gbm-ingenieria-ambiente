import styled from "styled-components"
import MainButton from "../Buttons/MainButton"

const Hero = () => {
  return (
    <Section>
      <Filter />
      <div>
        <div className="clr-green">
          <h1 className="font-medium">Acompañamos tu desarrollo</h1>
          <p>Somos una consultora de jóvenes profesionales. Nos dedicamos a la asesoría, gestión y diseño de proyectos inmobiliarios para grupos desarrolladores y emprendedores privados.</p>
        </div>
        <ButtonContainer href="#contacto">
          <MainButton>Contactá con nosotros</MainButton>
        </ButtonContainer>
      </div>
      <img src='/images/hero.png' alt="GBM Ingeniería y Ambiente" />
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  width: 100%;  
  height: 400px;

  @media(min-width: 700px) {
    height: 90vh;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 650px;
    padding: 6rem 4rem;

    @media(max-width: 700px) {
      height: 100%;
      display: grid;
      align-items: center;
      padding: 2rem;
      text-align: center;
      
    }
  }

  & h1 {
    font-size: 24px;
    @media(min-width: 500px) {
      font-size: 36px;
    }
  }


  & p {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    overflow: hidden;
  }
`

const ButtonContainer = styled.a`
  @media(max-width: 700px) {
    width: fit-content;
    margin-inline:auto;
  }
`

const Filter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFF5;

  @media(max-width: 700px) {
    background-color: #FFF8;
    backdrop-filter: blur(5px);
  }

`

export default Hero
