import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Context} from "../..";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ShowFilmForm from "../../forms/ShowFilmForm/ShowFilmForm";
import {
    addDisLike,
    addLike,
    getMovie,
    removeDisLike,
    removeLike,
} from "../../services/http/movies";
import {createComments} from "../../services/http/comments";
import {MovieProps} from "../../types/moviesTypes";

const ShowFilm = observer(() => {

    const {authStore} = useContext<any>(Context);
    const {id} = useParams<{ id: string }>();
    const [film, setFilm] = useState<MovieProps>({
        comments: [],
        country: '',
        description: '',
        director: '',
        disLikes: [],
        duration: 0,
        image: '',
        likes: [],
        movieId: 0,
        nameRU: '',
        nameEN: '',
        owner: '',
        trailer: '',
        year: '',
        __v: 0,
        _id: '',
    });
    const [play, setPlay] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(0)
    const [commentValue, setCommentValue] = useState<string>('')

    useEffect(() => {
        if (id) {
            getMovie(id).then((movie: { data: MovieProps }) => {
                setFilm(movie.data);
            });
        }
    }, [id]);

    //Поставить - снять лайк
    const handleAddLike = (id: string) => {
        if (film.likes.includes(authStore.user._id)) {
            removeLike(id).then((res: { data: MovieProps }) => {
                setFilm(res.data);
            });
        } else {
            if (film.disLikes.includes(authStore.user._id)) {
                removeDisLike(id).then((res1: { data: MovieProps }) => {
                    addLike(res1.data._id).then((res: { data: MovieProps }) => {
                        setFilm(res.data);
                    });
                });
            }
            addLike(id).then((res: { data: MovieProps }) => {
                setFilm(res.data);
            });
        }
    };

    //Поставить -снять дизлайк
    const handleDislike = (id: string) => {
        if (film?.disLikes?.includes(authStore.user._id)) {
            removeDisLike(id).then((res: { data: MovieProps }) => {
                setFilm(res.data);
            });
        } else {
            if (film?.likes?.includes(authStore.user._id)) {
                removeLike(id).then((res: { data: MovieProps }) => {
                    addDisLike(res.data._id).then((res: { data: MovieProps }) => {
                        setFilm(res.data);
                    });
                });
            }
            addDisLike(id).then((res: { data: MovieProps }) => {
                setFilm(res.data);
            });
        }
    };

    const handlePlaying = () => {
        setPlay(!play)
    }

    const handleVolume = (value: number) => {
        if (isNaN(value)) {
            return;
        }
        setVolume(value)
    }

    const handleValueComment = (value: string) => {
        setCommentValue(value)
    }

    const saveComment = () => {
        createComments(commentValue, film?._id)
            .then((res) => {
                if (id) {
                    getMovie(id).then((movie: { data: MovieProps }) => {
                        setFilm(movie.data);
                    });
                }
            })
    }

    return (
        <>
            <Header/>
            <ShowFilmForm
                film={film}
                handleAddLike={handleAddLike}
                handleDislike={handleDislike}
                handlePlaying={handlePlaying}
                handleVolume={handleVolume}
                volume={volume}
                play={play}
                handleValueComment={handleValueComment}
                saveComment={saveComment}
            />
            <Footer/>
        </>
    );
});

export default ShowFilm;
