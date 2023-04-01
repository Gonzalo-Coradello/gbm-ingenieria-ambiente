import './Navbar.css'
import { useState } from 'react'
import Logo from '../../components/Logo/Logo'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

  const navbarLinks = [
        {ref: "#about", slug: "Quiénes somos"},
        {ref: "#servicios", slug: "Servicios"},
        {ref: "#contacto", slug: "Contacto"}
    ]
    
  return (
    <header>
      <nav className='container-lg py-3 px-3 d-flex justify-content-between align-items-sm-center'>
        <Logo />

        {/* Menu mobile */}
        <div className='d-sm-none'>
            <div className={openMenu ? 'hamburger active' : 'hamburger'} onClick={() => setOpenMenu(!openMenu)}>
                <span className='bar bg-green'></span>
                <span className='bar bg-yellow'></span>
                <span className='bar bg-gray'></span>
            </div>
            <div className={`position-fixed fixed-top-0 d-flex flex-column align-items-end ${openMenu ? 'nav__menu active' : 'nav__menu'}`}>
                <ul className='pt-2 px-3 text-end'>
                    {navbarLinks.map(link => (
                        <li key={link.ref}>
                            <a href={link.ref} className='clr-green' onClick={() => setOpenMenu(false)}>{link.slug}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={openMenu ? 'overlay overlay-visible' : 'overlay'} onClick={() => {setOpenMenu(false)}}/>
        </div>

        {/* Menu desktop */}
        <div className="d-none d-sm-flex pt-2">
            <ul className='d-flex gap-4'>
                {navbarLinks.map(link => (
                    <li key={link.ref}>
                        <a href={link.ref} className='clr-green' onClick={() => setOpenMenu(false)}>{link.slug}</a>
                    </li>
                ))}
            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar