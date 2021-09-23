import React from "react";
import styled from "styled-components";


function IconTwitter3(props) {
  const { src } = props;

  return <IconMenu style={{ backgroundImage: `url(${src})` }}></IconMenu>;
}

const IconMenu = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default IconTwitter3;
