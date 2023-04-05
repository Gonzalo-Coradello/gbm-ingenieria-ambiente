import styled from "styled-components";

const About = () => {
  return (
    <div id="about">
      <Heading>Quiénes somos</Heading>
      <StyledDiv>
        <Card>
            <p>Somos una consultora de jóvenes profesionales gestada en el año 2020, encabezada por un Ingeniero Civil y un Licenciado en Gestión Ambiental, en colaboración con una red de profesionales satélites, entre ellos: arquitectos, geógrafos y agrimensores. Nos dedicamos a la asesoría, gestión y diseño de proyectos inmobiliarios para grupos desarrolladores y emprendedores privados.</p>
            <p>Nuestra labor surgió al identificar la problemática de la trazabilidad de un proyecto de loteo y urbanización. Se observó cierta desvinculación en una serie de entidades y procesos administrativos y profesionales, por los que el proyecto debe pasar para su puesta en marcha y su final desarrollo, generando como consecuencia que el proceso de desplegar un proyecto de loteo y fraccionamiento sea tedioso y extenso en tiempo.</p>
            <p>Nuestra misión es acompañar al cliente en el proceso, nucleando todos los procesos técnicos y administrativos en un solo actor, y de esta forma, generar que los desarrollos inmobiliarios sean efectivos en su materialización y agiles en el tiempo.</p>
        </Card>
        <img src="/images/about-rounded.png" alt="Ingeniería y ambiente" />
      </StyledDiv>
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

const Card = styled.div`
    background-color: var(--green);
    color: #FFF;
    max-width: 568px;
    display: grid;
    justify-content: center;
    margin-inline: auto;
    padding: 2rem;
    padding-bottom: .5rem;
    z-index: 10;
    font-size: 15px;
    line-height: 15px;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    
    @media (min-width: 980px) {
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      justify-content: stretch;
      margin-top: 4rem;

      & > img {
        margin-left: -4rem;
        border-radius: 2.5rem;
      }
    }
`


export default About;
