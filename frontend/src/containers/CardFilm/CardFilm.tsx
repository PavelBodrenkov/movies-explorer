import {Card, Tooltip} from "antd"
import {FC, useContext} from "react"
import {Styledcard} from "./CardFilmStyle"
import AddLike from '../../assets/img/movies/card/addLike.svg'
import NonLike from '../../assets/img/movies/card/noneLike.svg'
import deleteCard from '../../assets/img/movies/card/deleteCard.svg'
import {Link} from "react-router-dom"
import {SHOW_FILM} from "../../utils/const"
import {observer} from "mobx-react-lite"
import {Context} from "../.."
import {MovieProps} from "../../types/moviesTypes";

interface CardFilmProps {
    card: MovieProps,
    flag: string
}

const CardFilm: FC<CardFilmProps> = observer(({
                                                  card,
                                                  flag
                                              }) => {

    const {authStore, moviesStore} = useContext<any>(Context);

    function getTimeFromMins(mins: number) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    return (
        <Styledcard>
            <Card
                className='card'
                cover={
                    <Link to={SHOW_FILM + `/${card._id}`}>
                        <img alt="example" src={card.image}/>
                    </Link>
                }
                bordered={false}
            >
                <div className="card-body">
                    <p>{card.nameRU}</p>
                    <div onClick={() => moviesStore.submitSaveMovie(card, flag)}>
                        <Tooltip
                            title={flag === 'movies'
                                ?
                                authStore?.user?.favourites?.includes(card._id) ? 'Удалить из сохраненных'
                                    : 'Сохранить' : 'Удалить'}>
                            <img
                                src={flag === 'movies'
                                    ?
                                    authStore?.user?.favourites.includes(card._id) ? AddLike
                                        : NonLike : deleteCard}/>
                        </Tooltip>
                    </div>
                </div>
                <span>{getTimeFromMins(card.duration)}</span>
            </Card>
        </Styledcard>
    )
})

export default CardFilm