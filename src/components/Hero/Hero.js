import styled from "styled-components"

const Hero = () => {
  return (
    <div>
      <img className="w-100" src="/images/hero-wide.png" alt="Portada" />
      <StyledDiv>
        <img src="/images/hero-rounded.png" alt="Ingeniería y ambiente" />
        <Card>
            <p>Nos enfocamos en los lineamientos que dicta la Ley 5961 de Mendoza.</p>
            <p className="font-light-italic">—Recursos naturales—Protección del medio ambiente—</p>
            <a href="https://www.mendoza.gov.ar/economia/wp-content/uploads/sites/44/2017/02/LEY_5.961.pdf">Leer más</a>
        </Card>
      </StyledDiv>
    </div>
  )
}

const Card = styled.div`
    background-color: var(--green);
    color: #FFF;
    display: grid;
    justify-content: center;
    padding: 2rem;
    max-height: 16rem;
    
    @media (min-width: 980px) {
        margin-left: -4rem;
    }


    & a {
        color: #FFF;
        text-decoration: underline;
        width: fit-content;
        margin-inline: auto;
        margin-top: 2.5rem;
    }

    & :nth-child(1) {
        font-size: 20px;
    }
`

const StyledDiv = styled.div`

    display: grid;
    gap: 2rem;
    justify-content: center;

    @media (min-width: 980px) {
        display: flex;
        align-items: center;
        margin-top: 4rem;
    }

    & > img {
        border-radius: 2.5rem;
    }
`

export default Hero
