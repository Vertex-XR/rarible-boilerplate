import React from "react";
import styled from "styled-components";


function IconHamburgerManu(props) {
  const { src } = props;

  return (
    <IconHamburgerManu1>
      <IconMenu src={src} />
    </IconHamburgerManu1>
  );
}

const IconHamburgerManu1 = styled.div`
  height: 24px;
  margin-left: 17px;
  display: flex;
  padding: 0 3px;
  align-items: center;
  min-width: 24px;
`;

const IconMenu = styled.img`
  width: 18px;
  height: 14px;
`;

export default IconHamburgerManu;
