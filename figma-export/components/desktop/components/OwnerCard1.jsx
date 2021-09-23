import React from "react";
import ImgUser from "../ImgUser";
import ButtonMain3 from "../ButtonMain3";
import styled from "styled-components";
import { MontserratBoldWhite16px } from "../../style-mixins";


function OwnerCard1(props) {
  const { name, spanText, spanText2, spanText3, buttonMain3Props, buttonMain3Props2 } = props;

  return (
    <OwnerCard11>
      <CardInfo>
        <ImgUser imgUser={buttonMain3Props.imgUser} iconChcek={buttonMain3Props.iconChcek} />
        <Text>
          <Name>{name}</Name>
          <Text14>
            <span className="montserrat-medium-monsoon-14px">{spanText}</span>
            <span className="montserrat-bold-white-14px">{spanText2}</span>
            <span className="montserrat-medium-monsoon-14px">{spanText3}</span>
          </Text14>
        </Text>
      </CardInfo>
      <ButtonMain3
        overlapGroup={buttonMain3Props2.overlapGroup}
        createI134649891={buttonMain3Props2.createI134649891}
      />
    </OwnerCard11>
  );
}

const OwnerCard11 = styled.div`
  height: 92px;
  
  margin-top: 104px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  min-width: 716px;
  background-color: var(--bg--secondary-color);
  border-radius: 4px;
`;

const CardInfo = styled.div`
  height: 60px;
  
  display: flex;
  align-items: center;
  min-width: 295px;
`;

const Text = styled.div`
  width: 222px;
  margin-left: 17px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 47px;
`;

const Name = styled.div`
  ${MontserratBoldWhite16px}
  width: 148px;
  min-height: 20px;
  letter-spacing: 0;
`;

const Text14 = styled.p`
  width: 220px;
  min-height: 17px;
  margin-top: 10px;
  
  font-weight: 500;
  color: transparent;
  font-size: var(--font-size-s);
  letter-spacing: 0;
`;

export default OwnerCard1;
