import { FC } from "react"
import { StyledTitleFilm } from "./TitleFilmStyle"
import {Typography} from 'antd'

interface TitleFilmProps {
    text:any
}

const {Title, Text} = Typography

function getTimeFromMins(mins: number) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
};

const TitleFilm:FC<TitleFilmProps> = ({text}) => {

    return(
        <StyledTitleFilm>
            <Title level={4} style={{margin:0}}>{`${text.nameRU} (${text.nameEN}) ${text.year}`}</Title>
            <Text>Директор: {text.director}</Text>
            <Text>Продолжительность: <Text strong>{getTimeFromMins(text.duration)}</Text></Text>
        </StyledTitleFilm>
    )
}

export default TitleFilm