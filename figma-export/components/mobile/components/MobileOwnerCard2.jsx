import React from "react";
import ButtonMain32 from "../ButtonMain32";
import styled from "styled-components";
import { MontserratBoldWhite16px, MontserratMediumWhite14px } from "../../style-mixins";


function MobileOwnerCard2(props) {
  const { overlapGroup, name, spanText, spanText2, spanText3, buttonMain32Props } = props;

  return (
    <MobileOwnerCard21>
      <CardInfo>
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <IconChcek src="/img/icon---chcek-@2x.svg" />
        </OverlapGroup>
        <Text>
          <Name>{name}</Name>
          <Text9>
            <span className="montserrat-medium-monsoon-14px">{spanText}</span>
            <span className="montserrat-bold-white-14px">{spanText2}</span>
            <span className="montserrat-medium-monsoon-14px">{spanText3}</span>
          </Text9>
        </Text>
      </CardInfo>
      <ButtonMain32
        overlapGroup={buttonMain32Props.overlapGroup}
        createI134649891={buttonMain32Props.createI134649891}
      />
    </MobileOwnerCard21>
  );
}

const MobileOwnerCard21 = styled.div`
  height: 97px;
  
  margin-top: 29px;
  margin-right: 15px;
  display: flex;
  padding: 0 11.9px;
  align-items: center;
  min-width: 345px;
  background-color: var(--bg--secondary-color);
  border-radius: 4px;
`;

const CardInfo = styled.div`
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 236px;
`;

const OverlapGroup = styled.div`
  height: 60px;
  margin-top: 2.5px;
  display: flex;
  padding: 1.3px 2.8px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 60px;
  background-size: cover;
  background-position: 50% 50%;
`;

const IconChcek = styled.img`
  width: 15px;
  height: 14px;
`;

const Text = styled.div`
  width: 163px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 65px;
`;

const Name = styled.div`
  ${MontserratBoldWhite16px}
  width: 139px;
  min-height: 20px;
  letter-spacing: 0;
`;

const Text9 = styled.p`
  ${MontserratMediumWhite14px}
  width: 161px;
  min-height: 40px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default MobileOwnerCard2;
