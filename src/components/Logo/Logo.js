import logo from "./assets/logo.png";

const Logo = ({ width = 148 }) => (
  <img
    width={width}
    src={logo}
    alt="GBM Ingeniería y Ambiente"
  />
);

export default Logo;
