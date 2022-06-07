import styled from "styled-components";

const media = {
    laptop: '@media(max-width: 1030px)',
    mobile: '@media(max-width: 571px)'
}


export const StyledSearchContainer = styled.div`
    padding:70px 0 0 0;
    .wrapper {
        display:flex;
        flex-wrap:wrap;
        gap:38px 20px;
        justify-content:start;
        ${media.laptop} {
            gap:30px 30px;
        }
        h2 {
            width:100%;
            text-align:center;
        }
       
    }
    

`