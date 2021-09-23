import React from "react";
import IconDiscord from "../IconDiscord";
import styled from "styled-components";
import { Border1pxButtonSecondary } from "../../styledMixins";


function IconTwitter5(props) {
  const { iconDiscordProps } = props;

  return (
    <IconDiscord1>
      <IconDiscord src={iconDiscordProps.src} />
    </IconDiscord1>
  );
}

const IconDiscord1 = styled.div`
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

export default IconTwitter5;
