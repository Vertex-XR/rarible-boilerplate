import React from "react";
import IconTwitter from "../IconTwitter";
import IconTwitter32 from "../IconTwitter32";
import IconTwitter4 from "../IconTwitter4";
import IconTwitter5 from "../IconTwitter5";
import ButtonMain from "../ButtonMain";
import ButtonMain2 from "../ButtonMain2";
import IconTwitter62 from "../IconTwitter62";
import styled from "styled-components";


function IconButton(props) {
  const {
    iconTwitterProps,
    iconTwitter32Props,
    iconTwitter4Props,
    iconTwitter5Props,
    buttonMainProps,
    buttonMain2Props,
    iconTwitter62Props,
  } = props;

  return (
    <IconButton1>
      <SocialIcon>
        <IconTwitter iconTwitter2Props={iconTwitterProps.iconTwitter2Props} />
        <IconTwitter32 iconInstagramProps={iconTwitter32Props.iconInstagramProps} />
        <IconTwitter4 iconShareProps={iconTwitter4Props.iconShareProps} />
        <IconTwitter5 iconDiscordProps={iconTwitter5Props.iconDiscordProps} />
      </SocialIcon>
      <Button>
        <ButtonMain
          buttonPrimery={buttonMainProps.buttonPrimery}
          text6={buttonMainProps.text6}
          className={buttonMainProps.className}
        />
        <ButtonMain2>{buttonMain2Props.children}</ButtonMain2>
      </Button>
      <IconTwitter62 className={iconTwitter62Props.className} iconModeProps={iconTwitter62Props.iconModeProps} />
    </IconButton1>
  );
}

const IconButton1 = styled.div`
  position: relative;
  margin-left: 74px;
  display: flex;
  align-items: flex-start;
  min-width: 604px;
`;

const SocialIcon = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 220px;
`;

const Button = styled.div`
  height: 40px;
  position: relative;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 304px;
`;

export default IconButton;
