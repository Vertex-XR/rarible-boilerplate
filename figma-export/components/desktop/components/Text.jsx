import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite16px, MontserratSemiBoldMonsoon16px } from "../../styledMixins";


function Text() {
  return (
    <Text1>
      <Explore>Explore</Explore>
      <HowItWorks>How it works</HowItWorks>
    </Text1>
  );
}

const Text1 = styled.div`
  height: 20px;
  margin-left: 74px;
  display: flex;
  align-items: flex-start;
  min-width: 224px;
`;

const Explore = styled.div`
  ${MontserratBoldWhite16px}
  min-height: 20px;
  min-width: 66px;
  letter-spacing: 0;
`;

const HowItWorks = styled.div`
  ${MontserratSemiBoldMonsoon16px}
  min-height: 20px;
  margin-left: 50px;
  letter-spacing: 0;
`;

export default Text;
