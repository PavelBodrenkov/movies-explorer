import { StyledControlVideo } from "./ControlVideoStyle";
import Icon, { CaretRightOutlined, SoundOutlined, PauseOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import { FC } from "react";

interface ControlVideoprops {
  handlePlaying: () => void;
  handleVolume: (value: number) => void;
  play:boolean
}

const ControlVideo: FC<ControlVideoprops> = ({
  handlePlaying,
  handleVolume,
  play
}) => {
  return (
    <StyledControlVideo>
      <div className="content">
          {play ? 
              <PauseOutlined className="play"onClick={handlePlaying}/>
              :
            <CaretRightOutlined className="play" onClick={handlePlaying} />
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
            onChange={handleVolume}
          />
        </div>
      </div>
    </StyledControlVideo>
  );
};

export default ControlVideo;
