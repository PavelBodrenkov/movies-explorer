import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Context} from "../..";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ShowFilmForm from "../../forms/ShowFilmForm/ShowFilmForm";

const ShowFilm = observer(() => {

    const {showMovieStore} = useContext<any>(Context);
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            showMovieStore.getOneMovie(id)
        };
    }, [id]);

    return (
        <>
            <Header />
            <ShowFilmForm />
            <Footer />
        </>
    );
});

export default ShowFilm;
