import Container from "../../../elements/Container";
import { StyledStudent } from "./StudentStyles";
import myPhoto from '../../../assets/img/main/myPhoto.jpeg';


const Student = () => {
    return (
        <StyledStudent>
            <Container>
                <h3 className="title">Студент</h3>
                <div className="content">
                    <div className="about-me">
                        <h2>Павел</h2>
                        <p className="subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                            У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <div className="social">
                            <a href="#">Facebook</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                    <img className="photo" src={myPhoto}/>
                </div>
            </Container>
        </StyledStudent>
    );
};

export default Student;