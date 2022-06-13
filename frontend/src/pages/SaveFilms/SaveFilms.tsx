import {observer} from "mobx-react-lite"
import {useEffect, useContext} from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ListFilms from "../../containers/ListFilms/ListFilms"
import SearchContainer from "../../containers/SearchContainer/SearchContainer"
import {Context} from '../../';

const SaveFilms = observer(() => {

    const {moviesStore} = useContext<any>(Context);

    //Получить сохраненные фильмы
    useEffect(() => {
        moviesStore.getSaveMovies()
    }, [])

    return (
        <>
            <Header/>
            <SearchContainer
            />
            <ListFilms
                flag={'save-movies'}
            />
            <Footer/>
        </>
    )
})

export default SaveFilms