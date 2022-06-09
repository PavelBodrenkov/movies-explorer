
export interface MovieProps {
    comments: string[]
    country: string
    description: string
    director: string
    disLikes: string[]
    duration: number
    image: string
    likes: string[]
    movieId: number
    nameEN: string
    nameRU: string
    owner: string
    trailer: string
    year: string
    __v: number
    _id: string
}

export interface getMoviesProps {
    data:{
        count:number,
        movies:MovieProps[]
    }
}

export interface getSaveMoviesProps {
    data:{
        count:number,
        movie:MovieProps[]
    }
}

export interface checkProps {
    text: string,
    check: boolean
}