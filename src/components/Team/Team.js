import styled from "styled-components"

const Team = () => {
  return (
    <div>
      <Heading>Nuestro equipo</Heading>
      <Flex>
        <div>
          <img src="/images/team/gabriel.png" alt="Foto de Gabriel" />
          <h4>Gabriel Battocchia</h4>
          <p className="font-light-italic">Ingeniero civil</p>
        </div>
        <div>
          <img src="/images/team/gonzalo.png" alt="Foto de Gonzalo" />
          <h4>Gonzalo Martínez</h4>
          <p className="font-light-italic">Lic. en Gestión ambiental</p>
        </div>
      </Flex>
    </div>
  )
}

const Heading = styled.h2`
  font-size: 36px;
  color: var(--green);
  text-align: center;
  margin-bottom: 2.8rem;
`;

const Flex = styled.div`
  max-width: 800px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  padding-inline: 2.5rem;
  text-align: center;

  & h4 {
    font-size: 20px;
    margin-bottom: 0;
  }

  & p {
    font-size: 15px;
  }
  

  @media (min-width: 500px) {
    flex-direction: row;

  }

  & img {
    border-radius: 100%;
    width: 100%;
    max-width: 200px;
    margin-bottom: 1rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: top center;
  }
`

export default Team
