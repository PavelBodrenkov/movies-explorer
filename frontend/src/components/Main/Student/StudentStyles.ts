import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 571px)'
}

export const StyledStudent = styled.div`
padding:110px 0 100px 0;
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
    padding:66px 0 0 0;
    display:flex;
    justify-content:space-between;
    ${media.mobile} {
        flex-direction:column-reverse;
        align-items:center;
        padding:60px 0 0 0;
    }
        .about-me {
            h2 {
                font-size: 50px;
                line-height: 58px;
                letter-spacing: -0.04em;
                ${media.laptop} {
                    font-size: 40px;
                    line-height: 40px;
                }
                ${media.mobile} {
                    font-size: 30px;
                    line-height: 36px;
                }
            }
            .subtitle {
                font-weight: 500;
                font-size: 18px;
                line-height: 20px;
                color: #111111;
                margin-top:18px;
                ${media.laptop} {
                    font-size: 12px;
                    line-height: 18px;
                    margin-top:16px;
                }
                ${media.mobile}{
                    font-size: 11px;
                    margin-top:20px;
                }
            }
            .description {
                font-size: 14px;
                line-height: 22px;
                max-width:500px;
                margin-top:26px;
                ${media.laptop} {
                    font-size: 12px;
                    line-height: 18px;
                    margin-top:20px;
                }
                ${media.mobile}{
                    font-size: 11px;
                    margin-top:20px;
                }
            }

            .social {
                margin-top:99px;
                display:flex;
                gap:20px;
                ${media.laptop} {
                    margin-top:87px;
                }
                ${media.mobile}{
                    margin-top:40px;
                    gap:26px;
                }
                a {
                    text-decoration:none;
                    color:#000000;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                }
            }
        }
        .photo {
            width:270px;
            height:327px;
            margin-left:49px;
            border-radius:10px;
            object-fit:cover;
            ${media.laptop} {
                width:255px;
                height:307px;
            }
            ${media.mobile} {
                margin-left:0;
                margin-bottom:40px;
                max-width:292px;
                width:100%;
                height:352px;
            }
        }
}





`