import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../style-mixins";


function MobileInputFieldTwitterUsername(props) {
  const { royalties, themadbrains } = props;

  return (
    <MobileInputFieldTwitterUsername1>
      <Royalties>{royalties}</Royalties>
      <OverlapGroup>
        <Themadbrains>{themadbrains}</Themadbrains>
        <Link src="/img/link@2x.svg" />
      </OverlapGroup>
    </MobileInputFieldTwitterUsername1>
  );
}

const MobileInputFieldTwitterUsername1 = styled.div`
  width: 305px;
  margin-top: 33px;
  margin-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 86px;
`;

const Royalties = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.28px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 12px;
  margin-left: -0.57px;
  display: flex;
  padding: 14px 11.8px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 306px;
  border-radius: 4px;
`;

const Themadbrains = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 136px;
  letter-spacing: 0;
`;

const Link = styled.img`
  width: 35px;
  height: 13px;
  align-self: center;
  margin-left: 111px;
  margin-bottom: 6px;
`;

export default MobileInputFieldTwitterUsername;
