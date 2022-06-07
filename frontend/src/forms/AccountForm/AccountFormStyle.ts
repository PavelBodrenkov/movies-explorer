import styled from "styled-components";
import Container from "../../elements/Container";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 400px)'
}

export const StyledAccountForm = styled.div`
    padding:148px 0 0 0;
    .form {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
        h2 {
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
        }
        .content {
            max-width:410px;
            width:100%;
            margin-top:123px;
            .item .ant-form-item-label label {
                font-weight: 600;
                font-size: 11px;
                line-height: 13px;
                margin:0;
                width:70px;
            }
                p {
                    font-weight: 600;
                    font-size: 11px;
                    line-height: 13px;
                    margin:0;
                }
                input {
                    // border:none;
                    // outline:none;
                    text-align:end;
                   // width:100%
                }
                &:first-child {
                    //border-bottom: 1px solid #E8E8E8;;
                }
                .edit {
                    pointer-events: none;
                    cursor: default;
                }
        }
        .buttons {
            position:absolute;
            bottom:70px;
            left:50%;
            transform: translate(-50%, -50%);
            display:flex;
            flex-direction:column;
            & > div {
                height:40px;
                display:flex;
                justify-content:center;
                align-items:center;
                & > div {
                    display:flex;
                    gap:10px;
                }
            }
            p {
                text-align:center;
                margin:0;
                font-size: 13px;
                line-height: 16px;
                cursor:pointer;
                font-weight: 600;
            }
            .editButton {
                margin-bottom:16px;
                color: black;
            }
            .save {
                background:#52c41a;
                border-radius:20px;
                color:white;
                margin-bottom:16px;
            }
            .back {
                background:#0C5AA6;
            }
            .exit {
                color: #FF004D;
            }
        }
    }
`

export const AccountContainer = styled(Container)`
    ${media.mobile} {
        padding:0 30px;
    }
`