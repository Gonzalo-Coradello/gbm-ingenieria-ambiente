import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import {
  Hero,
  About,
  Team,
  Projects,
  Form,
  Services,
} from "../../components/index";

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Form />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  padding-top: 5.3rem;

  & > * {
    max-width: 1110px;
    margin-inline: auto;
  }

  & > * {
    margin-bottom: 5rem;
  }
`;

export default Main;
