import React from "react";
import styled from "styled-components";


function IconMode(props) {
  const { src, className } = props;

  return (
    <IconMode1 className={`icon-mode ${className || ""}`}>
      <Group className="group-3" src={src} />
    </IconMode1>
  );
}

const IconMode1 = styled.div`
  height: 24px;
  display: flex;
  padding: 2px 2px;
  align-items: flex-start;
  min-width: 24px;

  &.icon-mode.icon-mode-1 {
    margin-left: 9px;
  }

  &.icon-mode.icon-search-1 {
    margin-left: 16px;
  }
`;

const Group = styled.img`
  width: 20px;
  height: 20px;
`;

export default IconMode;
