// import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";

const Service = ({ id, icon, title, variant = "", body = "" }) => {
  return (
    <Container
      className={`${
        variant !== "button"
          ? "col-12 col-md-5 col-lg-3 gap-1 gap-lg-2 mb-4 mb-lg-0 my-2 my-lg-5 mx-2"
          : "serviceSecondary"
      }`}
    >
      <div className="mx-auto">
        {variant === "button" ? (
          <img className="mx-auto" src={icon} alt={title} />
        ) : (
          <IconStyled>
            <AiFillQuestionCircle />
          </IconStyled>
        )}
      </div>
      <StyledTitle>
        <h3 className={`clr-green`}>{title}</h3>
      </StyledTitle>
      {variant === "button" ? (
        <Button className="bg-gray">
          <a href={`/servicios/${id}`} className="font-regular">
            Más información
          </a>
        </Button>
      ) : (
        <ServiceText className="px-3 px-lg-0">{body}</ServiceText>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding-block: 0.75em;
  margin-inline: auto;
  transition: all 300ms;
  border-radius: 20px;

  &:hover {
    opacity: 0.5;
  }

  & > * {
    color: white;
    padding: 0.75em 3em;
    border-radius: 20px;
  }
`;

const ServiceText = styled.p`
  line-height: normal;
`;

const IconStyled = styled.div`
  background: rgba(12, 91, 40, 0.2);
  padding: 15px;
  border-radius: 50%;
  svg {
    font-size: 2.5rem;
  }
`;

export default Service;
