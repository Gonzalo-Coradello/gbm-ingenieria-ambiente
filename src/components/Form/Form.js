import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { MainButton, Heading } from "../index";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { DotPulse } from "@uiball/loaders";
import { ToastContainer, toast } from "react-toastify";

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

export const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const [userNameCompleted, setUserNameCompleted] = useState(false);
  const [surnameCompleted, setSurnameCompleted] = useState(false);
  const [userEmailCompleted, setUserEmailCompleted] = useState(false);
  const [mailSubjectCompleted, setMailSubjectCompleted] = useState(false);
  const [mailBodyCompleted, setMailBodyCompleted] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const form = useRef();

  // SUBMIT FUNCTION
  const onSubmit = (data) => {
    setIsSending(true);
    emailjs
      .send("service_tmmrvqf", "template_6szii3d", data, "hngfXkj4dqbpXlBAg")
      .then(
        () => {
          reset();
          succeessToast();
          setIsSending(false);
          setCanSend(false);
          setUserNameCompleted((prevState) => !prevState);
          setSurnameCompleted((prevState) => !prevState);
          setUserEmailCompleted((prevState) => !prevState);
          setMailSubjectCompleted((prevState) => !prevState);
          setMailBodyCompleted((prevState) => !prevState);
        },
        (error) => {
          // ERROR OUT
          errorToast(error.text);
        }
      );
  };

  const handleColor = (e) => {
    let { id } = e.target;
    id = Number(id);
    if (e.target.value !== "") {
      switch (id) {
        case 1:
          setUserNameCompleted(true);
          break;
        case 2:
          setSurnameCompleted(true);
          break;
        case 3:
          setUserEmailCompleted(true);
          break;
        case 4:
          setMailSubjectCompleted(true);
          break;
        case 5:
          setMailBodyCompleted(true);
          break;
      }
    } else {
      switch (id) {
        case 1:
          setUserNameCompleted((prevState) => !prevState);
          break;
        case 2:
          setSurnameCompleted((prevState) => !prevState);
          break;
        case 3:
          setUserEmailCompleted((prevState) => !prevState);
          break;
        case 4:
          setMailSubjectCompleted((prevState) => !prevState);
          break;
        case 5:
          setMailBodyCompleted((prevState) => !prevState);
          break;
      }
    }
    let allCompleted =
      userNameCompleted &&
      surnameCompleted &&
      userEmailCompleted &&
      mailSubjectCompleted &&
      mailBodyCompleted;
    if (allCompleted) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  };

  return (
    <div id="contacto" className="bor-2y px-2">
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
            ref={form}
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex justify-content-between flex-column flex-sm-row gap-4 gap-sm-0">
              <StyledInput
                required
                id="1"
                type="text"
                placeholder="Nombre"
                className={`col-12 col-sm-5 ${
                  userNameCompleted ? "formCompleted" : "col-1"
                }`}
                {...register("name", {
                  onChange: (e) => {
                    handleColor(e);
                  },
                })}
              />
              <StyledInput
                required
                id="2"
                type="text"
                placeholder="Apellido"
                className={`col-12 col-sm-5 ${
                  surnameCompleted ? "formCompleted" : ""
                }`}
                {...register("surname", {
                  onChange: (e) => {
                    handleColor(e);
                  },
                })}
              />
            </div>
            <div>
              <StyledInput
                required
                id="3"
                type="email"
                placeholder="Correo Electrónico"
                className={`col-12 ${
                  userEmailCompleted ? "formCompleted" : ""
                }`}
                {...register("email", {
                  onChange: (e) => {
                    handleColor(e);
                  },
                })}
              />
            </div>
            <div>
              <StyledInput
                required
                id="4"
                type="mail"
                placeholder="Escribe aquí el asunto"
                className={`col-12 ${
                  mailSubjectCompleted ? "formCompleted" : ""
                }`}
                {...register("subject", {
                  onChange: (e) => {
                    handleColor(e);
                  },
                })}
              />
            </div>
            <div>
              <StyledTextarea
                required
                id="5"
                placeholder="Cuerpo del mensaje"
                className={`col-12 ${mailBodyCompleted ? "formCompleted" : ""}`}
                {...register("message", {
                  onChange: (e) => {
                    handleColor(e);
                  },
                })}
              />
            </div>
            <SubmitSection className={`m-auto ${isSending && "sendingBlock"}`}>
              <MainButton type="secondary" submit="submit" inactive={!canSend}>
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
