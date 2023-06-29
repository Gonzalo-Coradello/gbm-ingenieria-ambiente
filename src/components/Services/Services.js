import styled from 'styled-components'
import Service from '../Service/Service'
import Heading from '../Heading/Heading'

export const services = [
  {
    id: 1,
    icon: '/images/icons/1.png',
    title: 'Asesoramiento de proyecto',
  },
  {
    id: 2,
    icon: '/images/icons/2.png',
    title: 'Proyectos de loteo y urbanización',
  },
  {
    id: 3,
    icon: '/images/icons/3.png',
    title: 'Estudio de impacto ambiental',
  },
  {
    id: 4,
    icon: '/images/icons/4.png',
    title: 'Estudio hidráulico',
  },
  {
    id: 5,
    icon: '/images/icons/5.png',
    title: 'Proyecto de red de agua y cloaca',
  },
  {
    id: 6,
    icon: '/images/icons/6.png',
    title: 'Proyecto de red eléctrica',
  },
  {
    id: 7,
    icon: '/images/icons/7.png',
    title: 'Proyecto de red de gas natural',
  },
  {
    id: 8,
    icon: '/images/icons/8.png',
    title: 'Dirección y conducción de obra',
  },
]

const Services = () => {
  return (
    <section id='servicios'>
      <Heading line='right'>Servicios</Heading>
      <ServicesIntro>
        <p>Nuestra misión es acompañar al cliente en el proceso, nucleando todos los procesos técnicos y administrativos en un solo actor, y de esta forma, generar que los desarrollos inmobiliarios sean efectivos en su materialización y ágiles en el tiempo.</p>
      </ServicesIntro>
      <Subtitle>¿En qué te podemos ayudar?</Subtitle>
      <ServicesContainer>
        {services.map(service => (
          <Service
            key={service.id}
            id={service.id}
            icon={service.icon}
            title={service.title}
            variant='button'
          />
        ))}
      </ServicesContainer>
    </section>
  )
}

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  grid-gap: 4rem;
  justify-content: center;
`

const ServicesIntro = styled.div`
  font-size: 20px;
  font-family: MullerLightItalic;
  border-left: 3px solid var(--green);
  padding-left: 1rem;
  max-width: 900px;
  margin-inline: auto;
  margin-top: 4rem;
`

const Subtitle = styled.h3`
  color: var(--green);
  text-align: center;
  font-size: 24px;
  font-family: MullerBold;
  margin-block: 4rem;
`

export default Services
