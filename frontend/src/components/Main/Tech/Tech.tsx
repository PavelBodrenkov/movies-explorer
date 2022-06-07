import Container from "../../../elements/Container";
import { StyledTech } from "./TechStyles";

const Tech = () => {
    return (
        <StyledTech>
            <Container>
                <h3 className="title">Технологии</h3>
                <div className="content">
                    <h2>7 технологий</h2>
                    <p>
                        На курсе веб-разработки мы освоили технологии, 
                        которые применили в дипломном проекте.
                    </p>
                </div>
                <ul className="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Express.js</li>
                    <li>mongoDB</li>
                </ul>
            </Container>
        </StyledTech>
    );
};

export default Tech;