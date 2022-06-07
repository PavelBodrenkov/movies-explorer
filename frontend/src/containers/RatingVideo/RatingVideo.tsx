import { StyledRatingVideo } from "./RatingVideoStyle";
import {
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const RatingVideo: FC<any> = observer(
  ({ film, handleAddLike, handleDislike }) => {
    //@ts-ignore
    const { authStore, moviesStore } = useContext(Context);

    return (
      <StyledRatingVideo>
        <div>
          <div>{film?.likes?.length}</div>
          <Tooltip title="Нравится">
            {film?.likes?.includes(authStore.user._id) ? (
              <LikeFilled
                className="like"
                onClick={() => handleAddLike(film._id)}
              />
            ) : (
              <LikeOutlined
                className="like"
                onClick={() => handleAddLike(film._id)}
              />
            )}
          </Tooltip>
        </div>
        <div>
          <Tooltip title=" Не нравится">
            {film?.disLikes?.includes(authStore.user._id) ? (
              <DislikeFilled
                className="dislike"
                onClick={() => handleDislike(film._id)}
              />
            ) : (
              <DislikeOutlined
                className="dislike"
                onClick={() => handleDislike(film._id)}
              />
            )}
          </Tooltip>
          <div>{film?.disLikes?.length}</div>
        </div>
      </StyledRatingVideo>
    );
  }
);

export default RatingVideo;
