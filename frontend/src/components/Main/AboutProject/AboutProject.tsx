import Container from "../../../elements/Container";
import { StyledAboutProject } from "./AboutProjectStyles";

const AboutProject = () => {
    return (
       <StyledAboutProject id="project">
           <Container>
                <h3 className="title">О проекте</h3>
                <div className="content">
                    <div className="block">
                        <h3>Дипломный проект включал 5 этапов</h3>
                        <p>Составление плана, работу над бэкендом, вёрстку, 
                            добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="block">
                        <h3>На выполнение диплома ушло 5 недель</h3>
                        <p>У каждого этапа был мягкий и жёсткий дедлайн, 
                            которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="time-work">
                    <div className="backend c1">
                        <div>
                            1 неделя
                        </div>
                        <p className="c2">Back-end</p>
                    </div>
                    <div className="frontend c1">
                        <div>
                            4 недели
                        </div>
                        <p className="c2">Front-end</p>
                    </div>
                </div>
           </Container>
       </StyledAboutProject>
    );
};

export default AboutProject;