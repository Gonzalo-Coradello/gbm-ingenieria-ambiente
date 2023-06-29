import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import MainButton from '../Buttons/MainButton'
import { services } from '../Services/Services'
import Heading from '../Heading/Heading'

export const ServiceView = () => {
  const params = useParams()
  const { icon, title, description } = services.find(s => s.id === +params.id)

  return (
    <StyledServices className='m-auto'>
      <div className='d-flex flex-column gap-5'>
        <StyledDivImg>
          <Filter />
          <StyledImg src='/images/services/excavacion.jpg' alt='Excavación' />
        </StyledDivImg>
        <HeadingContainer>
          <Heading line='right'>{title}</Heading>
        </HeadingContainer>
        <div>
        <img src={icon} alt={title} width={50} />
        <p>{description}</p>
        </div>
        
        <p className='text-center p-0'>
          Si requiere atención personalizada, costos, valoración de sus
          proyectos, favor de ponerse en contacto con nosotros.
        </p>
        <div className='mx-auto'>
          <MainButton>
            <Link to='/#contacto'>Contactá con nosotros</Link>
          </MainButton>
        </div>
      </div>
    </StyledServices>
  )
}

const StyledServices = styled.div`
  padding: 5.3rem 0;
`

const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  @media (min-width: 992px) {
    object-position: center -13.5rem;
  }
`

// const ServicesText = styled.p`
//   margin: 0;
//   padding: 0 10px;
//   border-left: 3px solid var(--green);
// `

const HeadingContainer = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  top: 200px;
`

const StyledDivImg = styled.div`
  height: 300px;
  position: relative;
`

const Filter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff5;
  backdrop-filter: blur(2px);
  @media (max-width: 700px) {
    background-color: #fff8;
  }
`
