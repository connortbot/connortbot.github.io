import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #fafffb; /* Background color */
  position: relative; /* Keep it relative */
  bottom: 0px; /* Position at the bottom */
`;

const FooterItems = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px; /* Gap between the nav items */
`;

const FooterLink = styled.a`
  margin-right: 20px;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #377047;
  cursor: pointer;

  &:hover {
    color: #5C748C; /* Same as the link color for consistency */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterItems>
            <FooterLink href="#resume">resume</FooterLink>
            <FooterLink href="#github">github</FooterLink>
            <FooterLink href="#linkedin">linkedin</FooterLink>
        </FooterItems>
    </FooterContainer>
  );
};

export default Footer;
