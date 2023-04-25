import styled from "styled-components";

const Service = ({ icon, title, variant, body = "" }) => {
  return (
    <Container className={`${!variant && "col-12 col-md-5 col-lg-3 gap-2"}`}>
      <div className="mx-auto">
        <img className="mx-auto" src={icon} alt={title} />
      </div>
      <StyledTitle>
        <h3 className={`clr-green`}>{title}</h3>
      </StyledTitle>
      {variant === "button" ? (
        <Button className="font-regular bg-gray">Más información</Button>
      ) : (
        <ServiceText>{body}</ServiceText>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ variant }) => variant !== "button" && "fit-content"};
  width: ${({ variant }) => variant === "button" && "320px"};
  & h3 {
    font-size: 20px;
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: ${({ variant }) => variant !== "button" && "70px"};
  h3 {
    margin: 0;
    padding: 0;
  }
`;

const Button = styled.button`
  font-size: 14px;
  color: white;
  border: none;
  width: fit-content;
  margin-inline: auto;
  padding: 0.75em 3em;
  transition: all 300ms;

  &:hover {
    opacity: 0.5;
  }
`;

const ServiceText = styled.p`
  line-height: normal;
`;

export default Service;
