import React, {FC} from 'react';
import styled from "styled-components";

interface ImageProps {
    width?:string,
    height?:string,
    src:string
}

const StyledImage = styled.img<{
    width?:string,
    height?:string}
    >`
    width:${props => props.width || '0'}
    height:${props => props.height || '0'}
`

const Image:FC<ImageProps> = ({width, height, src}) => {
    return (
       <StyledImage width={width} height={height} src={src}/>
    );
};

export default Image;