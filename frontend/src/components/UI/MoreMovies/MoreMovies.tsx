import {FC, useContext} from "react"
import { StyleButton } from "./MoreMoviesStyle"
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";


const MoreMovies:FC<any> = observer(({flag}) => {

    const {moviesStore} = useContext<any>(Context);

    return(
        <StyleButton onClick={() => moviesStore.moreMovie(flag)}>
            Ещё
        </StyleButton>
    )
})

export default MoreMovies