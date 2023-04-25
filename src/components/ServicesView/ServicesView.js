import React from "react";
import styled from "styled-components";
import Service from "../Service/Service";

const services = [
  {
    title: "ASESORAMIENTO DE PROYECTO",
    description:
      "En instancias iniciales para la elaboración de un proyecto de loteo y urbanización intervienen una serie de conceptos, entidades y profesionales específicos que determinan la forma del proyecto y la cronología de estudios e inversiones que conllevará. A través del asesoramiento de proyecto, se optimizarán los procesos, consolidando todas las etapas según la cronología de elaboración de estudios y diversas presentaciones en entidades y reparticiones públicas, a los fines de facilitar al cliente la toma de decisiones, al igual que la disminución del costo a través de la optimización de inversiones, así como también la disposición del equipo de profesionales necesarios para la elaboración y ejecución del proyecto de loteo y urbanización.",
    icon: "",
  },
  {
    title: "PROYECTO DE LOTEO Y URBANIZACION",
    description:
      "El proyecto de loteo y fraccionamiento de un terreno es el proceso de división de suelo, cualquiera sea el número de fracciones resultantes, contemplando en el proyecto la apertura de nuevas vías públicas y su urbanización, la instalación de redes de servicio e infraestructura civil. Su abordaje es a través de la elaboración de un proyecto que contiene elementos cartográficos con la representación gráfica de la urbanización, identificando todos los elementos que la componen para facilitar su comprensión, tales como: afectaciones, cesiones públicas para parques, equipamientos y vías locales, áreas útiles y cuadro de áreas. Todo esto se realiza teniendo en cuenta las normativas vigentes y consideraciones en las diferentes reparticiones públicas y entidades que intervienen en el proceso.",
    icon: "",
  },
  {
    title: "ESTUDIO DE IMPACTO AMBIENTAL",
    description:
      "El Estudio de Impacto Ambiental, según los términos de referencia expresados en el Art. 11° del Decreto N° 2.109/94, reglamentario de la Ley N° 5.961 y los correspondientes al Art. 21 de la Ord. N° 6852/02 de la Municipalidad de San Rafael, tiene como finalidad la determinación de los principales impactos ambientales que la ejecución del proyecto generará en el ambiente, así como también las medidas preventivas y correctivas para la mitigación de aquellos de carácter negativo.",
    icon: "",
  },
  {
    title: "ESTUDIO HIDRAULICO",
    description:
      "El estudio hidráulico se realiza para la evaluación y resolución de la red de riego y drenaje correspondiente a un proyecto de loteo y urbanización de un terreno. Se pretende con el mismo analizar la posible inundabilidad del terreno de emplazamiento, de manera de proyectar las obras de conducción y regulación adecuadas, para permitir el correcto escurrimiento de las aguas pluviales de este sector y áreas de influencia, sin producir daños a terceros. Se realiza según lo establecido por la Resolución N°513 de la Dirección General de Irrigación de la Provincia de Mendoza.",
    icon: "",
  },
  {
    title: "PROYECTO DE RED DE AGUA Y CLOACA",
    description:
      "El proyecto desarrolla el análisis técnico y el dimensionamiento de la extensión de la red de agua potable y cloaca para un loteo, ubicado en la Provincia de Mendoza. Para ello, se elaborarán los planos de la locación y altimetría, de la red de agua y cloaca y estudios demográficos, para poder realizar los cálculos para dar soluciones a corto y largo plazo. Todo esto, se realizará teniendo en cuenta las normas vigentes y consideraciones de AySAM.",
    icon: "",
  },
  {
    title: "PROYECTO DE RED ELECTRICA",
    description:
      "El Proyecto eléctrico elabora un documento técnico en el que se definen las características que debe tener una instalación de red eléctrica para un loteo, siendo es el conjunto de cálculos, planos, especificaciones, memorias y cuantificaciones de los diversos elementos que intervienen en los circuitos de distribución de energía eléctrica para transportar la energía a tensiones nominales menores o iguales a 1000 V. Este tipo de redes es el utilizado para llevar la energía eléctrica desde los transformadores de distribución tipo poste hasta las acometidas de los usuarios finales. El fin último es que la electricidad llegue de forma segura a cualquier tipo de inmueble. Todo esto se realiza teniendo en cuenta las normas vigentes y consideraciones de EDEMSA, la entidad prestada de energía en la Provincia de Mendoza.",
    icon: "",
  },
  {
    title: "PROYECTO DE RED DE GAS NATURAL",
    description:
      "El proyecto de la red de gas natural para un loteo define un sistema de suministro de gases diseñados para usuarios que necesitan un abastecimiento constante en diversos puntos de sus instalaciones, en un alto volumen y buenas condiciones de presión. Por tanto, podemos resumir como proyecto de una instalación de una red gas natural al conjunto de instalaciones y equipos que permite distribuir esta energía en óptimas condiciones a sus puntos de consumo y convertir en gas domiciliario. Todo esto se realiza teniendo en cuenta las normas vigentes y consideraciones de ECOGAS, la entidad prestada de energía en la Provincia de Mendoza.",
    icon: "",
  },
  {
    title: "DIRECCIÓN Y CONDUCCIÓN DE OBRA",
    description:
      "La dirección técnica y conducción de obra para un loteo consiste en controlar la ejecución de los trabajos de la obra, según las disposiciones constructivas y la definición de los criterios de calidad técnica y estética como así también evaluar y controlar los criterios de calidad del proceso constructivo, surgidos de la documentación técnica.",
    icon: "",
  },
];

export const ServicesView = () => {
  return (
    <StyledServices className="m-auto">
      <div className="d-flex flex-column gap-5">
        <StyledDivImg>
          <Filter />
          <StyledImg src="./images/services/excavacion.jpg" alt="Excavación" />
        </StyledDivImg>
        <div className="col-lg-8 m-auto">
          <ServicesText>
            Nuestra misión es acompañar al cliente en el proceso, nucleando
            todos los procesos técnicos y administrativos en un solo actor, y de
            esta forma, generar que los desarrollos inmobiliarios sean efectivos
            en su materialización y ágiles en el tiempo.
          </ServicesText>
        </div>
        <div className="d-flex col-lg-12 m-auto flex-wrap justify-content-evenly gap-5">
          {services.map((ser) => (
            <Service key={ser.title} title={ser.title} body={ser.description} />
          ))}
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  padding-top: 5.3rem;
`;

const StyledImg = styled.img`
  width: 100%;
  object-position: center -13.5rem;
  height: 300px;
`;

const ServicesText = styled.p`
  margin: 0;
  padding: 0 10px;
  border-left: 3px solid var(--green);
`;

const StyledDivImg = styled.div`
  height: 300px;
  position: relative;
`;

const Filter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff5;

  @media (max-width: 700px) {
    background-color: #fff8;
    backdrop-filter: blur(5px);
  }
`;
