import React from "react";
import styled from "styled-components";


function ProfileTabActive2(props) {
  const { overlapGroup, myItems } = props;

  return (
    <ProfileTabActive>
      <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
        <MyItems src={myItems} />
      </OverlapGroup>
    </ProfileTabActive>
  );
}

const ProfileTabActive = styled.div`
  height: 40px;
  margin-top: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 175px;
`;

const OverlapGroup = styled.div`
  height: 41px;
  margin-top: -0.5px;
  display: flex;
  padding: 14px 9.8px;
  align-items: flex-end;
  min-width: 175px;
  background-size: 100% 100%;
`;

const MyItems = styled.img`
  width: 59px;
  height: 12px;
`;

export default ProfileTabActive2;
