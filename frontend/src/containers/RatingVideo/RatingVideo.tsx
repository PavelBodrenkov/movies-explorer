import {StyledRatingVideo} from "./RatingVideoStyle";
import {
    LikeOutlined,
    DislikeOutlined,
    LikeFilled,
    DislikeFilled,
} from "@ant-design/icons";
import {Tooltip} from "antd";
import {FC, useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../..";
import {toJS} from "mobx";

const RatingVideo: FC = observer(() => {

        const {authStore, showMovieStore} = useContext<any>(Context);

        return (
            <StyledRatingVideo>
                <div>
                    <div>{showMovieStore.film?.likes?.length}</div>
                    <Tooltip title="Нравится">
                        {showMovieStore.film?.likes?.includes(authStore.user._id) ? (
                            <LikeFilled
                                className="like"
                                onClick={() => showMovieStore.handleAddLike(showMovieStore.film._id)}
                            />
                        ) : (
                            <LikeOutlined
                                className="like"
                                onClick={() => showMovieStore.handleAddLike(showMovieStore.film._id)}
                            />
                        )}
                    </Tooltip>
                </div>
                <div>
                    <Tooltip title="Не нравится">
                        {showMovieStore.film?.disLikes?.includes(authStore.user._id) ? (
                            <DislikeFilled
                                className="dislike"
                                onClick={() => showMovieStore.handleDislike(showMovieStore.film._id)}
                            />
                        ) : (
                            <DislikeOutlined
                                className="dislike"
                                onClick={() => showMovieStore.handleDislike(showMovieStore.film._id)}
                            />
                        )}
                    </Tooltip>
                    <div>{showMovieStore.film?.disLikes?.length}</div>
                </div>
            </StyledRatingVideo>
        );
    }
);

export default RatingVideo;
