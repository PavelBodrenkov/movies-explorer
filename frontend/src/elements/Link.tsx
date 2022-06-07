import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

interface NavProps {
    children: any,
    path: string,
    padding?: string,
    backgroundColor?: string,
    color?: string,
    radius?: string,
    size?:string
}

const NavLink = styled(Link)<{
    color?: string,
    size?:string
}>`
    text-decoration:none;
    color:${props => props.color || 'black'};
    font-size:${props => props.size || '12px'};
    line-height: 16px;
    font-weight: 500;
`

const Nav: FC<NavProps> = ({children, path, color, size}) => {
    return (
        <NavLink to={path} color={color} size={size}>
            {children}
        </NavLink>
    );
};

export default Nav;