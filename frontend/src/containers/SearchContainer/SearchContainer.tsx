import Container from "../../elements/Container"
import { StyledSearchContainer } from "./SearchContainerStyles";
import imgSearch from '../../assets/img/movies/img-search.svg';
import { Button, Form, Switch } from "antd";
import { FC, useEffect, useState } from "react";


const SearchContainer: FC<any> = ({ searchMovies, sendSearch }) => {

    const [check, setCheck] = useState({
        text: '',
        check: false
    })

    useEffect(() => {
        searchMovies(check)
    }, [check])

    return (
        <StyledSearchContainer>
            <Container>
                <Form className="wrapper">
                    <div className="container-input">
                        <input
                            type='text'
                            placeholder="Фильмы"
                            onChange={(e) => setCheck((prev) => {
                                return {
                                    ...prev,
                                    text: e.target.value
                                }
                            })} />
                        <Button
                            shape="circle"
                            className="search-button"
                            onClick={sendSearch}
                            htmlType='submit'
                        >
                            <img src={imgSearch} />
                        </Button>
                    </div>
                    <div className="container-checkbox">
                        <label>Короткометражки</label>
                        <Switch onChange={(e) => setCheck((prev) => {
                                return {
                                    ...prev,
                                    check: e
                                }
                            })} />
                    </div>
                </Form>
            </Container>
        </StyledSearchContainer>
    )
}

export default SearchContainer