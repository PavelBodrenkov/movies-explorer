import {observer} from "mobx-react-lite";
import {useEffect, useContext} from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListFilms from "../../containers/ListFilms/ListFilms";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import {Context} from "../../";

const Films = observer(() => {

    const {moviesStore} = useContext<any>(Context);

    useEffect(() => {
        moviesStore.getAllMovies()
    }, []);

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
            <SearchContainer />
            <ListFilms
                flag={"movies"}
            />
            <Footer/>
        </>
    );
});

export default Films;
