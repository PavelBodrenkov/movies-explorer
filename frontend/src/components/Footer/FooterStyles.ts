import styled from "styled-components";

const media = {
    mobile: '@media(max-width: 571px)'
}

export const StyledFooter = styled.footer`

.title {
    font-size: 13px;
    line-height: 16px;
    color: #A0A0A0;
    text-align:center;
    padding:79px 0 20px 0;
    border-bottom:1px solid #E8E8E8;
    ${media.mobile} {
        font-size: 12px;
        line-height: 15px;
    }
}
.content {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 0;
    ${media.mobile} {
        flex-direction:column-reverse;
        padding:0;
        align-items:center;
    }
    p {
        font-size: 13px;
        line-height: 16px;
        ${media.mobile} {
            padding:0 0 10px 0;
            color:#A0A0A0;
        }
    }
    ul {
        list-style:none;
        display:flex;
        gap:20px;
        padding:30px 0;
        ${media.mobile} {
            flex-direction:column;
            gap:12px;
        }
        li > a {
            font-size: 13px;
            line-height: 16px;
            ${media.mobile} {
                font-size: 12px;
                line-height: 15px;
                text-align: center;
            }
        }
        li {
            ${media.mobile} {
                text-align: center;
            }
        }
    }
}
`