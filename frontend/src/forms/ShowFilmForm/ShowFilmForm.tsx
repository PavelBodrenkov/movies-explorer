import {StyledShowFilmForm} from "./ShowFilmStyle";
import ReactPlayer from "react-player";
import Container from "../../elements/Container";
import ControlVideo from "../../containers/ControlVideo/ControlVideo";
import TitleFilm from "../../containers/TitleFilm/TitleFilm";
import RatingVideo from "../../containers/RatingVideo/RatingVideo";
import {Descriptions, Divider} from "antd";
import CommentVideo from "../../containers/CommentsVideo/CommentVideo";
import {FC, useEffect, useState} from "react";
import SendComment from "../../containers/SendComment/SendComment";
import {getComments} from "../../services/http/comments";
import {getUsers} from "../../services/http/users";

const ShowFilmForm: FC<any> = ({
                                   film,
                                   handleAddLike,
                                   handleDislike,
                                   handlePlaying,
                                   handleVolume,
                                   volume,
                                   play,
                                   handleValueComment,
                                   saveComment
                               }) => {
    const [comments, setComments] = useState<any>([]);
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
        getComments().then((res) => {
            let arr:any[] = []
            res.data.map((item: any) => {
                arr.push(item)
            });
            setComments(arr)
        });

        getUsers()
            .then((res: any) => {
                setUsers(res.data)
            })
    }, []);

    return (
        <StyledShowFilmForm>
            <Container>
                <div className="content">
                    <ReactPlayer
                        url={film?.trailer}
                        playing={play}
                        volume={volume}
                        width="100%"
                        height="100%"
                        className="react-player"
                        controls={false}
                    />
                    <ControlVideo
                        handlePlaying={handlePlaying}
                        handleVolume={handleVolume}
                        play={play}
                    />
                    <div className="info_block">
                        <div className="t1">
                            <TitleFilm text={film}/>
                            <RatingVideo
                                film={film}
                                handleAddLike={handleAddLike}
                                handleDislike={handleDislike}
                            />
                        </div>
                        <Divider/>
                        <Descriptions title="О фильме" bordered>
                            <Descriptions.Item>{film.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                    <Divider/>
                    <SendComment handleValueComment={handleValueComment} saveComment={saveComment}/>
                    {film?.comments?.map((item: any) => {
                        return <CommentVideo
                            key={item._id}
                            comment={item}
                            comments={comments}
                            users={users}
                        >
                            {comments.map((item2:any) => {
                                if(item?.children && item?.children.includes(item2._id)) {
                                    return <CommentVideo
                                        key={item2._id}
                                        comment={item2}
                                        comments={comments}
                                        users={users}
                                    />
                                }
                            })}
                        </CommentVideo>
                    })}
                </div>
            </Container>
        </StyledShowFilmForm>
    );
};

export default ShowFilmForm;
