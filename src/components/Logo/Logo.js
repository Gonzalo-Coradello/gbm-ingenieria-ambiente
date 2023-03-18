import logo from "./assets/logo.png";

const Logo = ({ width = 148 }) => (
  <img
    width={width}
    src={logo}
    alt="GBM Ingeniería y Ambiente"
    className="bor-1b"
  />
);

// Puse el borde del logo para ver su espacio. Att Gonza Ramos

export default Logo;
