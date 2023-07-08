import styled from "styled-components";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import MainButton from "../Buttons/MainButton";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { DotPulse } from "@uiball/loaders";
import React, { useState } from "react";
import Heading from "../Heading/Heading";

const iconStyle = {
  fontSize: "2.5rem",
  color: "var(--green)",
  padding: "7px",
};

const succeessToast = () => {
  toast.success("¡Correo electrónico enviado correctamente!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const errorToast = (errorMsg) => {
  toast.error(
    `Opps! Ocurrio un error al enviar el correo electrónico. Error: ${errorMsg}`,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();

  // SUBMIT FUNCTION
  const onSubmit = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        "service_4thn52g",
        "template_6szii3d",
        form.current,
        "hngfXkj4dqbpXlBAg"
      )
      .then(
        () => {
          // OK OUT
          reset();
          succeessToast();
          setIsSending(false);
        },
        (error) => {
          // ERROR OUT
          errorToast(error.text);
        }
      );
  };

  return (
    <div id="contacto">
      <Heading line="left">Contacto</Heading>
      {/* 2 SECTIONS CONTAINER (INFO & FORM) */}
      <div className="col-12 d-flex flex-wrap gap-4 gap-md-0 m-auto">
        {/* INFO */}
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center gap-4 gap-md-5">
          <div className="text-center">
            <h3>Recibe más información.</h3>
            <h3>¡Contáctanos!</h3>
          </div>
          <div className="d-flex flex-column align-content-center gap-4 gap-md-5 ps-lg-5">
            <div className="d-flex gap-2 gap-lg-4 align-content-center">
              <MainButton size="small">
                <MdLocationOn style={iconStyle} />
              </MainButton>
              <ContactInfo className="m-0 d-flex align-items-center">
                Mendoza, Argentina.
              </ContactInfo>
            </div>
            <div className="d-flex gap-2 gap-lg-4 align-content-center">
              <MainButton size="small">
                <MdPhone style={iconStyle} />
              </MainButton>
              <ContactInfo className="m-0 d-flex align-items-center">
                +54 9 2604686063 / 2604560911
              </ContactInfo>
            </div>
            <div className="d-flex gap-2 gap-lg-4 align-content-center">
              <MainButton size="small">
                <IoMdMail style={iconStyle} />
              </MainButton>
              <ContactInfo className="m-0 d-flex align-items-center">
                gbmconsultora.sr@gmail.com
              </ContactInfo>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="col-11 col-md-6 col-lg-7 m-auto">
          <form
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
          >
            <div className="d-flex justify-content-between flex-column flex-sm-row gap-4 gap-sm-0">
              <StyledInput
                type="text"
                placeholder="Nombre"
                className="col-12 col-sm-5"
                {...register("name")}
                required
              />
              <StyledInput
                type="text"
                placeholder="Apellido"
                className="col-12 col-sm-5"
                {...register("surname")}
                required
              />
            </div>
            <div>
              <StyledInput
                type="email"
                placeholder="Correo Electrónico"
                className="col-12"
                {...register("email")}
                required
              />
            </div>
            <div>
              <StyledInput
                type="mail"
                placeholder="Escribe aquí el asunto"
                className="col-12"
                {...register("subject")}
                required
              />
            </div>
            <div>
              <StyledTextarea
                placeholder="Cuerpo del mensaje"
                className="col-12"
                {...register("message")}
                required
              />
            </div>
            <SubmitSection className={`m-auto ${isSending && "sendingBlock"}`}>
              <MainButton type="secondary" submit="submit">
                {isSending ? (
                  <DotPulse size={40} speed={1.3} color="#FBBC04" />
                ) : (
                  "Enviar mensaje"
                )}
              </MainButton>
            </SubmitSection>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--lightgreen);
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  font-style: italic;
  transition: all 0.3s;
  cursor: pointer;
  &:focus {
    opacity: 0.9;
  }
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
  cursor: pointer;
  &::placeholder {
    color: #fff;
  }
`;

const ContactInfo = styled.h5`
  @media (max-width: 720px) {
    font-size: 1.1rem;
  }
`;

const SubmitSection = styled.div`
  button {
    height: 45px;
    width: 170px;
    transition: all 0.3s;
    div {
      margin: auto;
    }
  }
`;

export default Form;

// Trabajado por Gonzalo Ramos

/*
 

 */
