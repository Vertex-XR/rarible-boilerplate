import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratBoldWhite18px } from "../../styledMixins";


function HeadingMobile1(props) {
  const { explore, recentlyAdded } = props;

  return (
    <HeadingMobile11>
      <Explore>{explore}</Explore>
      <OverlapGroup>
        <RecentlyAdded>{recentlyAdded}</RecentlyAdded>
        <Bg></Bg>
        <IconArrow src="/img/icon---arrow@2x.svg" />
      </OverlapGroup>
    </HeadingMobile11>
  );
}

const HeadingMobile11 = styled.div`
  margin-top: 92px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  min-width: 345px;
`;

const Explore = styled.div`
  ${MontserratBoldWhite18px}
  min-height: 22px;
  min-width: 74px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 161px;
  height: 40px;
  position: relative;
  margin-left: 110px;
  border-radius: 4px;
`;

const RecentlyAdded = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--text--main-color);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
`;

const Bg = styled.div`
  ${Border1pxButtonSecondary}
  position: absolute;
  width: 161px;
  height: 40px;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const IconArrow = styled.img`
  position: absolute;
  width: 12px;
  height: 7px;
  top: 17px;
  left: 132px;
`;

export default HeadingMobile1;
