import React from "react";
import IconInstagram from "../IconInstagram";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../style-mixins";


function IconTwitter32(props) {
  const { iconInstagramProps } = props;

  return (
    <IconInstagram1>
      <IconInstagram src={iconInstagramProps.src} />
    </IconInstagram1>
  );
}

const IconInstagram1 = styled.div`
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

export default IconTwitter32;
