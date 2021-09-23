import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../style-mixins";


function InputFieldTwitterUsername(props) {
  const { twitterUsername, themadbrains, link } = props;

  return (
    <InputFieldTwitterUsername1>
      <TwitterUsername>{twitterUsername}</TwitterUsername>
      <OverlapGroup>
        <Themadbrains>{themadbrains}</Themadbrains>
        <Link src={link} />
      </OverlapGroup>
    </InputFieldTwitterUsername1>
  );
}

const InputFieldTwitterUsername1 = styled.div`
  width: 1104px;
  align-self: center;
  margin-top: 37px;
  margin-right: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const TwitterUsername = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.5px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 16px;
  margin-left: -1px;
  display: flex;
  padding: 14px 17.5px;
  align-items: flex-start;
  min-width: 1105px;
  border-radius: 4px;
`;

const Themadbrains = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 136px;
  letter-spacing: 0;
`;

const Link = styled.img`
  width: 34px;
  height: 13px;
  align-self: center;
  margin-left: 895px;
  margin-bottom: 6px;
`;

export default InputFieldTwitterUsername;
