import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 768px)',
    
    mobile: '@media(max-width: 571px)'
}


export const StyledError404 = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1 {
        font-size: 140px;
        line-height: 169px;
        text-align: center;
        ${media.mobile} {
            font-size: 80px;
            line-height: 97px;
        }
    }
    p{
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin:5px 0 0 0;
        ${media.mobile} {
            font-size: 12px;
            line-height: 15px;
            margin:10px 0 0 0;
        }
    }

    a {
        position:absolute;
        bottom:60px;
        font-size: 14px;
        line-height: 17px;
        color: #3456F3;
        ${media.laptop} {
            bottom:222px;
        }
        ${media.mobile} {
            bottom:30px;
            font-size: 12px;
            line-height: 15px;
        }
    }

`