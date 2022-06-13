import Container from "../../elements/Container"
import { StyledFooter } from "./FooterStyles"


const Footer = () => {
    return(
        <StyledFooter>
            <Container>
                <h3 className="title">Проект Павла Бодренкова</h3>
                <div className="content">
                    <p>© 2022</p>
                    <ul>
                        <li><a href="#" target='_blank'>Яндекс.Практикум</a></li>
                        <li><a href="#" target='_blank'>Github</a></li>
                        <li><a href="#" target='_blank'>Facebook</a></li>
                    </ul>
                </div>
            </Container>
        </StyledFooter>
    )
}

export default Footer