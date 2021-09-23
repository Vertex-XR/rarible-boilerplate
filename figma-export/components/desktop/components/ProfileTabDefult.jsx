import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite14px } from "../../style-mixins";


function ProfileTabDefult(props) {
  const { editProfile, rectangle133, className } = props;

  return (
    <ProfileTabDefult1 className={`profile-tab-defult ${className || ""}`}>
      <EditProfile className="edit-profile">{editProfile}</EditProfile>
      <Rectangle133 className="rectangle-133" src={rectangle133} />
    </ProfileTabDefult1>
  );
}

const ProfileTabDefult1 = styled.div`
  height: 40px;
  margin-top: 8px;
  margin-left: 5px;
  display: flex;
  padding: 11px 13px;
  align-items: center;
  min-width: 260px;

  &.profile-tab-defult.profile-tab-defult-1 {
    margin-top: 10px;
    margin-left: unset;
  }

  &.profile-tab-defult.profile-tab-defult-2 {
    margin-top: 10px;
    margin-left: unset;
  }

  &.profile-tab-defult.profile-tab-defult-3 {
    margin-top: 10px;
    padding: 11px 8.8px;
    min-width: 175px;
    margin-left: unset;
  }

  &.profile-tab-defult.profile-tab-defult-4 {
    margin-top: 10px;
    padding: 11px 8.8px;
    min-width: 175px;
    margin-left: unset;
  }
`;

const EditProfile = styled.div`
  ${MontserratSemiBoldWhite14px}
  min-height: 17px;
  align-self: flex-end;
  min-width: 83px;
  letter-spacing: 0;
`;

const Rectangle133 = styled.img`
  width: 1px;
  height: 1px;
  margin-left: 34px;
`;

const EditProfileI24160 = styled.div`
  ${MontserratSemiBoldWhite14px}

  .profile-tab-defult.profile-tab-defult-2  & {
    min-width: 84px;
  }
`;

const Rectangle1331 = styled.img`
  .profile-tab-defult.profile-tab-defult-2 & {
    margin-left: 33px;
  }
`;

const EditProfileI24465 = styled.div`
  ${MontserratSemiBoldWhite14px}

  .profile-tab-defult.profile-tab-defult-3  & {
    min-width: 44px;
  }
`;

const EditProfileI244651 = styled.div`
  ${MontserratSemiBoldWhite14px}

  .profile-tab-defult.profile-tab-defult-4  & {
    min-width: 52px;
  }
`;

const Rectangle1332 = styled.img`
  .profile-tab-defult.profile-tab-defult-4 & {
    margin-left: 26px;
  }
`;

export default ProfileTabDefult;
