import React from "react";
import IconTwitter62 from "../IconTwitter62";
import IconTwitter2 from "../IconTwitter2";
import styled from "styled-components";


function NavBarMobile1(props) {
  const { logo, iconTwitter62Props, iconTwitter622Props, iconTwitter2Props } = props;

  return (
    <NavBarMobile11>
      <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
      <Icon>
        <IconTwitter62 iconModeProps={iconTwitter62Props.iconModeProps} />
        <IconTwitter62 className={iconTwitter622Props.className} iconModeProps={iconTwitter622Props.iconModeProps} />
        <IconTwitter2 iconHamburgerManuProps={iconTwitter2Props.iconHamburgerManuProps} />
      </Icon>
    </NavBarMobile11>
  );
}

const NavBarMobile11 = styled.div`
  height: 68px;
  margin-right: 15px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 375px;
  background-color: var(--bg--secondary-color);
`;

const Logo = styled.div`
  width: 44px;
  height: 48px;
  background-size: 100% 100%;
`;

const Icon = styled.div`
  height: 40px;
  
  margin-left: 141px;
  display: flex;
  align-items: flex-start;
  min-width: 160px;
`;

export default NavBarMobile1;
