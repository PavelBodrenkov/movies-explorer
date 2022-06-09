import {observer} from "mobx-react-lite"
import {useEffect, useState, useContext} from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ListFilms from "../../containers/ListFilms/ListFilms"
import SearchContainer from "../../containers/SearchContainer/SearchContainer"
import {deleteFavourites, getSaveFavourites, serachSaveMovies} from "../../services/http/movies"
import {Context} from '../../';
import {checkProps, getSaveMoviesProps, MovieProps} from "../../types/moviesTypes";
import {UserProps} from "../../types/userTypes";


const SaveFilms = observer(() => {

    const {authStore, moviesStore} = useContext<any>(Context);

    const [saveFilms, setSaveFilms] = useState<MovieProps[]>([])
    const [offset, setOffset] = useState<number>(0)
    const [check, setCheck] = useState<checkProps>({text: '', check: false})

    const isMovieAdded = (movie: any) => saveFilms.some((item: any) => item.movieId === movie.id);

    //Получить сохраненные фильмы
    useEffect(() => {
        moviesStore.setIsLoading(true)
        getSaveFavourites(offset)
            .then((item: getSaveMoviesProps) => {
                setSaveFilms(item.data.movie)
                moviesStore.setCount(item.data.count)
                setOffset(12)
            })
            .catch((e) => {
                console.log(e)
                moviesStore.setIsLoading(false)
            })
            .finally(() => moviesStore.setIsLoading(false))
    }, [])

    //Удалить из сохраненных
    const submitSaveMovie = (film: MovieProps) => {
        deleteFavourites(film._id)
            .then((res: UserProps) => {
                authStore.setUser(res.data)
                let tmp = saveFilms.filter((mov: MovieProps) => mov._id !== film._id)
                setSaveFilms(tmp)
            })
    }

    //Пагинация
    const moreMovie = () => {
        getSaveFavourites(offset)
            .then((res:getSaveMoviesProps) => {
                setSaveFilms((prev: MovieProps[]) => [...prev, ...res.data.movie])
            })
        setOffset((prev) => prev + 12)
    }

    //Поиск фильмов
    const sendSearch = () => {
        setOffset(0)
        if (check.text !== '') {
            serachSaveMovies(check.text, check.check)
                .then((res:{data:MovieProps[]}) => {
                    setSaveFilms(res.data)
                })
        } else {
            getSaveFavourites(offset)
                .then((item:getSaveMoviesProps) => {
                    setSaveFilms(item.data.movie)
                    moviesStore.setCount(item.data.count)
                    setOffset(12)
                })
                .catch((e) => {
                    console.log(e)
                    moviesStore.setIsLoading(false)
                })
                .finally(() => moviesStore.setIsLoading(false))
        }
    }

    const searchMovies = ({text, check}: checkProps) => {
        setCheck({text: text, check: check})
    }

    return (
        <>
            <Header/>
            <SearchContainer
                searchMovies={searchMovies}
                sendSearch={sendSearch}
            />
            <ListFilms
                flag={'save-movies'}
                films={saveFilms}
                isMovieAdded={isMovieAdded}
                submitSaveMovie={submitSaveMovie}
                moreMovie={moreMovie}
            />
            <Footer/>
        </>
    )
})

export default SaveFilms