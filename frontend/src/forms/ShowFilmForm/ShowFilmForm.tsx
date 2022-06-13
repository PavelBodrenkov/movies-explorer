import {StyledShowFilmForm} from "./ShowFilmStyle";
import ReactPlayer from "react-player";
import Container from "../../elements/Container";
import ControlVideo from "../../containers/ControlVideo/ControlVideo";
import TitleFilm from "../../containers/TitleFilm/TitleFilm";
import RatingVideo from "../../containers/RatingVideo/RatingVideo";
import {Descriptions, Divider} from "antd";
import CommentVideo from "../../containers/CommentsVideo/CommentVideo";
import {FC, useContext, useEffect, useState} from "react";
import SendComment from "../../containers/SendComment/SendComment";
import {getComments} from "../../services/http/comments";
import {getUsers} from "../../services/http/users";
import {UsersProps} from "../../types/userTypes";
import {CommentTypes} from "../../types/commentTypes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const ShowFilmForm: FC = observer(() => {

    const {showMovieStore} = useContext<any>(Context);
    const [users, setUsers] = useState<UsersProps[]>([])

    useEffect(() => {
        getUsers()
            .then((res:{data:UsersProps[]}) => {
                setUsers(res.data)
            })
    }, [])


    return (
        <StyledShowFilmForm>
            <Container>
                <div className="content">
                    <ReactPlayer
                        url={showMovieStore?.film?.trailer}
                        playing={showMovieStore.play}
                        volume={showMovieStore.volume}
                        width="100%"
                        height="100%"
                        className="react-player"
                        controls={false}
                    />
                    <ControlVideo />
                    <div className="info_block">
                        <div className="t1">
                            <TitleFilm text={showMovieStore?.film}/>
                            <RatingVideo />
                        </div>
                        <Divider/>
                        <Descriptions title="О фильме" bordered>
                            <Descriptions.Item>{showMovieStore?.film?.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                    <Divider/>
                    <SendComment />
                    {showMovieStore?.film?.comments && showMovieStore?.film?.comments?.length !== 0
                        &&
                        showMovieStore?.film?.comments?.map((item: any) => {
                        return <CommentVideo
                            key={item._id}
                            comment={item}
                            users={users}
                        />
                    })}
                </div>
            </Container>
        </StyledShowFilmForm>
    );
});

export default ShowFilmForm;
