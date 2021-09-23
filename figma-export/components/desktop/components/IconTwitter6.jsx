import React from "react";
import IconMode from "../IconMode";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../styledMixins";


function IconTwitter6(props) {
  const { iconModeProps } = props;

  return (
    <IconDiscord>
      <IconMode src={iconModeProps.src} />
    </IconDiscord>
  );
}

const IconDiscord = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  position: relative;
  margin-left: 20px;
  display: flex;
  padding: 7px;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--bg--main-color);
  border-radius: 4px;
`;

export default IconTwitter6;
