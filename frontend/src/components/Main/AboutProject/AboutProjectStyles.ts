import styled from "styled-components";

const media = {
    mobile:'@media(max-width: 571px)'
}

export const StyledAboutProject = styled.div`
    padding:110px 0 110px 0;
    ${media.mobile} {
        padding:70px 0 70px 0;
    }

    .title {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        padding:0 0 23px 0;
        border-bottom:1px solid black;
        ${media.mobile} {
            padding:0 0 28px 0;
        }
    }

    .content {
        display:flex;
        margin-top:70px;
        gap:40px;
        ${media.mobile} {
            flex-direction:column;
            margin-top:60px;
            gap:56px;
        }
    }

    .block {
        max-width:550px;
        h3 {
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.04em; 
            ${media.mobile} {
                font-size: 18px;
            }
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            margin-top:26px;
            ${media.mobile} {
                font-size: 11px;
            }
        }
    }

    .time-work {
        display:flex;
        margin-top:110px;
        ${media.mobile} {
            margin-top:60px;
        }
    }
    
    .backend {
        width: 20%;
        ${media.mobile} {
            width: 40%;
        }
        &>div {
            background: #2BE080;
            padding:9px 14px;
        }
    }

    .frontend {
        width:80%;
        ${media.mobile} {
            width: 80%;
        }
        &>div {
            padding:9px 14px;
            background: #F2F2F2;
        }
    }

    .c1 {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
    }

    .c2 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #A0A0A0;
        margin-top:14px;
    }

`