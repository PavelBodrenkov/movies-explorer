import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    middleMobile:'@media(max-width: 580px)',
    mobile: '@media(max-width: 571px)'
}

export const StyledSearchContainer = styled.div`
    
    .wrapper {
        display:flex;
        width:100%;
        gap:41px;
        padding: 154px 0 80px 0;
        border-bottom:1px solid #E8E8E8;
        justify-content:space-between;
        ${media.middleMobile} {
            flex-direction:column;
            align-items:center;
        }
        .container-input {
            display:flex;
            justify-content:space-between;
            border: 1px solid #E8E8E8;
            border-radius:30px;
            width:100%;
            padding: 5px 5px 5px 0;
            transition: box-shadow 0.3s, border-color 0.3s;
                &:hover {
                    box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                    0 9px 28px 8px rgba(0, 0, 0, 0.05);
                    border-color:#d9d9d9;
                }
           
            input {
                border:none;
                border-radius:30px;
                width:100%;
                padding:0 0 0 22px;
                outline:none;
                padding-right:46px;
            }

            .search-button {
                width:38px;
                height:34px;
                background: #3456F3;
                //border-radius: 48px;
                display:flex;
                justify-content:center;
                align-items:center;
                //margin-left:46px;
                cursor:pointer;
            }
        }

        .container-checkbox {
            display:flex;
            align-items:center;
            gap:14px;

            label {
                font-size: 13px;
                line-height: 18px;
            }
            & > .ant-switch-checked {
                background-color:#2BE080;
            }
        }
}                 
`