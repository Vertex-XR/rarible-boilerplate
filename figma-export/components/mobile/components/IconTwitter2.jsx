import React from "react";
import IconHamburgerManu from "../IconHamburgerManu";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../style-mixins";


function IconTwitter2(props) {
  const { iconHamburgerManuProps } = props;

  return (
    <IconMenu>
      <IconHamburgerManu src={iconHamburgerManuProps.src} />
    </IconMenu>
  );
}

const IconMenu = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  
  margin-left: 20px;
  display: flex;
  padding: 7px;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--bg--main-color);
  border-radius: 4px;
`;

export default IconTwitter2;
