import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../..";
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
import {log} from "util";

const ShowFilm = observer(() => {
  //@ts-ignore
  const { authStore } = useContext(Context);
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<any>({});
  const [play, setPlay] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0)
  const [commentValue, setCommentValue] = useState<string>('')

  useEffect(() => {
    if (id) {
      getMovie(id).then((movie) => {
        setFilm(movie.data);
      });
    }
  }, [id]);

  //Поставить - снять лайк
  const handleAddLike = (id: string) => {
    if (film.likes.includes(authStore.user._id)) {
      removeLike(id).then((res) => {
        setFilm(res.data);
      });
    } else {
      if (film.disLikes.includes(authStore.user._id)) {
        removeDisLike(id).then((res) => {
          addLike(res.data._id).then((res) => {
            setFilm(res.data);
          });
        });
      }
      addLike(id).then((res) => {
        setFilm(res.data);
      });
    }
  };

  //Поставить -снять дизлайк
  const handleDislike = (id: string) => {
    if (film?.disLikes?.includes(authStore.user._id)) {
      removeDisLike(id).then((res) => {
        setFilm(res.data);
      });
    } else {
      if (film.likes.includes(authStore.user._id)) {
        removeLike(id).then((res) => {
          addDisLike(res.data._id).then((res) => {
            setFilm(res.data);
          });
        });
      }
      addDisLike(id).then((res) => {
        setFilm(res.data);
      });
    }
  };

  const handlePlaying = () => {
    setPlay(!play)
  }

  const handleVolume = (value:number) => {
    if (isNaN(value)) {
      return;
    }
    setVolume(value)
  }

  const handleValueComment = (value:string) => {
    console.log(value)
    setCommentValue(value)
  }

  const saveComment = () => {
    createComments(commentValue, film._id)
        .then((res) => {
          if (id) {
            getMovie(id).then((movie) => {
              setFilm(movie.data);
            });
          }
        })
  }

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
});

export default ShowFilm;
