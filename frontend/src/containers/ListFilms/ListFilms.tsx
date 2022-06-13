import Container from "../../elements/Container"
import { StyledSearchContainer } from "./ListFilmsStyles"
import CardFilm from "../CardFilm/CardFilm"
import { FC, useContext } from "react"
import { observer } from "mobx-react-lite"
import Preloader from "../../components/UI/Preloader/Preloader"
import { Context } from "../.."
import MoreMovies from "../../components/UI/MoreMovies/MoreMovies"
import {MovieProps} from "../../types/moviesTypes";

interface ListFilmsProps {
    flag:string
}

const ListFilms: FC<ListFilmsProps> = observer(({flag}) => {

    const { moviesStore } = useContext<any>(Context);

    return (
        <StyledSearchContainer>
            <Container>
                <div className="wrapper">
                    {
                        moviesStore.isLoading
                            ?
                            <Preloader />
                            :
                            moviesStore?.films !== undefined && moviesStore?.films?.length !== 0 ?
                                moviesStore?.films?.map((card: MovieProps) => {
                                    return (
                                        <CardFilm
                                            key={card._id}
                                            card={card}
                                            flag={flag}
                                        />
                                    )
                                })
                                :
                                <h2>Нет сохраненных фильмов</h2>
                    }
                </div>
                {moviesStore?.films?.length >= 12 && moviesStore?.films?.length < moviesStore?.count &&
                    <div style={{ marginTop: '50px' }}>
                        <MoreMovies flag={flag} />
                    </div>
                }

            </Container>
        </StyledSearchContainer>
    )
})

export default ListFilms