import React from "react";
import styled from "styled-components";


function ProfileTabActive(props) {
  const { myItems, profileTabActive, className } = props;

  return (
    <ProfileTabActive1
      className={`profile-tab-active ${className || ""}`}
      style={{ backgroundImage: `url(${profileTabActive})` }}
    >
      <MyItems className="my-items" src={myItems} />
    </ProfileTabActive1>
  );
}

const ProfileTabActive1 = styled.div`
  height: 40px;
  margin-top: 46px;
  margin-left: 5px;
  display: flex;
  padding: 13px 14px;
  align-items: flex-end;
  min-width: 260px;
  background-size: 100% 100%;

  &.profile-tab-active.profile-tab-active-1 {
    margin-top: unset;
    margin-left: unset;
  }
`;

const MyItems = styled.img`
  width: 65px;
  height: 13px;
`;

export default ProfileTabActive;
