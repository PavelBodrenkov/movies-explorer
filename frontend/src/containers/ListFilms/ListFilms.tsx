import Container from "../../elements/Container"
import { StyledSearchContainer } from "./ListFilmsStyles"
import CardFilm from "../CardFilm/CardFilm"
import { FC, useContext } from "react"
import { observer } from "mobx-react-lite"
import Preloader from "../../components/UI/Preloader/Preloader"
import { Context } from "../.."
import MoreMovies from "../../components/UI/MoreMovies/MoreMovies"

const ListFilms: FC<any> = observer(({
    submitSaveMovie,
    films,
    isMovieAdded,
    flag,
    moreMovie
}) => {

    //@ts-ignore
    const { moviesStore } = useContext(Context);

    return (
        <StyledSearchContainer>
            <Container>
                <div className="wrapper">
                    {
                        moviesStore.isLoading
                            ?
                            <Preloader />
                            :
                            films !== undefined && films?.length !== 0 ?
                                films?.map((card: any) => {
                                    return (
                                        <CardFilm
                                            key={card._id}
                                            card={card}
                                            submitSaveMovie={submitSaveMovie}
                                            isMovieAdded={isMovieAdded}
                                            flag={flag}
                                        />
                                    )
                                })
                                :
                                <h2>Нет сохраненных фильмов</h2>
                    }
                </div>
                {films.length >= 12 && films.length < moviesStore.count &&
                    <div style={{ marginTop: '50px' }}>
                        <MoreMovies more={moreMovie} />
                    </div>
                }

            </Container>
        </StyledSearchContainer>
    )
})

export default ListFilms