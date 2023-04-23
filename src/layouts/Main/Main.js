import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Team from "../../components/Team/Team";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Form from "../../components/Form/Form";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import ServicesHome from "../../components/ServicesHome/ServicesHome";

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <About />
      <ServicesHome />
      <Projects />
      <Team />
      <Form />
    </StyledMain>
  );
};

const StyledMain = styled.main`
padding-top: 5.3rem;

& > *:not(:nth-child(1)) {
  max-width: 1110px;
  margin-inline: auto;
}

& > * {
  margin-bottom: 5rem;
  }
`;

export default Main;
