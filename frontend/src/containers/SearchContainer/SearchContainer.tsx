import Container from "../../elements/Container"
import { StyledSearchContainer } from "./SearchContainerStyles";
import imgSearch from '../../assets/img/movies/img-search.svg';
import { Button, Form, Switch } from "antd";
import {FC, useContext } from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";



const SearchContainer: FC = observer(() => {

    const {moviesStore} = useContext<any>(Context);

    return (
        <StyledSearchContainer>
            <Container>
                <Form className="wrapper">
                    <div className="container-input">
                        <input
                            type='text'
                            placeholder="Фильмы"
                            onChange={(e) => moviesStore.handleSearchMovies(e.target.value)}
                            // onChange={(e) => setCheck((prev:checkProps) => {
                            //     return {
                            //         ...prev,
                            //         text: e.target.value
                            //     }
                            // })}
                        />
                        <Button
                            shape="circle"
                            className="search-button"
                            onClick={() => moviesStore.sendSearch()}
                            htmlType='submit'
                        >
                            <img src={imgSearch} />
                        </Button>
                    </div>
                    <div className="container-checkbox">
                        <label>Короткометражки</label>
                        <Switch
                            onChange={(e) => moviesStore.handleCheckMovies(e)}
                            // onChange={(e) => setCheck((prev:checkProps) => {
                            //     return {
                            //         ...prev,
                            //         check: e
                            //     }
                            // })}
                        />
                    </div>
                </Form>
            </Container>
        </StyledSearchContainer>
    )
})

export default SearchContainer