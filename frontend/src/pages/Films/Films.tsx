import { observer } from "mobx-react-lite";
import { useEffect, useState, useContext } from "react";
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
import { Context } from "../../";
import axios from "../../services/helpers/axios";
import { Button } from "antd";


const Films = observer(() => {
  //@ts-ignore
  const { authStore, moviesStore } = useContext(Context);

  const [films, setFilms] = useState<any>([]);
  const [offset, setOffset] = useState<number>(0);
  const [check, setCheck] = useState({ text: "", check: false });

  useEffect(() => {
    moviesStore.setIsLoading(true);
    getMovies(offset)
      .then((res) => {
        setFilms(res?.data?.movies);
        moviesStore.setCount(res?.data?.count);
        setOffset(12);
      })
      .catch((e) => {
        console.log(e);
        moviesStore.setIsLoading(false);
      })
      .finally(() => moviesStore.setIsLoading(false));
  }, []);

  const isMovieAdded = (movie: any) =>
    authStore?.user?.favourites?.includes(movie._id);

  const submitSaveMovie = (film: any) => {
    if (authStore?.user?.favourites?.includes(film._id)) {
      deleteFavourites(film._id).then((res) => {
        authStore.setUser(res.data);
      });
    } else {
      favourites(film._id).then((res) => {
        authStore.setUser(res.data);
      });
    }
  };

  const moreMovie = () => {
    getMovies(offset).then((res) => {
      setFilms((prev: any) => [...prev, ...res.data.movies]);
    });
    setOffset((prev) => prev + 12);
  };

  const sendSearch = () => {
    setOffset(0);
    if (check.text !== "") {
      serachMovies(check.text, check.check).then((res) => {
        setFilms(res.data);
      });
    } else {
      getMovies(offset).then((res) => {
        setFilms(res.data.movies);
        moviesStore.setCount(res.data.count);
        setOffset(12);
      });
    }
  };

  const searchMovies = ({ text, check }: any) => {
    setCheck({ text: text, check: check });
  };

  // const create = () => {
  //     axios.get('https://api.nomoreparties.co/beatfilm-movies')
  //     .then((res) => {
  //       console.log(res.data);
        
  //         res.data.map((film:any) => {
  //             createMovie({
  //                 country: film?.country || 'none',
  //                 director: film?.director || 'none',
  //                 duration: film?.duration || 0,
  //                 year: film?.year || 'none',
  //                 description: film?.description || 'none',
  //                 image: `https://api.nomoreparties.co${film?.image.url}` || 'none',
  //                 trailer: film?.trailerLink || 'none',
  //                 owner: authStore.user.id || 0,
  //                 movieId: film?.movieId || 0,
  //                 nameRU: film?.nameRU || 'none',
  //                 nameEN: film?.nameEN || 'none'
  //             })
  //         })
  //     })
  // }

  return (
    <>
      <Header />
      {/* <Button style={{marginTop:300}} onClick={create}>Save</Button> */}
      <SearchContainer searchMovies={searchMovies} sendSearch={sendSearch} />
      <ListFilms
        flag={"movies"}
        submitSaveMovie={submitSaveMovie}
        films={films}
        isMovieAdded={isMovieAdded}
        moreMovie={moreMovie}
      />
      <Footer />
    </>
  );
});

export default Films;
