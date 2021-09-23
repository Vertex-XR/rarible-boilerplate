import React from "react";
import DropDown1 from "../DropDown1";
import styled from "styled-components";


function Heading(props) {
  const { title, dropDown1Props } = props;

  return (
    <Heading1>
      <Title>{title}</Title>
      <DropDown1 text2={dropDown1Props.text2} iconArrow={dropDown1Props.iconArrow} />
    </Heading1>
  );
}

const Heading1 = styled.div`
  height: 60px;
  position: relative;
  align-self: flex-start;
  margin-top: 113px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  min-width: 1760px;
`;

const Title = styled.h1`
  min-height: 39px;
  min-width: 129px;
  font-family: var(--font-family-montserrat);
  color: var(--text--main-color);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

export default Heading;
