import React, {FC} from 'react';
import styled from "styled-components";

interface ButtonProps {
    children:any,
    color?:string,
    backgroundColor?:string,
    padding?:string
}

const StyledButton = styled.button<{
    color?:string,
    backgroundColor?:string,
    padding?:string
}>`
    color:${props => props.color || 'black'};
    background-color:${props => props.backgroundColor || 'white'};
    padding:${props => props.padding || '0'};
`

const Button:FC<ButtonProps> = ({
                                    children,
                                    color,
                                    backgroundColor,
                                    padding
}) => {
    return (
        <StyledButton color={color} backgroundColor={backgroundColor} padding={padding}>
            {children}
        </StyledButton>
    );
};

export default Button;