import React from 'react';
import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 450px)'
}

const Wrapper = styled.div`
    max-width:1280px;
    margin:0 auto;
    padding: 0 70px;
    height:100%;
    ${media.laptop} {
        padding: 0 30px;
    }
    ${media.mobile} {
        padding: 0 15px;
    }
`

const Container = (props:any) => {
    return <Wrapper {...props}/>
};

export default Container;