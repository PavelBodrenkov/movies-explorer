import axios from '../../helpers/axios';

interface moviesProps {
     country:string;
     director:string;
     duration:number;
     year:string;
     description:string;
     image:string;
     trailer:string;
     owner:string;
     movieId:number;
     nameRU:string;
     nameEN:string;
}

export const createMovie = async ({country, director, duration, year, description, image, trailer, owner, movieId, nameRU, nameEN}:moviesProps) => {
    const movie = await axios.post('movies', {country, director, duration, year, description, image, trailer, owner, movieId, nameRU, nameEN})
    console.log('movie', movie);
    
    return movie
}

export const getMovies = async(offset:number) => {
    const movies = await axios.get(`movies?offset=${offset}`)
    return movies
}

export const serachMovies = async(text:string, check:boolean) => {
    const movie = await axios.get(`movies/search?${check ? `search=${text}&short=1` : `search=${text}`}`)
    return movie
}

export const serachSaveMovies = async(text:string, check:boolean) => {
    const movie = await axios.get(`movies/favourites/search?${check ? `search=${text}&short=1` : `search=${text}`}`)
    return movie
}

export const getMovie = async (id:string) => {
    const movie = await axios.get(`movies/movie/${id}`)
    return movie
}

export const favourites = async(id:string) => {
    const movie = await axios.put(`movies/favourites/${id}`)
    return movie
}

export const deleteFavourites = async(id:string) => {
    const movie = await axios.delete(`movies/favourites/${id}`)
    return movie
}

export const getSaveFavourites = async(offset:number) => {
    const movie = await axios.get(`movies/get-save?offset=${offset}`)
    return movie
}

export const addLike = async(id:string) => {
    const movie = await axios.put(`movies/like/${id}`)
    return movie
}

export const removeLike = async(id:string) => {
    const movie = await axios.delete(`movies/like/${id}`)
    return movie
}

export const addDisLike = async(id:string) => {
    const movie = await axios.put(`movies/dislike/${id}`)
    return movie
}

export const removeDisLike = async(id:string) => {
    const movie = await axios.delete(`movies/dislike/${id}`)
    return movie
}

