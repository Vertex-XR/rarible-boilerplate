import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldMonsoon14px } from "../../styledMixins";


function User(props) {
  const { ellipse1, usernameHere, className } = props;

  return (
    <User1 className={`user ${className || ""}`}>
      <Ellipse1 className="ellipse-1" src={ellipse1} />
      <Usernamehere className="usernamehere">{usernameHere}</Usernamehere>
    </User1>
  );
}

const User1 = styled.div`
  margin-right: 110px;
  display: flex;
  align-items: center;
  min-width: 186px;

  &.user.user-1 {
    align-self: flex-start;
    margin-left: 20px;
    margin-right: unset;
  }
`;

const Ellipse1 = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Usernamehere = styled.div`
  ${MontserratSemiBoldMonsoon14px}
  width: 126px;
  min-height: 16px;
  margin-left: 22px;
  letter-spacing: 0;
`;

export default User;
