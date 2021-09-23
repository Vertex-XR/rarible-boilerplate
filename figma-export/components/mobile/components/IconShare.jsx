import React from "react";
import styled from "styled-components";


function IconShare(props) {
  const { src, className } = props;

  return (
    <IconShare1 className={`icon-share-1 ${className || ""}`}>
      <Group2 className="group-2" src={src} />
    </IconShare1>
  );
}

const IconShare1 = styled.div`
  height: 24px;
  display: flex;
  padding: 1.6px 2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 24px;

  &.icon-share-1.icon-share-2 {
    margin-left: 16px;
  }
`;

const Group2 = styled.img`
  width: 20px;
  height: 20px;
`;

export default IconShare;
