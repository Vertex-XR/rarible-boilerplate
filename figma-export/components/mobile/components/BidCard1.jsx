import React from "react";
import ImgUser from "../ImgUser";
import styled from "styled-components";
import { MontserratBoldWhite16px2, MontserratMediumMonsoon14px } from "../../style-mixins";


function BidCard1(props) {
  const { spanText, spanText2, spanText3, spanText4, x842021459Pm, imgUserProps } = props;

  return (
    <BidCard11>
      <ImgUser imgUser={imgUserProps.imgUser} iconChcek={imgUserProps.iconChcek} className={imgUserProps.className} />
      <Text>
        <Text24>
          <span className="montserrat-bold-white-16px">{spanText}</span>
          <span className="montserrat-bold-monsoon-16px">{spanText2}</span>
          <span className="montserrat-bold-white-16px">{spanText3}</span>
          <span className="montserrat-bold-monsoon-16px">{spanText4}</span>
        </Text24>
        <X842021459PM>{x842021459Pm}</X842021459PM>
      </Text>
    </BidCard11>
  );
}

const BidCard11 = styled.div`
  height: 92px;
  
  margin-top: 48px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  min-width: 717px;
  background-color: var(--bg--secondary-color);
  border-radius: 4px;
`;

const Text = styled.div`
  width: 417px;
  margin-left: 17px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 47px;
`;

const Text24 = styled.p`
  ${MontserratBoldWhite16px2}
  width: 415px;
  min-height: 20px;
  letter-spacing: 0;
`;

const X842021459PM = styled.div`
  ${MontserratMediumMonsoon14px}
  width: 292px;
  min-height: 17px;
  margin-top: 10px;
  letter-spacing: 0;
`;

export default BidCard1;
