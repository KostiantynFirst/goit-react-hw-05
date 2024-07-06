import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Header = styled.header`
    background-color: #333;
    color: #fff;
    padding: 15px 0;
`;

export const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const NavItem = styled.li`
    margin: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;