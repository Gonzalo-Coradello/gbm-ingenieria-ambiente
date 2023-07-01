import styled from "styled-components";
import MainButton from "../Buttons/MainButton";
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo"

const About = () => {
  return (
    <div id="about">
      <Heading line='left'>Quiénes somos</Heading>
      <LogoContainer>
        <Logo width={243} />
      </LogoContainer>
      <StyledDiv>
        <p className="font-italic">
          Grupo GBM es una consultora, constructora y desarrolladora de
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
        <a href="/nosotros">
          <MainButton size="large">Saber más</MainButton>
        </a>
      </ButtonContainer>
    </div>
  );
};

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

const LogoContainer = styled.div`
  width: fit-content;
  margin-inline: auto;
  margin-block: 3.5rem;
`

export default About;
