import { Header, NavList, NavItem, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
    return (
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

    );

}

export default Navigation;

