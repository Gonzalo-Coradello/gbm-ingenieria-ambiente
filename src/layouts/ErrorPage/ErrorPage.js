import React from "react";
import styled from "styled-components";
import { MainButton } from "../../components";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <div className="bg-green p-5 col-11 col-sm-10 col-md-6 col-lg-5 col-xl-4 d-flex flex-column align-items-center">
        <h3>Error 404</h3>
        <p>Página no encontrada</p>
        <Link to="/">
          <MainButton>Click aqui para volver al inicio</MainButton>
        </Link>
      </div>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled.div`
  min-height: 100vh;
  padding: 5.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border-radius: 1rem;
  }
`;
