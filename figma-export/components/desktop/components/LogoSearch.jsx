import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratMediumMonsoon14px } from "../../style-mixins";


function LogoSearch(props) {
  const { className } = props;

  return (
    <LogoSearch1 className={`logo-search ${className || ""}`}>
      <Image2 className="image-2" src="/img/image-2@2x.png" />
      <OverlapGroup className="overlap-group">
        <IconSearch className="icon-search" src="/img/icon---search@2x.svg" />
        <Text5 className="text-5">Collection, item or user</Text5>
      </OverlapGroup>
    </LogoSearch1>
  );
}

const LogoSearch1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 785px;
`;

const Image2 = styled.img`
  width: 139px;
  height: 48px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 52px;
  margin-left: 46px;
  display: flex;
  padding: 15px 20px;
  align-items: flex-start;
  min-width: 600px;
  background-color: var(--bg--main-color);
  border-radius: 26px;
`;

const IconSearch = styled.img`
  width: 20px;
  height: 20px;
`;

const Text5 = styled.div`
  ${MontserratMediumMonsoon14px}
  min-height: 17px;
  margin-left: 15px;
  margin-top: 1px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxButtonSecondary}

  .logo-search.logo-search-1  & {
    border-radius: 4px;
  }
`;

export default LogoSearch;
