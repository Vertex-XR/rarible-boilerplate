import React from "react";
import styled from "styled-components";


function IconHamburgerManu(props) {
  const { src, className } = props;

  return (
    <IconHamburgerManu1 className={`icon-hamburger-manu ${className || ""}`}>
      <IconMenu className="icon-menu-1" src={src} />
    </IconHamburgerManu1>
  );
}

const IconHamburgerManu1 = styled.div`
  height: 24px;
  display: flex;
  padding: 0 3px;
  align-items: center;
  min-width: 24px;

  &.icon-hamburger-manu.icon-hamburger-manu-1 {
    margin-left: 17px;
  }
`;

const IconMenu = styled.img`
  width: 18px;
  height: 14px;
`;

export default IconHamburgerManu;
