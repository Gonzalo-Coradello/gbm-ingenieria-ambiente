import styled from "styled-components"

const Service = ({ icon, title, variant, body = "" }) => {

    return (
        <Container>
            <img className="mx-auto" src={icon} alt={title} />
            <h3 className="clr-green d-inline-block">{title}</h3>
            {
                variant === "button" ?
                <Button className="font-regular bg-gray">Más información</Button> :
                <p>{body}</p>
            }
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    width: 320px;

    & h3 {
        font-size: 20px;
        margin-top: 1.2rem;
        margin-bottom: .8rem;
        text-align: center;
    }
`

const Button = styled.button`
    font-size: 14px;
    color: white;
    border: none;
    width: fit-content;
    margin-inline: auto;
    padding: .75em 3em;
    transition: all 300ms;

    &:hover {
        opacity: .5;
    }
`

export default Service