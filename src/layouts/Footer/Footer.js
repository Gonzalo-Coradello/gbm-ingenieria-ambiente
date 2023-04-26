import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import MainButton from "../../components/Buttons/MainButton";
import styled from "styled-components";
import logo from "./assets/white-logo.png";

function Footer() {
  const navbarLinks = [
    { ref: "#about", slug: "Quiénes somos" },
    { ref: "#servicios", slug: "Servicios" },
    { ref: "#contacto", slug: "Contacto" },
  ];

  const helpList = [
    { ref: "", slug: "Política de privacidad" },
    { ref: "", slug: "Términos y condiciones" },
    { ref: "", slug: "Aviso legal" },
  ];

  const iconSize = { fontSize: "1.5rem" };

  return (
    <StyledFooter className="bg-green col-12 p-3 pt-5 d-flex flex-wrap">
      {/* 1 */}
      <FooterBox className="col-12 col-md-3 gap-3 pb-5 pb-md-0">
        <div className="d-flex justify-content-center align-content-center">
          <img width={148} src={logo} alt="GBM Ingenieria y ambiente" />
        </div>
        <div>
          <p className="m-0 text-center font-regular">
            Dirección de la oficina
          </p>
          <p className="m-0 text-center font-regular">Teléfono de contacto</p>
        </div>
      </FooterBox>
      {/* 2 */}
      <FooterBox className="col-12 col-md-3">
        <div className="d-flex flex-column justify-content-center ps-0 ps-md-2 ps-lg-2">
          <h4 className="m-0 font-bold">Nosotros</h4>
          <ul className="m-0 p-0">
            {navbarLinks.map((link) => (
              <li key={link.ref} className="m-0 p-0 pt-2">
                <a href={link.ref} className="clr-white font-regular">
                  {link.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FooterBox>
      {/* 3 */}
      <FooterBox className="col-12 col-md-3 py-5">
        <div className="d-flex flex-column justify-content-center ps-0 ps-md-2 ps-lg-2">
          <h4 className="m-0 font-bold">Ayuda</h4>
          <ul className="m-0 p-0">
            {helpList.map((link) => (
              <li key={link.slug} className="m-0 p-0 pt-2">
                <a href={link.ref} className="clr-white font-regular">
                  {link.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FooterBox>
      {/* 4 */}
      <FooterBox className="col-12 col-md-3">
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
          <div className="col-12 d-flex justify-content-center font-bold">
            <MainButton>Contactá con nosotros</MainButton>
          </div>
          <div className="col-12 d-flex gap-2 justify-content-around">
            <MainButton size="small">
              <AiOutlineInstagram style={iconSize} />
            </MainButton>
            <MainButton size="small">
              <FaLinkedinIn style={iconSize} />
            </MainButton>
            <MainButton size="small">
              <AiOutlineTwitter style={iconSize} />
            </MainButton>
            <MainButton size="small">
              <FaFacebookF style={iconSize} />
            </MainButton>
          </div>
        </div>
      </FooterBox>
      <div className="col-12 d-flex justify-content-center pt-4">
        <p className="p-0 m-0 col-6 text-center font-bold">GBM © 2023</p>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;

  & ul {
    @media (max-width: 767px) {
      min-width: 150px;
    }
  }

  & h4 {
    font-size: 16px;
  }

  & a,
  & p {
    font-size: 14px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Footer;
