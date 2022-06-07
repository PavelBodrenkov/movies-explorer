import React, {FC} from 'react';
import styled from "styled-components";

interface FlexProps {
    children?:any
    fd?:string
    ai?:string
    jc?:string
    margin?:string,
    gap?:string,
    padding?:string,
    mainContent?:boolean
}

const StyledFlex = styled.div<{
    fd?:string
    ai?:string
    jc?:string
    margin?:string,
    gap?:string,
    padding?:string,
    mainContent?:boolean
}>`
    display:flex;
    flex-direction:${props => props.fd || 'row'};
    align-items:${props => props.ai || 'stretch'};
    justify-content:${props => props.jc || 'stretch'};
    margin:${props => props.margin || '0'};
    padding:${props => props.padding || '0'};
    gap:${props => props.gap || '0'};
    
   @media only screen and (max-width: 1030px) {
    flex-direction:${props => (props.mainContent ? 'row' : 'column-reverse')}
   } 
`;

const Flex:FC<FlexProps> = ({
                                children,
                                fd,
                                ai,
                                jc,
                                margin,
                                gap,
                                padding,
                                mainContent
}) => {
    return (
        <StyledFlex fd={fd} ai={ai} jc={jc} margin={margin} gap={gap} padding={padding} mainContent={mainContent}>
            {children}
        </StyledFlex>
    )
};

export default Flex;