import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 450px)'
}




export const StyledMainTitle = styled.div`
    background-color:#073042;
    min-height:524px;

    .content {
        display:flex;
        padding-top:150px;
        gap:190px;

        ${media.laptop} {
            flex-direction:column-reverse;
            align-items:center;
            gap:48px;
            padding-top:140px;
        }
        ${media.mobile} {
            padding-top:70px;
            gap:44px;
        }
    }

    .info {
        display:flex;
        flex-direction:column;
        ${media.laptop} {
            align-items:center;
        }
    }

    .title {
        color:white;
        font-size: 50px;
        line-height: 58px;
        max-width:640px;
        font-weight: 400;
        ${media.laptop} {
            text-align: center;
            font-size: 40px;
        }
        ${media.mobile} {
            font-size: 30px;
            line-height: 38px;
        }
    }

    .subtitle {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color:white;
        opacity:0.5;
        margin:36px 0 0 0;
        ${media.laptop} {
            text-align: center;
            margin:22px 0 0 0;
        }
        ${media.mobile} {
            margin:24px 0 0 0;
        }
        
    }

    .more {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        padding:10px 20px;
        border:1px solid rgba(255, 255, 255, .6);
        border-radius:3px;
        width:max-content;
        margin:146px 0 75px 0;
        ${media.laptop} {
            margin:92px 0 76px 0;
        }
        ${media.mobile} {
            margin:80px 0 30px 0;
        }
    }

    .img {
        width:310px;
        height:304px;
        ${media.mobile} {
            width:210px;
            height:206px;
        }
    }

    img {
        width:100%;
        height:100%;
    }


`