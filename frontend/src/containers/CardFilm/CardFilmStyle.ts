import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 320px)'
}

export const Styledcard =  styled.div`
${media.mobile} {
    width:100%;
}
.card {
    width:270px;
    transition: box-shadow 0.3s, border-color 0.3s;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    &:hover {
        box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
        border-color:#d9d9d9;
    }
    ${media.mobile} {
        width:100%;
    }
    & span {
        font-size: 11px;
        line-height: 13px;
        color: #A0A0A0;
        padding: 0 0 0 5px;
    }
}
.card > div > a > img {
    height:151px;
    cursor:pointer;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width:100%;
}
.card > .ant-card-body {
    padding:0;
}
.card-body {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:14px 5px 29px 5px;
    border-bottom:1px solid #E8E8E8;
    p {
        margin:0;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
    }
    img {
        cursor:pointer;
        transition:0.2s;
        &:hover {
            filter: drop-shadow( 0px 0px 2px rgba(0, 0, 0, .3));
        }
        
    }
}
`