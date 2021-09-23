import React from "react";
import styled from "styled-components";


function Explore(props) {
  const { explore } = props;

  return (
    <Explore1>
      <Explore2>{explore}</Explore2>
      <Line1 src="/img/line-1@2x.svg" />
    </Explore1>
  );
}

const Explore1 = styled.div`
  width: 345px;
  margin-top: 39px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 44px;
`;

const Explore2 = styled.div`
  min-height: 24px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--text--main-color);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

const Line1 = styled.img`
  width: 345px;
  height: 1px;
  margin-top: 20px;
`;

export default Explore;
