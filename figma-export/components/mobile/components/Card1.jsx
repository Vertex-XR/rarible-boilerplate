import React from "react";
import User from "../User";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratBoldWhite16px2,
  MontserratSemiBoldMonsoon14px,
  MontserratBoldWhite18px,
} from "../../styledMixins";


function Card1(props) {
  const { cryptojunk2181, spanText, spanText2, buyNow, iconHeart, number, userProps } = props;

  return (
    <Card11>
      <User ellipse1={userProps.ellipse1} usernameHere={userProps.usernameHere} className={userProps.className} />
      <Img src="/img/img@2x.svg" />
      <Frame4>
        <Text>
          <CryptoJunk2181>{cryptojunk2181}</CryptoJunk2181>
          <X01ETH11>
            <span className="montserrat-bold-white-16px">{spanText}</span>
            <span className="montserrat-bold-monsoon-16px">{spanText2}</span>
          </X01ETH11>
          <BuyNow src={buyNow} />
        </Text>
        <OverlapGroup>
          <IconHeart src={iconHeart} />
          <Number>{number}</Number>
        </OverlapGroup>
      </Frame4>
    </Card11>
  );
}

const Card11 = styled.div`
  ${Border1pxButtonSecondary}
  width: 336px;
  position: relative;
  margin-left: 19px;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  min-height: 504px;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 296px;
  height: 300px;
  margin-top: 20px;
`;

const Frame4 = styled.div`
  height: 84px;
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  min-width: 296px;
`;

const Text = styled.div`
  width: 171px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 84px;
`;

const CryptoJunk2181 = styled.div`
  ${MontserratBoldWhite18px}
  min-height: 22px;
  letter-spacing: 0;
`;

const X01ETH11 = styled.div`
  ${MontserratBoldWhite16px2}
  min-height: 20px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const BuyNow = styled.img`
  width: 75px;
  height: 16px;
  margin-top: 16px;
  margin-left: 0.5px;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  margin-left: 45px;
  display: flex;
  padding: 1.4px 5px;
  align-items: flex-start;
  min-width: 80px;
  border-radius: 2px;
`;

const IconHeart = styled.img`
  width: 40px;
  height: 36px;
`;

const Number = styled.div`
  ${MontserratSemiBoldMonsoon14px}
  min-height: 17px;
  align-self: center;
  margin-left: 2px;
  margin-bottom: 5px;
  min-width: 19px;
  letter-spacing: 0;
`;

export default Card1;
