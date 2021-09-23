import React from "react";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratSemiBoldMonsoon16px,
  MontserratSemiBoldWhite16px,
  MontserratMediumMonsoon16px,
} from "../../style-mixins";


function InputFieldSimpleRoyalties(props) {
  const { royalties, number, text10, text11 } = props;

  return (
    <InputFieldSimpleRoyalties1>
      <Royalties>{royalties}</Royalties>
      <OverlapGroup>
        <Number>{number}</Number>
        <Text19>{text10}</Text19>
      </OverlapGroup>
      <Text20>{text11}</Text20>
    </InputFieldSimpleRoyalties1>
  );
}

const InputFieldSimpleRoyalties1 = styled.div`
  width: 536px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 121px;
`;

const Royalties = styled.div`
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
  min-width: 538px;
  border-radius: 4px;
`;

const Number = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 23px;
  letter-spacing: 0;
`;

const Text19 = styled.div`
  ${MontserratSemiBoldMonsoon16px}
  min-height: 20px;
  margin-left: 459px;
  letter-spacing: 0;
`;

const Text20 = styled.p`
  ${MontserratSemiBoldMonsoon16px}
  min-height: 20px;
  margin-top: 10px;
  margin-left: -0.5px;
  letter-spacing: 0;
`;

export default InputFieldSimpleRoyalties;
