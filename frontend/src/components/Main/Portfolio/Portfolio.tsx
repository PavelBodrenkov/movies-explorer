import Container from "../../../elements/Container"
import { StyledStudent } from "./PortfolioStyles"
import TextVector from '../../../assets/img/main/text__COLOR_font-main.svg';



const Portfolio = () => {
    return (
        <StyledStudent>
            <Container>
                <h3 className="title">Портфолио</h3>
                <ul className="lists">
                    <li>
                        <a href="#" target='_blank'>
                            <p>Статичный сайт</p>
                            <img src={TextVector} />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            <p>Адаптивный сайт</p>
                            <img src={TextVector} />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            <p>Одностраничное приложение</p>
                            <img src={TextVector} />
                        </a>
                    </li>
                </ul>
            </Container>
        </StyledStudent>
    )
}

export default Portfolio