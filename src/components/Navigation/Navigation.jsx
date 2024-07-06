import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import { Header, NavList, NavItem, StyledNavLink } from "./Navigation.styled";


const Navigation = () => {
    return (
        <div>
        <Header>
        <NavList>
            <NavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
        
            <NavItem>
            <StyledNavLink to={'movies'}>Movies</StyledNavLink>
            </NavItem>
            </NavList>
        </Header>
            <Suspense fallback={<div>Loading...</div>}>
        <main>
            <Outlet />
        </main>
            </Suspense>
    </div>
    );
    

}

export default Navigation;

