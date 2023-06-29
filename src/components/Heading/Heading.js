import styled from "styled-components";

const Heading = ({ line, children }) => {

  if(line === 'left') {
    return (
      <HeadingLeft>
        <h2>
          {children}
        </h2>
      </HeadingLeft>
    )
  } else if(line === 'right') {
    return (
      <HeadingRight>
        <h2>{children}</h2>
      </HeadingRight>
    )
  }

  return (
    <h2>
      { children }
    </h2>
  )
}

const HeadingLeft = styled.div`
  text-align: center;
  color: var(--green);
  font-size: 36px;
  position: relative;
  margin-bottom: 2.8rem;

  & h2 {
    width: 22rem;
    margin-inline: auto;
    text-align: left;
    white-space: nowrap;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22vw;
    height: 5px;
    width: 46vw;
    background-color: var(--green);
  }

  @media (max-width: 720px) {
    &::before {
      display: none;
    }
    & h2 {
      text-align: center;
      width: fit-content;
    }
  }
`;

const HeadingRight = styled.div`
  text-align: center;
  color: var(--green);
  font-size: 36px;
  margin-bottom: 2.8rem;
  position: relative;

  & h2 {
    width: 22rem;
    margin-inline: auto;
    text-align: right;
    white-space: nowrap;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22vw;
    height: 5px;
    width: 46vw;
    background-color: var(--green);
  }

  @media (max-width: 720px) {
    &::after {
      display: none;
    }
    & h2 {
      text-align: center;
      width: fit-content;
    }
  }
`

export default Heading
