import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite16px } from "../../styledMixins";


function ButtonOtherActive(props) {
  const { buttonOtherActive, create } = props;

  return (
    <ButtonOtherActive1 style={{ backgroundImage: `url(${buttonOtherActive})` }}>
      <Create>{create}</Create>
    </ButtonOtherActive1>
  );
}

const ButtonOtherActive1 = styled.div`
  height: 50px;
  margin-left: 72px;
  display: flex;
  padding: 0 28px;
  justify-content: flex-end;
  align-items: center;
  min-width: 159px;
  border-radius: 4px;
  background-size: 100% 100%;
`;

const Create = styled.div`
  ${MontserratBoldWhite16px}
  min-height: 20px;
  min-width: 101px;
  letter-spacing: 0;
`;

export default ButtonOtherActive;
