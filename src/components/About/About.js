import styled from "styled-components";
import MainButton from "../Buttons/MainButton";

const About = () => {
  return (
    <div id="about">
      <Heading>Quiénes somos</Heading>
      <StyledDiv>
        <p className="font-italic">
          Grupo GBM, es una consultora, constructora y desarrolladora de
          proyectos inmobiliarios, de comercio y sector industrial tanto
          públicos como privados.
        </p>
        <p className="font-italic">
          Nacida en el año 2020, surgiendo de la necesidad de los posibles
          clientes para el acompañamiento de sus proyectos, generando confianza
          para llevar procesos administrativos y profesionales, con mayor
          eficacia, resoluciones a tiempo y calidad eficiente.{" "}
        </p>
      </StyledDiv>
      <ButtonContainer>
        <MainButton size="large">Saber más</MainButton>
      </ButtonContainer>
    </div>
  );
};

const Heading = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 36px;
    position: relative;
    margin-bottom: 2.8rem;


    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        height: 5px;
        width: 28.5vw;
        background-color: var(--green);
    }

    @media (max-width: 650px) {
      &::before {
          display: none;
      }
`;

const StyledDiv = styled.div`
  max-width: 70ch;
  margin-inline: auto;
  padding-inline: 2rem;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-right: 2rem;
  font-size: 16px;

  @media (min-width: 650px) {
    justify-content: end;
`;

export default About;
