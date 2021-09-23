import React from "react";
import IconMode from "../IconMode";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../styledMixins";


function IconTwitter62(props) {
  const { className, iconModeProps } = props;

  return (
    <IconSearch className={`icon-search ${className || ""}`}>
      <IconMode src={iconModeProps.src} />
    </IconSearch>
  );
}

const IconSearch = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  position: relative;
  display: flex;
  padding: 7px;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--bg--main-color);
  border-radius: 4px;

  &.icon-search.icon-mode {
    margin-left: 20px;
  }

  &.icon-search.icon-mode-1 {
    margin-left: 20px;
  }

  &.icon-search.icon-discord {
    margin-left: 20px;
  }

  &.icon-search.icon-discord-1 {
    margin-left: 20px;
  }
`;

export default IconTwitter62;
