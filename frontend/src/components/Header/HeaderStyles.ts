import styled from "styled-components";
import { Drawer } from "antd";

const media = {
    laptop: '@media(max-width: 1030px)',
    middleLaptop:'@media(max-width: 768px)',
    mobile: '@media(max-width: 450px)',
    mobileDrawer:'@media(max-width: 378px)'
}


export const StyledHeader = styled.header`
padding:18px 0;
background-color:transparent;
position:absolute;
width:100%;
z-index:10;

.content {
    display:flex;
    justify-content:space-between;
}

.auth-nav {
    display:flex;
    align-items:center;
    gap:30px;
    .link {
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        text-decoration:none;
       color:black;
        border-radius:3px;
    }
    
    .entrance {
        background: #2BE080;
        padding:8px 20px;
        color:black;
    }
    
    .registration {
        color:white;
    }
    
    .auth-link {
        display:flex;
        align-items:center;
        gap:50px;
        ${media.middleLaptop} {
            display:none;
        }
       .movies {
           display:flex;
           gap:20px;
       }
       .account {
           padding:8px 20px;
           background: #F5F5F5;
           border-radius: 20px;
           &>a {
            font-weight: 600;
            font-size: 14px;
           }
    }
}
.auth-link__mobile {
    display:none;
}
    ${media.middleLaptop} {
        .auth-link__mobile {
            display:block;
            .burger-menu {
                width:44px;
                height:44px;
                cursor:pointer;
                img {
                    width:100%;
                    height:100%;
                }
                .svg-white {
                    filter: invert(100%) sepia(13%) saturate(0%) hue-rotate(275deg) brightness(117%) contrast(100%);
                }
                .svg-black {
                    filter: invert(0%) sepia(94%) saturate(7493%) hue-rotate(321deg) brightness(90%) contrast(100%);
                }
            } 
        }
    }
}
.color-white {
    color:white
}
`

export const DrawerStyled = styled(Drawer)`
    .ant-drawer-body {
        position:relative;
        .drawer-link {
            display:flex;
            flex-direction:column;
            text-align:center;
            gap:28px;
            padding:105px 0;
        }
        .link {
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
        }
        .account {
            position:absolute;
            bottom:90px;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            padding:8px 20px;
            background: #F5F5F5;
            border-radius: 20px;
            .link {
                font-weight: 600;
                font-size: 14px;
                line-height: 16px;
            }
        }
        
    }
`