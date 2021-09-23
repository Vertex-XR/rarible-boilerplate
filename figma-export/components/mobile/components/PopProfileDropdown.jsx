import React from "react";
import ProfileCard1 from "../ProfileCard1";
import ProfileTabActive from "../ProfileTabActive";
import ProfileTabDefult from "../ProfileTabDefult";
import styled from "styled-components";


function PopProfileDropdown(props) {
  const {
    overlapGroup1,
    profileCard1Props,
    profileTabActiveProps,
    profileTabDefultProps,
    profileTabDefult2Props,
  } = props;

  return (
    <PopProfileDropdown1>
      <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <ProfileCard1
          imgUser={profileCard1Props.imgUser}
          iconChcek={profileCard1Props.iconChcek}
          x0003Eth10={profileCard1Props.x0003Eth10}
          balance={profileCard1Props.balance}
          className={profileCard1Props.className}
        />
        <Frame20>
          <ProfileTabActive
            myItems={profileTabActiveProps.myItems}
            profileTabActive={profileTabActiveProps.profileTabActive}
            className={profileTabActiveProps.className}
          />
          <ProfileTabDefult
            editProfile={profileTabDefultProps.editProfile}
            rectangle133={profileTabDefultProps.rectangle133}
            className={profileTabDefultProps.className}
          />
          <ProfileTabDefult
            editProfile={profileTabDefult2Props.editProfile}
            rectangle133={profileTabDefult2Props.rectangle133}
            className={profileTabDefult2Props.className}
          />
        </Frame20>
      </OverlapGroup1>
    </PopProfileDropdown1>
  );
}

const PopProfileDropdown1 = styled.div`
  height: 269px;
  align-self: flex-end;
  margin-left: 102px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 300px;
`;

const OverlapGroup1 = styled.div`
  width: 340px;
  position: relative;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  padding: 39px 0;
  align-items: center;
  min-height: 309px;
  background-size: 100% 100%;
`;

const Frame20 = styled.div`
  width: 260px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 140px;
`;

export default PopProfileDropdown;
