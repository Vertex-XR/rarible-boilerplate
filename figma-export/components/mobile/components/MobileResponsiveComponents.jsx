import React from "react";
import NavBarMobile1 from "../NavBarMobile1";
import NavBarMobile2 from "../NavBarMobile2";
import HeadingMobile1 from "../HeadingMobile1";
import Explore from "../Explore";
import MobileInputFieldDropDown from "../MobileInputFieldDropDown";
import MobileInputFieldSimpleTitle from "../MobileInputFieldSimpleTitle";
import MobileInputFieldSimpleDescription from "../MobileInputFieldSimpleDescription";
import MobileInputFieldSimpleRoyalties from "../MobileInputFieldSimpleRoyalties";
import MobileInputFieldSimpleNumberOfCopie from "../MobileInputFieldSimpleNumberOfCopie";
import MobileInputFieldTwitterUsername from "../MobileInputFieldTwitterUsername";
import MobileOwnerCard2 from "../MobileOwnerCard2";
import MobileInputFieldEnterQuantity from "../MobileInputFieldEnterQuantity";
import MobileInputFieldEnterQuantity2 from "../MobileInputFieldEnterQuantity2";
import "./MobileResponsiveComponents.css";

function MobileResponsiveComponents(props) {
  const {
    navBarMobile1Props,
    navBarMobile2Props,
    headingMobile1Props,
    exploreProps,
    mobileInputFieldDropDownProps,
    mobileInputFieldSimpleTitleProps,
    mobileInputFieldSimpleDescriptionPr,
    mobileInputFieldSimpleRoyaltiesProp,
    mobileInputFieldSimpleNumberOfCopie,
    mobileInputFieldTwitterUsernameProp,
    mobileOwnerCard2Props,
    mobileInputFieldEnterQuantityProps,
    mobileInputFieldEnterQuantity2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-responsive-components screen">
        <NavBarMobile1
          logo={navBarMobile1Props.logo}
          iconTwitter62Props={navBarMobile1Props.iconTwitter62Props}
          iconTwitter622Props={navBarMobile1Props.iconTwitter622Props}
          iconTwitter2Props={navBarMobile1Props.iconTwitter2Props}
        />
        <NavBarMobile2
          logo={navBarMobile2Props.logo}
          iconTwitter62Props={navBarMobile2Props.iconTwitter62Props}
          iconTwitter622Props={navBarMobile2Props.iconTwitter622Props}
          iconTwitter2Props={navBarMobile2Props.iconTwitter2Props}
          iconTwitter3Props={navBarMobile2Props.iconTwitter3Props}
        />
        <HeadingMobile1 explore={headingMobile1Props.explore} recentlyAdded={headingMobile1Props.recentlyAdded} />
        <Explore explore={exploreProps.explore} />
        <MobileInputFieldDropDown
          text1={mobileInputFieldDropDownProps.text1}
          x50Eth={mobileInputFieldDropDownProps.x50Eth}
          place={mobileInputFieldDropDownProps.place}
        />
        <MobileInputFieldSimpleTitle
          title={mobileInputFieldSimpleTitleProps.title}
          text4={mobileInputFieldSimpleTitleProps.text4}
        />
        <MobileInputFieldSimpleDescription
          text3={mobileInputFieldSimpleDescriptionPr.text3}
          text2={mobileInputFieldSimpleDescriptionPr.text2}
        />
        <MobileInputFieldSimpleRoyalties
          royalties={mobileInputFieldSimpleRoyaltiesProp.royalties}
          number={mobileInputFieldSimpleRoyaltiesProp.number}
          text5={mobileInputFieldSimpleRoyaltiesProp.text5}
          text6={mobileInputFieldSimpleRoyaltiesProp.text6}
        />
        <MobileInputFieldSimpleNumberOfCopie
          royalties={mobileInputFieldSimpleNumberOfCopie.royalties}
          x20={mobileInputFieldSimpleNumberOfCopie.x20}
          suggested010={mobileInputFieldSimpleNumberOfCopie.suggested010}
        />
        <MobileInputFieldTwitterUsername
          royalties={mobileInputFieldTwitterUsernameProp.royalties}
          themadbrains={mobileInputFieldTwitterUsernameProp.themadbrains}
        />
        <MobileOwnerCard2
          overlapGroup={mobileOwnerCard2Props.overlapGroup}
          name={mobileOwnerCard2Props.name}
          spanText={mobileOwnerCard2Props.spanText}
          spanText2={mobileOwnerCard2Props.spanText2}
          spanText3={mobileOwnerCard2Props.spanText3}
          buttonMain32Props={mobileOwnerCard2Props.buttonMain32Props}
        />
        <MobileInputFieldEnterQuantity
          x20={mobileInputFieldEnterQuantityProps.x20}
          text7={mobileInputFieldEnterQuantityProps.text7}
        />
        <MobileInputFieldEnterQuantity2
          x20={mobileInputFieldEnterQuantity2Props.x20}
          text8={mobileInputFieldEnterQuantity2Props.text8}
        />
      </div>
    </div>
  );
}

export default MobileResponsiveComponents;
