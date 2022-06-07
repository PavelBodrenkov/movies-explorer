import { FC } from "react"
import { StyleButton } from "./MoreMoviesStyle"


const MoreMovies:FC<any> = ({more}) => {
    return(
        <StyleButton onClick={more}>
            Ещё
        </StyleButton>
    )
}

export default MoreMovies