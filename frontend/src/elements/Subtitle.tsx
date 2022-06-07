import React, {FC} from 'react';
import styled from "styled-components";

interface SubtitleProps {
    children:any,
    margin?:string,
    size?:string,
    color?:string,
    opacity?:string
}

const StyledSubtitle = styled.p<{
    margin?:string,
    size?:string,
    color?:string,
    opacity?:string
}>`
    margin:${props => props.margin || '0'};
    font-size:${props => props.size || '13px'};
    color:${props => props.color || 'white'};
    opacity:${props => props.opacity || '1'}
`

const Subtitle:FC<SubtitleProps> = ({
                                        children,
                                        margin,
                                        size,
                                        color,
                                        opacity
}) => {
    return (
        <StyledSubtitle
            margin={margin}
            size={size}
            color={color}
            opacity={opacity}
        >
            {children}
        </StyledSubtitle>
    );
};

export default Subtitle;