import React, {FC} from 'react';
import styled from "styled-components";

interface TitleProps {
    children:any,
    color?:string,
    margin?:string,
    size?:string
}

const StyledTitle = styled.h1<{
    color?:string,
    margin?:string,
    size?:string
}>`
    color:${props => props.color || 'white'};
    margin:${props => props.margin || '0'};
    font-size:${props => props.size || '50px'}
`

const Title:FC<TitleProps> = ({
                                  children,
                                  color,
                                  margin,
                                  size
}) => {
    return (
        <StyledTitle color={color} margin={margin} size={size}>
            {children}
        </StyledTitle>
    );
};

export default Title;