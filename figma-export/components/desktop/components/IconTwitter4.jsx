import React from "react";
import IconShare from "../IconShare";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../style-mixins";


function IconTwitter4(props) {
  const { iconShareProps } = props;

  return (
    <IconShare1>
      <IconShare src={iconShareProps.src} />
    </IconShare1>
  );
}

const IconShare1 = styled.div`
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

export default IconTwitter4;
