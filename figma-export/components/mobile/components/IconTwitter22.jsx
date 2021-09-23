import React from "react";
import styled from "styled-components";


function IconTwitter22(props) {
  const { src, className } = props;

  return (
    <IconTwitter className={`icon-twitter-1 ${className || ""}`}>
      <Vector className="vector" src={src} />
    </IconTwitter>
  );
}

const IconTwitter = styled.div`
  height: 24px;
  display: flex;
  padding: 3.4px 2px;
  align-items: flex-end;
  min-width: 24px;
`;

const Vector = styled.img`
  width: 20px;
  height: 17px;
`;

export default IconTwitter22;
