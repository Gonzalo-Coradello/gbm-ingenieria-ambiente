import React from "react";
import styled from "styled-components";

/*
  Boton pequeño --> size="small"
  Boton regular --> por defecto

  Boton primario --> por defecto
  Boton secundario --> type="secondary"
*/

const smallStyle = { padding: "0.3em", borderRadius: "50%" };
const regularStyle = { padding: "0.5em 1.2em", borderRadius: "1.5em" };

function MainButton(props) {
  return (
    <StyledButton
      className={`${
        props.type === "secondary" ? `btn-primary` : `btn-secondary`
      }`}
      style={props.size === "small" ? smallStyle : regularStyle}
      type={`${props.submit === "submit" ? "submit" : ""}`}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: 0;
`;

export default MainButton;

// Trabajado por Gonzalo Ramos
