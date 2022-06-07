import styled from "styled-components";
import Container from "../../elements/Container";

const media = {
    mobile: '@media(max-width: 465px)'
}

export const StyledRegisterForm = styled.div`
    padding: 70px 0;
    ${media.mobile} {
        padding: 56px 0 30px 0;
    }

    .register-form {
        display:flex;
        justify-content:center;
        ${media.mobile} {
            display:block;
        }
        .content {
            img {
                width:38px;
                height:38px;
            }
            .link {
                margin-bottom:40px;
                ${media.mobile} {
                    text-align:center;
                    margin-bottom:50px;
                }
            }
            h2 {
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                margin-bottom:40px;
                ${media.mobile} {
                    text-align:center;
                    margin-bottom:80px;
                }
            }
            label {
                font-size: 10px;
                line-height: 12px;
                color: #A0A0A0;
            }

            input {
                
                width: 396px;
                padding: 15px;
                background: #F9F9F9;
                border-radius: 8px;
                // outline:none;
                // border:none;
                font-size: 13px;
                line-height: 16px;
                ${media.mobile} {
                    width:100%;
                }
            }
            button {
                width:100%;
                padding:13px 0;
                border:none;
                background: #3456F3;
                border-radius: 3px;
                color:white;
                transition: 0.2s;
                cursor:pointer;
                margin-top:69px;
                ${media.mobile} {
                    margin-top:157px;
                }
                &:hover {
                    opacity:0.9;
                }
            }

            p {
                font-size: 14px;
                line-height: 17px;
                color: #A0A0A0;
                text-align:center;
                width:100%;
                margin:16px 0 0 0;
                ${media.mobile} {
                    margin:14px 0 0 0;
                }
                 a { 
                    font-size: 14px;
                    line-height: 17px;
                    color: #3456F3;
                    margin-left:6px;
                 }
            }

            .ant-form-item-explain-error {
                font-size: 10px;
                line-height: 12px;
                margin-top:5px;

            }
            .ant-input-status-error {
                background: #F9F9F9;
                border-color:#ff7875;
                &:hover {
                    background: #F9F9F9;
                }
            }
        }
    }
`
export const ContainerRegisterForm = styled(Container)`
    ${media.mobile} {
        padding:0 30px;
    }
`
