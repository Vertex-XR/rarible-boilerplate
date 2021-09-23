import React from "react";
import IconTwitter22 from "../IconTwitter22";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../style-mixins";


function IconTwitter(props) {
  const { iconTwitter2Props } = props;

  return (
    <IconTwitter1>
      <IconTwitter22 src={iconTwitter2Props.src} />
    </IconTwitter1>
  );
}

const IconTwitter1 = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  
  display: flex;
  padding: 7px;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--bg--main-color);
  border-radius: 4px;
`;

export default IconTwitter;
