// import styled from "styled-components";
// import Card from "../Card/Card";

// const services = [
//   {
//     title: "Asesoría",
//     body1:
//       "Asesorar a emprendedores y desarrolladores inmobiliarios sobre factibilidades y viabilidad del proyecto.",
//     body2:
//       "Acompañamiento a clientes en la dirección y ejecución de las obras de urbanización.",
//     image: "/images/services/service.png",
//   },
//   {
//     title: "Desarrollo",
//     body1: "Desarrollo de proyecto de loteo y urbanización.",
//     body2:
//       "Desarrollo de proyectos de redes de servicios, como redes de agua potable y cloaca, de electricidad y de gas.",
//     image: "/images/services/service.png",
//   },
//   {
//     title: "Estudios",
//     body1: "Ejecución de estudios ambientales, estudios hídricos e hidráulicos",
//     body2: "",
//     image: "/images/services/service.png",
//   },
// ];

// const Services = () => {
//   return (
//     <div id="servicios">
//       <Heading>Servicios</Heading>
//       <StyledDiv>
//         {services.map((service) => (
//           <Card key={service.title} service={service} />
//         ))}
//       </StyledDiv>
//     </div>
//   );
// };

// const Heading = styled.h2`
//   text-align: center;
//   color: var(--green);
//   font-size: 36px;
//   margin-bottom: 2.8rem;
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 50%;
//     right: 0;
//     height: 5px;
//     width: 32vw;
//     background-color: var(--green);
//   }

//   @media (max-width: 650px) {
//     &::after {
//       display: none;
//     }
//   }
// `;

// const StyledDiv = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// export default Services;
