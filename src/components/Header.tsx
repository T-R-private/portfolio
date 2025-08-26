import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #667eea;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#667eea" : "#333")};
  text-decoration: none;
  font-weight: ${(props) => (props.isActive ? "600" : "500")};
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  ${(props) =>
    props.isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: #667eea;
      border-radius: 1px;
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MobileNavLink = styled(Link)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "#667eea" : "#333")};
  text-decoration: none;
  font-weight: ${(props) => (props.isActive ? "600" : "500")};
  padding: 16px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  border-left: 4px solid
    ${(props) => (props.isActive ? "#667eea" : "transparent")};

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 998;

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/experience", label: "経歴・学歴" },
    { path: "/projects", label: "制作物・実績" },
    { path: "/books", label: "技術書紹介" },
    { path: "/hobbies", label: "自己紹介Q&A" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo to="/">Portfolio</Logo>

          <DesktopNav>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                isActive={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </DesktopNav>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNav>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={closeMobileMenu}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileNav>
      </MobileMenu>

      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
    </>
  );
}

export default Header;
