import React from "react";
import styled from "styled-components";
import { MontserratMediumMonsoon12px, MontserratBoldWhite14px } from "../../styledMixins";


function ProfileCard1(props) {
  const { imgUser, iconChcek, x0003Eth10, balance, className } = props;

  return (
    <ProfileCard11 className={`profile-card-1 ${className || ""}`}>
      <ImgUser className="img-user-1" style={{ backgroundImage: `url(${imgUser})` }}>
        <IconChcek className="icon-chcek-1" src={iconChcek} />
      </ImgUser>
      <Text className="text-4">
        <X0003ETH10 className="x0003-eth-10">{x0003Eth10}</X0003ETH10>
        <Balance className="balance">{balance}</Balance>
      </Text>
    </ProfileCard11>
  );
}

const ProfileCard11 = styled.div`
  height: 64px;
  margin-right: 5px;
  display: flex;
  padding: 0 12.5px;
  justify-content: flex-end;
  align-items: center;
  min-width: 260px;
  background-color: var(--bg--main-color);
  border-radius: 4px;

  &.profile-card-1.profile-card-2 {
    margin-right: unset;
  }
`;

const ImgUser = styled.div`
  height: 44px;
  display: flex;
  padding: 1.1px 1.8px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 44px;
  background-size: cover;
  background-position: 50% 50%;
`;

const IconChcek = styled.img`
  width: 11px;
  height: 10px;
`;

const Text = styled.div`
  width: 172px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 38px;
`;

const X0003ETH10 = styled.div`
  ${MontserratBoldWhite14px}
  width: 170px;
  min-height: 17px;
  letter-spacing: 0;
`;

const Balance = styled.div`
  ${MontserratMediumMonsoon12px}
  width: 154px;
  min-height: 15px;
  margin-top: 6px;
  letter-spacing: 0;
`;

export default ProfileCard1;
