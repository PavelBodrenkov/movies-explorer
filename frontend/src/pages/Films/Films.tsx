import {observer} from "mobx-react-lite";
import {useEffect, useState, useContext} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListFilms from "../../containers/ListFilms/ListFilms";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import {
    createMovie,
    deleteFavourites,
    favourites,
    getMovies,
    serachMovies,
} from "../../services/http/movies";
import {Context} from "../../";
import axios from "../../services/helpers/axios";
import {Button} from "antd";
import {checkProps, getMoviesProps, MovieProps} from "../../types/moviesTypes";
import { UserProps} from "../../types/userTypes";

const Films = observer(() => {

    const {authStore, moviesStore} = useContext<any>(Context);

    const [films, setFilms] = useState<MovieProps[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [check, setCheck] = useState<checkProps>({text: "", check: false});

    useEffect(() => {
        moviesStore.setIsLoading(true);
        getMovies(offset)
            .then((res: getMoviesProps) => {
                if (res) {
                    setFilms(res?.data?.movies);
                    moviesStore.setCount(res.data.count);
                    setOffset(12);
                }
            })
            .catch((e) => {
                console.log(e);
                moviesStore.setIsLoading(false);
            })
            .finally(() => moviesStore.setIsLoading(false));
    }, []);

    const submitSaveMovie = (film: MovieProps) => {
        if (authStore?.user?.favourites?.includes(film._id)) {
            deleteFavourites(film._id).then((res:UserProps) => {
                authStore.setUser(res.data);
            });
        } else {
            favourites(film._id).then((res:UserProps) => {
                authStore.setUser(res.data);
            });
        }
    };

    const moreMovie = () => {
        getMovies(offset).then((res:getMoviesProps) => {
            setFilms((prev: MovieProps[]) => [...prev, ...res.data.movies]);
        });
        setOffset((prev) => prev + 12);
    };

    const sendSearch = () => {
        setOffset(0);
        if (check.text !== "") {
            serachMovies(check.text, check.check).then((res:{data:MovieProps[]}) => {
                setFilms(res.data);
            });
        } else {
            getMovies(offset).then((res:getMoviesProps) => {
                setFilms(res.data.movies);
                moviesStore.setCount(res.data.count);
                setOffset(12);
            });
        }
    };

    const searchMovies = ({text, check}: checkProps) => {
        setCheck({text: text, check: check});
    };

    // const create = () => {
    //     axios.get('https://api.nomoreparties.co/beatfilm-movies', {
    //         headers:{
    //             authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //
    //         res.data.map((film:any) => {
    //             createMovie({
    //                 country: film?.country || 'none',
    //                 director: film?.director || 'none',
    //                 duration: film?.duration || 0,
    //                 year: film?.year || 'none',
    //                 description: film?.description || 'none',
    //                 image: `https://api.nomoreparties.co${film?.image.url}` || 'none',
    //                 trailer: film?.trailerLink || 'none',
    //                 owner: authStore.user._id || '',
    //                 movieId: film?.movieId || 0,
    //                 nameRU: film?.nameRU || 'none',
    //                 nameEN: film?.nameEN || 'none'
    //             })
    //         })
    //     })
    // }

    return (
        <>
            <Header/>
            {/*<Button style={{marginTop:300}} onClick={create}>Save</Button>*/}
            <SearchContainer searchMovies={searchMovies} sendSearch={sendSearch}/>
            <ListFilms
                flag={"movies"}
                submitSaveMovie={submitSaveMovie}
                films={films}
                moreMovie={moreMovie}
            />
            <Footer/>
        </>
    );
});

export default Films;
