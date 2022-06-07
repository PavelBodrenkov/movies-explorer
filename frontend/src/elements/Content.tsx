import React, {FC} from 'react';
import styled from "styled-components";

interface ContentProps {
    children: any,
    padding?: string,
    backgroundColor?: string,
    radius?: string,
    alignSelf?:string,
    position?:string,
    top?:string,
    left?:string,
    right?:string,
    bottom?:string,
    border?:string,
    color?:string,
    margin?:string,
    width?:string
}

const StyledContent = styled.div<{
    padding?: string,
    backgroundColor?: string,
    radius?: string,
    alignSelf?:string,
    position?:string,
    top?:string,
    left?:string,
    right?:string,
    bottom?:string,
    border?:string,
    color?:string,
    margin?:string,
    width?:string
}>`
    padding:${props => props.padding || '0'};
    background-color:${props => props.backgroundColor || 'transparent'};
    border-radius:${props => props.radius || '0'};
    position:${props => props.position || 'static'};
    top:${props => props.top || '0'};
    left:${props => props.left || '0'};
    right:${props => props.right || '0'};
    bottom:${props => props.bottom || '0'};
    border:${props => props.border || 'none'};
    width:${props => props.width || '100%'};
    margin:${props => props.margin || '0'}
`

const Content: FC<ContentProps> = ({
                                       children,
                                       padding,
                                       backgroundColor,
                                       radius,
                                       alignSelf,
                                       position,
                                       top,
                                       left,
                                       right,
                                       bottom,
                                       border,
                                       margin,
                                       width
}) => {
    return (
        <StyledContent
            padding={padding}
            backgroundColor={backgroundColor}
            radius={radius}
            alignSelf={alignSelf}
            position={position}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            border={border}
            margin={margin}
            width={width}
            >
            {children}
        </StyledContent>
    );
};

export default Content;