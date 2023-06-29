import styled from 'styled-components'
import Service from '../Service/Service'
import Heading from '../Heading/Heading'

export const services = [
  {
    id: 1,
    icon: '/images/icons/1.png',
    title: 'Asesoramiento de proyecto',
    description: 'Asesoramiento para la elaboración de un proyecto, tomando en cuenta las instancias profesionales específicas, para seguir la cronología de estudios e inversiones que conlleva, optimizando los procesos y facilitando al cliente la toma de desiciones. Así mismo teniendo a disposición de un equipo de profesionales necesarios para la elaboración y ejecución del proyecto de loteo y urbanización. '
  },
  {
    id: 2,
    icon: '/images/icons/2.png',
    title: 'Proyectos de loteo y urbanización',
    description: `Proceso de división de suelo, contemplando sus redes de servicios, infraestructura y vías públicas a las que el mismo esté definido. Dicho proyecto contiene su representación cartográfica para su mejor comprensión. 
    Se realiza el estudio teniendo en cuenta las normativas vigentes y consideraciones en las diferentes reparticiones públicas y entidades que intervienen en el proceso.`
  },
  {
    id: 3,
    icon: '/images/icons/3.png',
    title: 'Estudio de impacto ambiental',
    description: 'Tiene como finalidad la determinación de los principales impactos ambientales que la ejecución del proyecto genere en el ambiente, así como las medidas preventivas y correctivas para la mitigación de aquellos de carácter negativo. '
  },
  {
    id: 4,
    icon: '/images/icons/4.png',
    title: 'Estudio hidráulico',
    description: 'Realizamos el estudio hidráulico para evaluar y diseñar la red de riego y drenaje correspondiente a un proyecto de loteo y urbanización de un terreno. Se analiza la posible inundabilidad del terreno, como también el correcto escurrimiento de las aguas pluviales de este sector y áreas de influencia, sin producir daños a terceros.'
  },
  {
    id: 5,
    icon: '/images/icons/5.png',
    title: 'Proyecto de red de agua y cloaca',
    description: 'Desarrollamos el análisis técnico y dimensionamientos de la extensión de la red de agua potable y cloaca para un loteo. Para ello, elaboramos los estudios demográficos , planos de la localización y altimetría de la red de agua y cloaca, todo esto para realizar los cálculos y ofrecer soluciones a corto y largo plazo. '
  },
  {
    id: 6,
    icon: '/images/icons/6.png',
    title: 'Proyecto de red eléctrica',
    description: 'Hacemos un documento técnico dónde definimos las características que debe tener una instalación de red eléctrica para un loteo.'
  },
  {
    id: 7,
    icon: '/images/icons/7.png',
    title: 'Proyecto de red de gas natural',
    description: 'Desarrollo de la red de gas natural para un loteo por medio de un sistema de suministro de gases y abastecimiento constante en diversos puntos de sus instalaciones, en un alto volumen y buenas condiciones de presión.'
  },
  {
    id: 8,
    icon: '/images/icons/8.png',
    title: 'Dirección y conducción de obra',
    description: 'Ejecutamos los trabajos de obra a realizar, según las disposiciones constructivas y la definición de los criterios de calidad técnica y estética, así también nos damos a la tarea de evaluar y controlar los criterios de calidad del proceso constructivo, surgidos de la documentación técnica. '
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
