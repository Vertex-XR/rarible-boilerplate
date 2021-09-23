import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite14px } from "../../style-mixins";


function ProfileTabDefult2(props) {
  const { rectangle133, editProfileI24465, className } = props;

  return (
    <ProfileTabDefult className={`profile-tab-defult-5 ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-1">
        <Rectangle133 className="rectangle-133-1" src={rectangle133} />
        <EditProfileI24465 className="edit-profile-i24465">{editProfileI24465}</EditProfileI24465>
      </OverlapGroup1>
    </ProfileTabDefult>
  );
}

const ProfileTabDefult = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;
  padding: 11px 8.8px;
  align-items: flex-end;
  min-width: 175px;
`;

const OverlapGroup1 = styled.div`
  width: 107px;
  height: 17px;
  
`;

const Rectangle133 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 8px;
  left: 78px;
`;

const EditProfileI24465 = styled.div`
  ${MontserratSemiBoldWhite14px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  .profile-tab-defult-5.profile-tab-defult-6 & {
    width: 131px;
  }
`;

export default ProfileTabDefult2;
