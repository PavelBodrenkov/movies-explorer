import styled from "styled-components";

export const StyledControlVideo = styled.div`
    background-color:rgba(56, 49, 49, 1);
    height:40px;
        .content {
            height:100%;
            display:flex;
            align-items:center;
            gap:10px;
            .play {
                font-size:30px;
                color:white;
                cursor:pointer;
            }
            .sound_block {
                display:flex;
                align-items:center;
                gap:5px;
                .slider {
                    display:none;
                }
                &:hover .slider {
                    display:block;
                }
                .sound {
                    font-size:30px;
                    color:white;
                    cursor:pointer;
                    
                }
            }
        }
`
