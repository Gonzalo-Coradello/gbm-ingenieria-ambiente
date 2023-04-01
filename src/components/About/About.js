import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Heading>Quiénes somos</Heading>
    </div>
  );
};

const Heading = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 36px;
    margin-bottom: 2.8rem;
    position: relative;

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

export default About;
