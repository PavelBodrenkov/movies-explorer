import { Link } from "react-router-dom";
import { StyledError404 } from "./ErrorStyle";


const Error404 = () => {
    return(
        <StyledError404>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to={'/'}>Назад</Link>
        </StyledError404>
    )
}

export default Error404;