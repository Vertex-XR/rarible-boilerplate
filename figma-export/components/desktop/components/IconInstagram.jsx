import React from "react";
import styled from "styled-components";


function IconInstagram(props) {
  const { src, className } = props;

  return (
    <IconInstagram1 className={`icon-instagram-1 ${className || ""}`}>
      <Group1 className="group-1" src={src} />
    </IconInstagram1>
  );
}

const IconInstagram1 = styled.div`
  height: 24px;
  display: flex;
  padding: 0 2px;
  align-items: center;
  min-width: 24px;

  &.icon-instagram-1.icon-instagram-2 {
    margin-left: 16px;
  }
`;

const Group1 = styled.img`
  width: 20px;
  height: 20px;
`;

export default IconInstagram;
