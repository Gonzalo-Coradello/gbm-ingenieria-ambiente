import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()

  const navbarLinks = [
    { ref: "/nosotros", slug: "Nosotros" },
    { ref: "/#servicios", slug: "Servicios" },
    { ref: "/#contacto", slug: "Contacto" },
  ];

  return (
    <header>
      {/* Menu mobile */}
      <nav className="d-sm-none position-fixed fixed-top-0 container-lg py-3 px-3 d-flex justify-content-between align-items-sm-center">
        <div onClick={() => navigate('/')} role='button' >
          <Logo />
        </div>
        <div>
          <div
            className={openMenu ? "hamburger active" : "hamburger"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="bar bg-green"></span>
            <span className="bar bg-yellow"></span>
            <span className="bar bg-gray"></span>
          </div>
          <div
            className={`position-fixed fixed-top-0 d-flex flex-column align-items-end ${
              openMenu ? "nav__menu active" : "nav__menu"
            }`}
          >
            <ul className="pt-2 px-3 text-end">
              {navbarLinks.map((link) => (
                <li key={link.ref}>
                  <a
                    href={link.ref}
                    className="clr-green"
                    onClick={() => setOpenMenu(false)}
                  >
                    {link.slug}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={openMenu ? "overlay overlay-visible" : "overlay"}
            onClick={() => {
              setOpenMenu(false);
            }}
          />
        </div>
      </nav>

      {/* Menu desktop */}
      <nav className="d-none d-sm-flex position-fixed fixed-top-0 w-100">
        <div className="container-lg py-3 px-3 d-flex justify-content-between align-items-sm-center">
        <div onClick={() => navigate('/')} role='button' >
          <Logo />
        </div>
          <div className="pt-2">
            <ul className="d-flex gap-4">
              {navbarLinks.map((link) => (
                <li key={link.ref}>
                  <a
                    href={link.ref}
                    className="clr-green"
                    onClick={() => setOpenMenu(false)}
                  >
                    {link.slug}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
