import React from "react";
import styled from "styled-components";


function IconMode(props) {
  const { src, className } = props;

  return (
    <IconSearch className={`icon-search-2 ${className || ""}`}>
      <IconSearch1 className="icon-search-3" src={src} />
    </IconSearch>
  );
}

const IconSearch = styled.div`
  height: 24px;
  display: flex;
  padding: 2px 2px;
  align-items: flex-start;
  min-width: 24px;

  &.icon-search-2.icon-mode-3 {
    margin-left: 9px;
  }

  &.icon-search-2.icon-search-4 {
    margin-left: 16px;
  }
`;

const IconSearch1 = styled.img`
  width: 20px;
  height: 20px;
`;

export default IconMode;
