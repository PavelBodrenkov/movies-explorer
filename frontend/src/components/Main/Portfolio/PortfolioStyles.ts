import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 571px)'
}

export const StyledStudent = styled.div`
padding:0 0 125px 0;
${media.mobile} {
    padding:0 0 70px 0;
}
.title {
    font-size: 18px;
    line-height: 20px;
    color: #A0A0A0;
    paddign: 0 0 50px 0;
}
.lists {
    display:flex;
    flex-direction:column;
    list-style:none;
    margin-top:50px;
    li {
        a {
            display:flex;
            justify-content:space-between;
            align-items:center;
            
            padding:20px 0 19px 0;
            text-decoration:none;
            p {
                font-size: 30px;
                line-height: 50px;
                letter-spacing: -0.04em;
                color:black;
                margin:0;
                ${media.laptop} {
                    font-size: 28px;
                }
                ${media.mobile} {
                    font-size: 18px;
                    line-height: 28px;
                }
            }
            img {
                width:19px;
                height:19px;
                ${media.mobile} {
                    width:12px;
                    height:12px;
                }
            }
        }
        border-bottom:1px solid #E6E6E6;
    }
    & li:first-child {
        padding:0 0 19px 0;
    }
    & li:last-child {
        padding:20px 0 0 0;
        border-bottom:none;
    }
}
`