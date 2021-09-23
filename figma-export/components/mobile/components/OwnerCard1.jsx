import React from "react";
import ImgUser from "../ImgUser";
import ButtonMain32 from "../ButtonMain32";
import styled from "styled-components";
import { MontserratBoldWhite16px, MontserratMediumWhite14px } from "../../styledMixins";


function OwnerCard1(props) {
  const { name, spanText, spanText2, spanText3, buttonMain3Props, buttonMain3Props2 } = props;

  return (
    <OwnerCard11>
      <CardInfo>
        <ImgUser imgUser={buttonMain3Props.imgUser} iconChcek={buttonMain3Props.iconChcek} />
        <Text>
          <Name>{name}</Name>
          <Text23>
            <span className="montserrat-medium-monsoon-14px">{spanText}</span>
            <span className="montserrat-bold-white-14px">{spanText2}</span>
            <span className="montserrat-medium-monsoon-14px">{spanText3}</span>
          </Text23>
        </Text>
      </CardInfo>
      <ButtonMain32
        overlapGroup={buttonMain3Props2.overlapGroup}
        createI134649891={buttonMain3Props2.createI134649891}
        className={buttonMain3Props2.className}
      />
    </OwnerCard11>
  );
}

const OwnerCard11 = styled.div`
  height: 92px;
  position: relative;
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
  position: relative;
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

const Text23 = styled.p`
  ${MontserratMediumWhite14px}
  width: 220px;
  min-height: 17px;
  margin-top: 10px;
  letter-spacing: 0;
`;

export default OwnerCard1;
