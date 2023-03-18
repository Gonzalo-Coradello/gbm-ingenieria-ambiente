import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: 0;
`;

function MainButton(props) {
  const smallStyle = { padding: "0.4em", borderRadius: "50%" };
  const regularStyle = { padding: "0.5em 1em", borderRadius: "1.5em" };
  return (
    <StyledButton
      className="bg-yellow"
      style={props.size == "small" ? smallStyle : regularStyle}
    >
      {props.children}
    </StyledButton>
  );
}

export default MainButton;
