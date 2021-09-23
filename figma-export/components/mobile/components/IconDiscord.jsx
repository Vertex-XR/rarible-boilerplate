import React from "react";
import styled from "styled-components";


function IconDiscord(props) {
  const { src, className } = props;

  return (
    <IconDiscord1 className={`icon-discord-3 ${className || ""}`}>
      <Group className="group" src={src} />
    </IconDiscord1>
  );
}

const IconDiscord1 = styled.div`
  height: 24px;
  display: flex;
  padding: 3.4px 2px;
  align-items: flex-end;
  min-width: 24px;

  &.icon-discord-3.icon-discord-4 {
    margin-left: 16px;
  }
`;

const Group = styled.img`
  width: 20px;
  height: 17px;
`;

export default IconDiscord;
