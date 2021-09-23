import React from "react";
import IconTwitter62 from "../IconTwitter62";
import IconTwitter2 from "../IconTwitter2";
import IconTwitter3 from "../IconTwitter3";
import styled from "styled-components";


function NavBarMobile2(props) {
  const { logo, iconTwitter62Props, iconTwitter622Props, iconTwitter2Props, iconTwitter3Props } = props;

  return (
    <NavBarMobile21>
      <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
      <Icon>
        <IconTwitter62 iconModeProps={iconTwitter62Props.iconModeProps} />
        <IconTwitter62 className={iconTwitter622Props.className} iconModeProps={iconTwitter622Props.iconModeProps} />
        <IconTwitter2 iconHamburgerManuProps={iconTwitter2Props.iconHamburgerManuProps} />
        <IconTwitter3 src={iconTwitter3Props.src} />
      </Icon>
    </NavBarMobile21>
  );
}

const NavBarMobile21 = styled.div`
  height: 68px;
  margin-top: 33px;
  margin-right: 25px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 365px;
  background-color: var(--bg--secondary-color);
`;

const Logo = styled.div`
  width: 44px;
  height: 48px;
  background-size: 100% 100%;
`;

const Icon = styled.div`
  height: 40px;
  position: relative;
  margin-left: 71px;
  display: flex;
  align-items: flex-start;
  min-width: 220px;
`;

export default NavBarMobile2;
