import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 571px)'
}

export const StyledTech = styled.div`
    padding:110px 0 110px 0;
    background: #F5F5F5;
    ${media.laptop} {
        padding:90px 0 90px 0;
    }
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
            font-size: 18px;
            line-height: 22px;
            letter-spacing: -0.04em;
        }
    }

    .content {
        padding:90px 0 0 0;
        display:flex;
        flex-direction:column;
        align-items:center;
        ${media.mobile} {
            padding:60px 0 0 0;
        }
        h2, p {
            text-align:center;
        }

        h2 {
            font-weight: 400;
            font-size: 50px;
            line-height: 58px;
            letter-spacing: -0.04em;
            ${media.mobile} {
                font-size: 30px;
                line-height: 36px;
            }
        }

        p {
            max-width:460px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.04em;
            margin-top:26px;
            ${media.laptop} {
                font-size: 12px;
                line-height: 18px;
                margin-top:22px;
            }
            ${media.mobile} {
                max-width:292px;
                font-size: 11px;
                line-height: 16px;
                margin-top:24px;
            }
        }
    }

    .list {
        list-style:none;
        display:flex;
        justify-content:center;
        gap:10px;
        margin-top:100px;
        ${media.laptop} {
            margin-top:83px;
        };
        ${media.mobile} {
            margin: 50px auto 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            max-width: 203px;
            justify-content: center;
        }
        li {
            width:90px;
            height:60px;
            background: #E8E8E8;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:10px;
            font-size: 14px;
            line-height: 17px;
            ${media.laptop} {
                width:84px;
                height:57px;
                font-size: 12px;
                line-height: 15px;
            };
        }
        
    }
`