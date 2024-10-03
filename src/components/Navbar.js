import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #fafffb; /* Off-white background color */
`;

const NavItems = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px; /* Gap between the nav items */
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  color: ${(props) => (props.active ? '#377047' : '#6A6A6A')};
  font-weight: ${(props) => (props.active ? '700' : '400')};
  cursor: pointer;

  &:hover {
    color: #377047; /* Highlight on hover */
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavItems>
        <NavLink to="/" active={location.pathname === '/'}>
          home
        </NavLink>
        <NavLink to="/projects" active={location.pathname === '/projects'}>
          projects
        </NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact'}>
          contact
        </NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navbar;