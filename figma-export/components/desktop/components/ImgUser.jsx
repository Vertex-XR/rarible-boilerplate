import React from "react";
import styled from "styled-components";


function ImgUser(props) {
  const { imgUser, iconChcek, className } = props;

  return (
    <ImgUser1 className={`img-user ${className || ""}`} style={{ backgroundImage: `url(${imgUser})` }}>
      <IconChcek className="icon-chcek" src={iconChcek} />
    </ImgUser1>
  );
}

const ImgUser1 = styled.div`
  height: 60px;
  display: flex;
  padding: 1.3px 3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 60px;
  background-size: cover;
  background-position: 50% 50%;
`;

const IconChcek = styled.img`
  width: 14px;
  height: 14px;
`;

export default ImgUser;
