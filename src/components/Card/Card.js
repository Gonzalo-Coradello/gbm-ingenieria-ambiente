import styled from "styled-components";

const Card = ({ service: { title, body1, body2, image } }) => {
  return (
    <StyledCard>
      <StyledFront>
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </StyledFront>
      <StyledBack>
        <h3>{title}</h3>
        <p>{body1}</p>
        <p>{body2}</p>
        <img src={image} alt={title} />
      </StyledBack>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
  width: 348px;
  height: 378px;
  border-radius: 2.5rem;
  color: #fff;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 4rem 4rem;
    backface-visibility: hidden;
    overflow: hidden;
    transition: 500ms ease-in-out;
  }

  & h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & p {
    line-height: 1.15;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
    z-index: -10;
  }

  &:hover div:nth-child(1) {
    transform: perspective(1000px) rotateY(180deg);
  }

  &:hover div:nth-child(2) {
    transform: perspective(1000px) rotateY(360deg);
  }
`;

const StyledFront = styled.div`
  transform: perspective(1000px) rotateY(0deg);
`;

const StyledBack = styled.div`
  transform: perspective(1000px) rotateY(180deg);

  & img {
    transform: rotateY(180deg);
    filter: brightness(40%);
  }
`;

export default Card;
