import React from "react";
import ProfileTabActive2 from "../ProfileTabActive2";
import ProfileTabDefult2 from "../ProfileTabDefult2";
import ProfileTabDefult from "../ProfileTabDefult";
import styled from "styled-components";


function PopupThreeDots(props) {
  const {
    overlapGroup3,
    profileTabDefult2Props,
    profileTabDefult2Props2,
    profileTabDefult22Props,
    profileTabDefultProps,
    profileTabDefult2Props22,
  } = props;

  return (
    <PopupThreeDots1>
      <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <ProfileTabActive2
          overlapGroup={profileTabDefult2Props.overlapGroup}
          myItems={profileTabDefult2Props.myItems}
        />
        <ProfileTabDefult2
          rectangle133={profileTabDefult2Props2.rectangle133}
          editProfileI24465={profileTabDefult2Props2.editProfileI24465}
        />
        <ProfileTabDefult2
          rectangle133={profileTabDefult22Props.rectangle133}
          editProfileI24465={profileTabDefult22Props.editProfileI24465}
          className={profileTabDefult22Props.className}
        />
        <ProfileTabDefult
          editProfile={profileTabDefultProps.editProfile}
          rectangle133={profileTabDefultProps.rectangle133}
          className={profileTabDefultProps.className}
        />
        <ProfileTabDefult
          editProfile={profileTabDefult2Props22.editProfile}
          rectangle133={profileTabDefult2Props22.rectangle133}
          className={profileTabDefult2Props22.className}
        />
      </OverlapGroup3>
    </PopupThreeDots1>
  );
}

const PopupThreeDots1 = styled.div`
  height: 279px;
  margin-left: 79px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 215px;
`;

const OverlapGroup3 = styled.div`
  width: 255px;
  position: relative;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  padding: 38.9px 0;
  align-items: center;
  min-height: 319px;
  background-size: 100% 100%;
`;

export default PopupThreeDots;
