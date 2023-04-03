import styled from "styled-components";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import MainButton from "../Buttons/MainButton";

const iconStyle = {
  fontSize: "3rem",
  color: "var(--green)",
  padding: "7px",
};

const Form = () => {
  return (
    <div className="">
      <Heading>Contacto</Heading>
      <div className="col-12 d-flex">
        <div className="col-5 d-flex flex-column justify-content-center gap-4">
          <div className="text-center">
            <h3>Recibe más información.</h3>
            <h3>¡Contáctanos!</h3>
          </div>
          <div className="d-flex flex-column align-content-center gap-4 ps-5">
            <div className="d-flex gap-4 align-content-center">
              <MainButton size="small">
                <MdLocationOn style={iconStyle} />
              </MainButton>
              <h5 className="m-0 d-flex align-items-center">
                Mendoza, Argentina.
              </h5>
            </div>
            <div className="d-flex gap-4 align-content-center">
              <MainButton size="small">
                <MdPhone style={iconStyle} />
              </MainButton>
              <h5 className="m-0 d-flex align-items-center">
                +54 1 11 1111-1111
              </h5>
            </div>
            <div className="d-flex gap-4 align-content-center">
              <MainButton size="small">
                <IoMdMail style={iconStyle} />
              </MainButton>
              <h5 className="m-0 d-flex align-items-center">
                micorreo@correo.com.ar
              </h5>
            </div>
          </div>
        </div>
        <div className="col-7">
          <form className="d-flex flex-column gap-4">
            <div className="d-flex justify-content-between">
              <StyledInput type="text" placeholder="Nombre" className="col-5" />
              <StyledInput
                type="text"
                placeholder="Apellido"
                className="col-5"
              />
            </div>
            <div className="">
              <StyledInput
                type="mail"
                placeholder="Correo Electrónico"
                className="col-12"
              />
            </div>
            <div className="">
              <StyledInput
                type="mail"
                placeholder="Escribe aquí el asunto"
                className="col-12"
              />
            </div>
            <div className="">
              <StyledTextarea
                placeholder="Cuerpo del mensaje"
                className="col-12"
              />
            </div>
            <div className="m-auto">
              <MainButton type="secondary">Enviar mensaje</MainButton>
            </div>
          </form>
        </div>
      </div>
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
    width: 32vw;
    background-color: var(--green);
  }

  @media (max-width: 650px) {
    &::before {
      display: none;
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--lightgreen);
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  font-style: italic;
  &::placeholder {
    color: #fff;
  }
`;

const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  background-color: var(--lightgreen);
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  resize: none;
  min-height: 200px;
  font-style: italic;
  &::placeholder {
    color: #fff;
  }
`;

export default Form;

// Trabajado por Gonzalo Ramos
