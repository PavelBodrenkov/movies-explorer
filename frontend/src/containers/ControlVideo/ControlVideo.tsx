import { StyledControlVideo } from "./ControlVideoStyle";
import Icon, { CaretRightOutlined, SoundOutlined, PauseOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import {FC, useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";



const ControlVideo: FC = observer(() => {

  const {showMovieStore} = useContext<any>(Context);

  return (
    <StyledControlVideo>
      <div className="content">
          {showMovieStore.play ?
              <PauseOutlined className="play"onClick={() => showMovieStore.handlePlaying()}/>
              :
            <CaretRightOutlined className="play" onClick={() => showMovieStore.handlePlaying()} />
        }
        
        <div className="sound_block">
          <SoundOutlined className="sound" />
          <Slider
            min={0}
            max={1}
            step={0.1}
            style={{ width: "50px" }}
            className="slider"
            tipFormatter={null}
            onChange={(e) => showMovieStore.handleVolume(e)}
          />
        </div>
      </div>
    </StyledControlVideo>
  );
});

export default ControlVideo;
