// import MobileResponsiveComponents from "./components/MobileResponsiveComponents";
// import IconMode from "./components/IconMode";
// import IconHamburgerManu from "./components/IconHamburgerManu";
import LogoSearch from './components/LogoSearch'
import Text from './components/Text'
import IconButton from './components/IconButton'
import IconTwitter from './components/IconTwitter'
import IconTwitter2 from './components/IconTwitter2'
// import IconTwitter22 from "./components/IconTwitter22";
import IconInstagram from './components/IconInstagram'
import IconShare from './components/IconShare'
import IconDiscord from './components/IconDiscord'
import ButtonMain from './components/ButtonMain'
import ButtonMain2 from './components/ButtonMain2'
import IconMode from './components/IconMode'
import Heading from './components/Heading'
import DropDown1 from './components/DropDown1'
import User from './components/User'
import IconHamburgerManu from './components/IconHamburgerManu'
import IconHamburgerManu2 from './components/IconHamburgerManu2'
import ButtonOtherActive from './components/ButtonOtherActive'
import ButtonOtherDefult from './components/ButtonOtherDefult'
import TabActive from './components/TabActive'
import TabDefult from './components/TabDefult'
import ButtonLoad from './components/ButtonLoad'
import InputFieldDropDown from './components/InputFieldDropDown'
import InputFieldSimpleTitle from './components/InputFieldSimpleTitle'
import InputFieldSimpleDescription from './components/InputFieldSimpleDescription'
import InputFieldSimpleRoyalties from './components/InputFieldSimpleRoyalties'
import InputFieldSimpleTitle2 from './components/InputFieldSimpleTitle2'
import InputFieldTwitterUsername from './components/InputFieldTwitterUsername'
import OwnerCard1 from './components/OwnerCard1'
import BidCard1 from './components/BidCard1'
import ProfileCard1 from './components/ProfileCard1'
import ProfileTabActive from './components/ProfileTabActive'
import ProfileTabDefult from './components/ProfileTabDefult'
import PopProfileDropdown from './components/PopProfileDropdown'
import PopupThreeDots from './components/PopupThreeDots'
import Card1 from './components/Card1'

function App() {
  return (
    <div>
      <NavBar2>
        <LogoSearch />
        <Text />
        <IconButton
          iconTwitterProps={iconButtonData.iconTwitterProps}
          iconTwitter3Props={iconButtonData.iconTwitter3Props}
          iconTwitter4Props={iconButtonData.iconTwitter4Props}
          iconTwitter5Props={iconButtonData.iconTwitter5Props}
          buttonMainProps={iconButtonData.buttonMainProps}
          buttonMain2Props={iconButtonData.buttonMain2Props}
          iconTwitter6Props={iconButtonData.iconTwitter6Props}
        />
      </NavBar2>
      <NavBar1>
        <LogoSearch className="logo-search-1" />
        <Text />
        <IconButton
          iconTwitterProps={iconButton2Data.iconTwitterProps}
          iconTwitter3Props={iconButton2Data.iconTwitter3Props}
          iconTwitter4Props={iconButton2Data.iconTwitter4Props}
          iconTwitter5Props={iconButton2Data.iconTwitter5Props}
          buttonMainProps={iconButton2Data.buttonMainProps}
          buttonMain2Props={iconButton2Data.buttonMain2Props}
          iconTwitter6Props={iconButton2Data.iconTwitter6Props}
        />
      </NavBar1>
      <NavBar3 src="/img/nav-bar---3@1x.png" />
      <Heading title="Explore" dropDown1Props={headingData.dropDown1Props} />
      <FlexRow>
        <FlexCol>
          <User ellipse1="/img/ellipse-1@2x.png" usernameHere="@username.here" />
          <FlexRow1>
            <FlexCol1>
              <IconTwitter iconTwitter2Props={iconTwitter8Data.iconTwitter2Props} />
              <FlexRow2>
                <IconTwitter2 src="/img/vector@2x.svg" className="icon-twitter-2" />
                <IconInstagram src="/img/group-1@2x.svg" className="icon-instagram-2" />
                <IconShare src="/img/group-2@2x.svg" className="icon-share-2" />
                <IconDiscord src="/img/group@2x.svg" className="icon-discord-2" />
                <IconMode src="/img/group-3@2x.svg" className="icon-mode-1" />
                <IconMode src="/img/icon---search@2x.svg" className="icon-search-1" />
                <IconHamburgerManu src="/img/icon---menu@2x.svg" />
                <IconHamburgerManu2 src="/img/vector-2@2x.svg" />
              </FlexRow2>
              <FlexRow3>
                <ButtonMain
                  buttonPrimery="/img/button---main@2x.svg"
                  text6="Create"
                  className="button-main"
                />
                <ButtonOtherActive
                  buttonOtherActive="/img/button---other-active@2x.svg"
                  create="Create Item"
                />
              </FlexRow3>
              <FlexRow4>
                <ButtonMain2 className="button-main-3">Connect wallet</ButtonMain2>
                <ButtonOtherDefult>Connect wallet</ButtonOtherDefult>
              </FlexRow4>
              <FlexRow5>
                <DropDown1
                  text2="Recently Added"
                  iconArrow="/img/icon---arrow@2x.svg"
                  className="drop-down-1"
                />
                <TabActive onSale="On sale" rectangle125="/img/rectangle-125@2x.svg" />
                <TabDefult>On sale</TabDefult>
              </FlexRow5>
            </FlexCol1>
            <Img src="/img/img@2x.svg" />
          </FlexRow1>
          <FlexCol2>
            <ButtonLoad
              iconRefresh="/img/icon---refresh@2x.svg"
              loadMoreItems="Load more items"
            />
            <InputFieldDropDown
              text8="Enter price for one piece"
              x50Eth="5.0 ETH"
              place="ETH"
              iconArrowProps={inputFieldDropDownData.iconArrowProps}
            />
            <InputFieldSimpleTitle
              title="Title"
              text9="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <InputFieldSimpleDescription
              text13="Description (Optional)"
              text12="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset too good."
            />
            <FlexRow6>
              <InputFieldSimpleRoyalties
                royalties="Royalties"
                number="20"
                text10="%"
                text11="Suggested: 0%, 10%, 20%, 30%, Maximum is 50%"
              />
              <InputFieldSimpleTitle2 royalties="Royalties" number="20" />
            </FlexRow6>
            <InputFieldTwitterUsername
              twitterUsername="Twitter Username"
              themadbrains="@themadbrains"
              link="/img/link@2x.svg"
            />
            <OwnerCard1
              name="Katherine Moss"
              spanText="1 / 1 on sale for "
              spanText2="0.004 ETH"
              spanText3=" each"
              buttonMain3Props={ownerCard1Data.buttonMain3Props}
              buttonMain3Props2={ownerCard1Data.buttonMain3Props2}
            />
            <BidCard1
              spanText="0.01 RARI "
              spanText2="by"
              spanText3=" Living - NFT - Showcase "
              spanText4="for 1 edition"
              x842021459Pm="8/4/2021, 4:59 PM"
              imgUserProps={bidCard1Data.imgUserProps}
            />
            <FlexRow7>
              <FlexCol3>
                <ProfileCard1
                  imgUser="/img/ellipse-2-2@2x.png"
                  iconChcek="/img/icon---chcek--2@2x.svg"
                  x0003Eth10="0.003 ETH $10"
                  balance="Balance"
                />
                <ProfileTabActive
                  profileTabActive="/img/rectangle-133@2x.svg"
                  myItems="/img/my-items@2x.svg"
                />
                <ProfileTabDefult
                  editProfile="Edit Profile"
                  rectangle133="/img/rectangle-133@2x.png"
                />
              </FlexCol3>
              <PopProfileDropdown
                overlapGroup1="/img/union@2x.svg"
                profileCard1Props={popProfileDropdownData.profileCard1Props}
                profileTabActiveProps={popProfileDropdownData.profileTabActiveProps}
                profileTabDefultProps={popProfileDropdownData.profileTabDefultProps}
                profileTabDefult2Props={popProfileDropdownData.profileTabDefult2Props}
              />
              <PopupThreeDots
                overlapGroup3="/img/union-1@2x.svg"
                profileTabDefult2Props={popupThreeDotsData.profileTabDefult2Props}
                profileTabDefult2Props2={popupThreeDotsData.profileTabDefult2Props2}
                profileTabDefult22Props={popupThreeDotsData.profileTabDefult22Props}
                profileTabDefultProps={popupThreeDotsData.profileTabDefultProps}
                profileTabDefult2Props22={popupThreeDotsData.profileTabDefult2Props22}
              />
            </FlexRow7>
          </FlexCol2>
        </FlexCol>
        <Card1
          cryptojunk2181="CryptoJunk #2181"
          spanText="0.1 ETH "
          spanText2="1/1"
          buyNow="/img/buy-now@2x.svg"
          iconHeart="/img/icon---heart@2x.svg"
          number="22"
          userProps={card1Data.userProps}
        />
      </FlexRow>
    </div>
  )
}

export default App
const NavBar2 = styled.div`
  height: 98px;

  margin-right: 5px;
  display: flex;
  padding: 0 80px;
  align-items: center;
  min-width: 1921px;
  background-color: var(--bg--secondary-color);
`

const NavBar1 = styled.div`
  height: 98px;

  margin-top: 67px;
  margin-right: 4px;
  display: flex;
  padding: 0 80px;
  align-items: center;
  min-width: 1921px;
  background-color: var(--bg--secondary-color);
`

const NavBar3 = styled.img`
  width: 1921px;
  height: 98px;
  margin-top: 80px;
  margin-right: 4px;
`

const FlexRow = styled.div`
  height: 2008px;

  align-self: flex-start;
  margin-top: 124px;
  display: flex;
  align-items: flex-start;
  min-width: 1623px;
`

const FlexCol = styled.div`
  width: 1268px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 2008px;
`

const FlexRow1 = styled.div`
  height: 332px;
  margin-top: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 1248px;
`

const FlexCol1 = styled.div`
  width: 478px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 332px;
`

const FlexRow2 = styled.div`
  height: 24px;

  margin-top: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 298px;
`

const FlexRow3 = styled.div`
  height: 50px;

  margin-top: 29px;
  display: flex;
  align-items: flex-start;
  min-width: 338px;
`

const FlexRow4 = styled.div`
  height: 50px;

  margin-top: 25px;
  display: flex;
  align-items: flex-start;
  min-width: 395px;
`

const FlexRow5 = styled.div`
  height: 60px;

  margin-top: 36px;
  display: flex;
  align-items: center;
  min-width: 478px;
`

const Img = styled.img`
  width: 296px;
  height: 300px;
  margin-left: 474px;
  margin-bottom: 2px;
`

const FlexCol2 = styled.div`
  width: 1151px;

  align-self: flex-start;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1592px;
`

const FlexRow6 = styled.div`
  height: 121px;

  align-self: flex-end;
  margin-top: 35px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`

const FlexRow7 = styled.div`
  height: 281px;

  margin-top: 43px;
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 961px;
`

const FlexCol3 = styled.div`
  width: 265px;

  align-self: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 198px;
`
const iconTwitter2Data = {
  src: '/img/vector-3@2x.svg',
}

const iconTwitterData = {
  iconTwitter2Props: iconTwitter2Data,
}

const iconInstagramData = {
  src: '/img/group-1@2x.svg',
}

const iconTwitter3Data = {
  iconInstagramProps: iconInstagramData,
}

const iconShareData = {
  src: '/img/group-2@2x.svg',
}

const iconTwitter4Data = {
  iconShareProps: iconShareData,
}

const iconDiscordData = {
  src: '/img/group@2x.svg',
}

const iconTwitter5Data = {
  iconDiscordProps: iconDiscordData,
}

const buttonMainData = {
  buttonPrimery: '/img/button---main@2x.svg',
  text6: 'Create',
  className: '',
}

const buttonMain2Data = {
  children: 'Connect wallet',
}

const iconModeData = {
  src: '/img/group-5@2x.svg',
}

const iconTwitter6Data = {
  iconModeProps: iconModeData,
}

const iconButtonData = {
  iconTwitterProps: iconTwitterData,
  iconTwitter3Props: iconTwitter3Data,
  iconTwitter4Props: iconTwitter4Data,
  iconTwitter5Props: iconTwitter5Data,
  buttonMainProps: buttonMainData,
  buttonMain2Props: buttonMain2Data,
  iconTwitter6Props: iconTwitter6Data,
}

const iconTwitter22Data = {
  src: '/img/vector-3@2x.svg',
}

const iconTwitter7Data = {
  iconTwitter2Props: iconTwitter22Data,
}

const iconInstagram2Data = {
  src: '/img/group-1@2x.svg',
}

const iconTwitter32Data = {
  iconInstagramProps: iconInstagram2Data,
}

const iconShare2Data = {
  src: '/img/group-2@2x.svg',
}

const iconTwitter42Data = {
  iconShareProps: iconShare2Data,
}

const iconDiscord2Data = {
  src: '/img/group@2x.svg',
}

const iconTwitter52Data = {
  iconDiscordProps: iconDiscord2Data,
}

const buttonMain3Data = {
  buttonPrimery: '/img/button---main@2x.svg',
  text6: 'Create',
  className: 'button-primery-1',
}

const buttonMain22Data = {
  children: 'Connect wallet',
  className: 'button-main-2',
}

const iconMode2Data = {
  src: '/img/group-5@2x.svg',
}

const iconTwitter62Data = {
  iconModeProps: iconMode2Data,
}

const iconButton2Data = {
  iconTwitterProps: iconTwitter7Data,
  iconTwitter3Props: iconTwitter32Data,
  iconTwitter4Props: iconTwitter42Data,
  iconTwitter5Props: iconTwitter52Data,
  buttonMainProps: buttonMain3Data,
  buttonMain2Props: buttonMain22Data,
  iconTwitter6Props: iconTwitter62Data,
}

const dropDown1Data = {
  text2: 'Recently Added',
  iconArrow: '/img/icon---arrow@2x.svg',
}

const headingData = {
  dropDown1Props: dropDown1Data,
}

const iconTwitter23Data = {
  src: '/img/vector@2x.svg',
}

const iconTwitter8Data = {
  iconTwitter2Props: iconTwitter23Data,
}

const iconArrowData = {
  src: '/img/op-component-2@2x.svg',
}

const inputFieldDropDownData = {
  iconArrowProps: iconArrowData,
}

const imgUserData = {
  imgUser: '/img/ellipse-2@2x.png',
  iconChcek: '/img/icon---chcek-@2x.svg',
}

const buttonMain32Data = {
  overlapGroup: '/img/button---main@2x.svg',
  createI134649891: 'Buy',
}

const ownerCard1Data = {
  buttonMain3Props: imgUserData,
  buttonMain3Props2: buttonMain32Data,
}

const imgUser2Data = {
  imgUser: '/img/ellipse-2@2x.png',
  iconChcek: '/img/icon---chcek-@2x.svg',
  className: 'icon-twitter-2',
}

const bidCard1Data = {
  imgUserProps: imgUser2Data,
}

const profileCard1Data = {
  imgUser: '/img/ellipse-2-2@2x.png',
  iconChcek: '/img/icon---chcek--2@2x.svg',
  x0003Eth10: '0.003 ETH $10',
  balance: 'Balance',
  className: 'profile-card-2',
}

const profileTabActiveData = {
  myItems: '/img/rectangle-133@2x.svg',
  profileTabActive: '/img/my-items@2x.svg',
  className: 'profile-tab-active-1',
}

const profileTabDefultData = {
  editProfile: 'Edit Profile',
  rectangle133: '/img/rectangle-133@2x.png',
  className: 'profile-tab-defult-1',
}

const profileTabDefult2Data = {
  editProfile: 'Disconnect',
  rectangle133: '/img/rectangle-133@2x.png',
  className: 'profile-tab-defult-2',
}

const popProfileDropdownData = {
  profileCard1Props: profileCard1Data,
  profileTabActiveProps: profileTabActiveData,
  profileTabDefultProps: profileTabDefultData,
  profileTabDefult2Props: profileTabDefult2Data,
}

const profileTabActive2Data = {
  overlapGroup: '/img/rectangle-133-5@2x.svg',
  myItems: '/img/my-items-2@2x.svg',
}

const profileTabDefult22Data = {
  rectangle133: '/img/rectangle-133@2x.png',
  editProfileI24465: 'Purchase Now',
}

const profileTabDefult23Data = {
  rectangle133: '/img/rectangle-133@2x.png',
  editProfileI24465: 'View On Opensea',
  className: 'profile-tab-defult-6',
}

const profileTabDefult3Data = {
  editProfile: 'Share',
  rectangle133: '/img/rectangle-133@2x.png',
  className: 'profile-tab-defult-3',
}

const profileTabDefult4Data = {
  editProfile: 'Report',
  rectangle133: '/img/rectangle-133@2x.png',
  className: 'profile-tab-defult-4',
}

const popupThreeDotsData = {
  profileTabDefult2Props: profileTabActive2Data,
  profileTabDefult2Props2: profileTabDefult22Data,
  profileTabDefult22Props: profileTabDefult23Data,
  profileTabDefultProps: profileTabDefult3Data,
  profileTabDefult2Props22: profileTabDefult4Data,
}

const userData = {
  ellipse1: '/img/ellipse-1@2x.png',
  usernameHere: '@username.here',
  className: 'user-1',
}

const card1Data = {
  cryptojunk2181: 'CryptoJunk #2181',
  spanText: '0.1 ETH ',
  spanText2: '1/1',
  buyNow: '/img/buy-now@2x.svg',
  iconHeart: '/img/icon---heart@2x.svg',
  number: '22',
  userProps: userData,
}

// // MOBILE COPY PASTE FOR REFRENCE

// const NavBar2 = styled.div`
//   height: 98px;
//
//   margin-right: 5px;
//   display: flex;
//   padding: 0 80px;
//   align-items: center;
//   min-width: 1921px;
//   background-color: var(--bg--secondary-color);
// `

// const NavBar1 = styled.div`
//   height: 98px;
//
//   margin-top: 67px;
//   margin-right: 4px;
//   display: flex;
//   padding: 0 80px;
//   align-items: center;
//   min-width: 1921px;
//   background-color: var(--bg--secondary-color);
// `

// const NavBar3 = styled.img`
//   width: 1921px;
//   height: 98px;
//   margin-top: 80px;
//   margin-right: 4px;
// `

// const FlexRow = styled.div`
//   height: 2008px;
//
//   align-self: flex-start;
//   margin-top: 124px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 1623px;
// `

// const FlexCol = styled.div`
//   width: 1268px;
//
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   min-height: 2008px;
// `

// const FlexRow1 = styled.div`
//   height: 332px;
//   margin-top: 2px;
//   display: flex;
//   align-items: flex-end;
//   min-width: 1248px;
// `

// const FlexCol1 = styled.div`
//   width: 478px;
//
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 332px;
// `

// const FlexRow2 = styled.div`
//   height: 24px;
//
//   margin-top: 18px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 298px;
// `

// const FlexRow3 = styled.div`
//   height: 50px;
//
//   margin-top: 29px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 338px;
// `

// const FlexRow4 = styled.div`
//   height: 50px;
//
//   margin-top: 25px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 395px;
// `

// const FlexRow5 = styled.div`
//   height: 60px;
//
//   margin-top: 36px;
//   display: flex;
//   align-items: center;
//   min-width: 478px;
// `

// const Img = styled.img`
//   width: 296px;
//   height: 300px;
//   margin-left: 474px;
//   margin-bottom: 2px;
// `

// const FlexCol2 = styled.div`
//   width: 1151px;
//
//   align-self: flex-start;
//   margin-top: 42px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 1592px;
// `

// const FlexRow6 = styled.div`
//   height: 121px;
//
//   align-self: flex-end;
//   margin-top: 35px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 1136px;
// `

// const FlexRow7 = styled.div`
//   height: 281px;
//
//   margin-top: 43px;
//   margin-left: 30px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 961px;
// `

// const FlexCol3 = styled.div`
//   width: 265px;
//
//   align-self: center;
//   margin-top: 15px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 198px;
// `
// const iconModeData = {
//   src: '/img/icon---search@2x.svg',
// }

// const iconTwitter62Data = {
//   iconModeProps: iconModeData,
// }

// const iconMode2Data = {
//   src: '/img/group@2x.svg',
// }

// const iconTwitter622Data = {
//   className: 'icon-mode',
//   iconModeProps: iconMode2Data,
// }

// const iconHamburgerManuData = {
//   src: '/img/icon---menu@2x.svg',
// }

// const iconTwitter2Data = {
//   iconHamburgerManuProps: iconHamburgerManuData,
// }

// const navBarMobile1Data = {
//   logo: '/img/image-2@2x.png',
//   iconTwitter62Props: iconTwitter62Data,
//   iconTwitter622Props: iconTwitter622Data,
//   iconTwitter2Props: iconTwitter2Data,
// }

// const iconMode3Data = {
//   src: '/img/icon---search@2x.svg',
// }

// const iconTwitter623Data = {
//   iconModeProps: iconMode3Data,
// }

// const iconMode4Data = {
//   src: '/img/group-1@2x.svg',
// }

// const iconTwitter624Data = {
//   className: 'icon-mode-1',
//   iconModeProps: iconMode4Data,
// }

// const iconHamburgerManu2Data = {
//   src: '/img/icon---menu@2x.svg',
// }

// const iconTwitter22Data = {
//   iconHamburgerManuProps: iconHamburgerManu2Data,
// }

// const iconTwitter3Data = {
//   src: '/img/bg@2x.png',
// }

// const navBarMobile2Data = {
//   logo: '/img/image-2@2x.png',
//   iconTwitter62Props: iconTwitter623Data,
//   iconTwitter622Props: iconTwitter624Data,
//   iconTwitter2Props: iconTwitter22Data,
//   iconTwitter3Props: iconTwitter3Data,
// }

// const headingMobile1Data = {
//   explore: 'Explore',
//   recentlyAdded: 'Recently Added',
// }

// const exploreData = {
//   explore: 'Explore',
// }

// const mobileInputFieldDropDownData = {
//   text1: 'Enter price for one piece',
//   x50Eth: '5.0 ETH',
//   place: 'ETH',
// }

// const mobileInputFieldSimpleTitleData = {
//   title: 'Title',
//   text4: 'Lorem ipsum dolor sit amet',
// }

// const mobileInputFieldSimpleDescriptionData = {
//   text3: 'Description (Optional)',
//   text2:
//     'When an unknown printer took a galley of type and scrambled it to make a type specimen book. And scrambled it to make a type specimen book. It has survived not only five centuries.',
// }

// const mobileInputFieldSimpleRoyaltiesData = {
//   royalties: 'Royalties',
//   number: '20',
//   text5: '%',
//   text6: (
//     <>
//       Suggested: 0%, 10%, 20%, 30%, <br />
//       Maximum is 50%
//     </>
//   ),
// }

// const mobileInputFieldSimpleNumberOfCopieData = {
//   royalties: 'Number of copies',
//   x20: 'E. g. 10”',
//   suggested010: 'Amount of Tokens',
// }

// const mobileInputFieldTwitterUsernameData = {
//   royalties: 'Twitter Username',
//   themadbrains: '@themadbrains',
// }

// const buttonMain32Data = {
//   overlapGroup: '/img/button---main@2x.svg',
//   createI134649891: 'Buy',
// }

// const mobileOwnerCard2Data = {
//   overlapGroup: '/img/ellipse-2@2x.png',
//   name: 'Katherine Moss',
//   spanText: '1 / 1 on sale for ',
//   spanText2: '0.004 ETH',
//   spanText3: ' each',
//   buttonMain32Props: buttonMain32Data,
// }

// const mobileInputFieldEnterQuantityData = {
//   x20: '1',
//   text7: 'Enter quantity. 1 available',
// }

// const mobileInputFieldEnterQuantity2Data = {
//   x20: '1',
//   text8: 'Enter quantity. 1 available',
// }

// const mobileResponsiveComponentsData = {
//   navBarMobile1Props: navBarMobile1Data,
//   navBarMobile2Props: navBarMobile2Data,
//   headingMobile1Props: headingMobile1Data,
//   exploreProps: exploreData,
//   mobileInputFieldDropDownProps: mobileInputFieldDropDownData,
//   mobileInputFieldSimpleTitleProps: mobileInputFieldSimpleTitleData,
//   mobileInputFieldSimpleDescriptionPr: mobileInputFieldSimpleDescriptionData,
//   mobileInputFieldSimpleRoyaltiesProp: mobileInputFieldSimpleRoyaltiesData,
//   mobileInputFieldSimpleNumberOfCopie: mobileInputFieldSimpleNumberOfCopieData,
//   mobileInputFieldTwitterUsernameProp: mobileInputFieldTwitterUsernameData,
//   mobileOwnerCard2Props: mobileOwnerCard2Data,
//   mobileInputFieldEnterQuantityProps: mobileInputFieldEnterQuantityData,
//   mobileInputFieldEnterQuantity2Props: mobileInputFieldEnterQuantity2Data,
// }

// const iconTwitter222Data = {
//   src: '/img/vector-3@2x.svg',
// }

// const iconTwitterData = {
//   iconTwitter2Props: iconTwitter222Data,
// }

// const iconInstagramData = {
//   src: '/img/group-1@2x.svg',
// }

// const iconTwitter32Data = {
//   iconInstagramProps: iconInstagramData,
// }

// const iconShareData = {
//   src: '/img/group-2@2x.svg',
// }

// const iconTwitter4Data = {
//   iconShareProps: iconShareData,
// }

// const iconDiscordData = {
//   src: '/img/group@2x.svg',
// }

// const iconTwitter5Data = {
//   iconDiscordProps: iconDiscordData,
// }

// const buttonMainData = {
//   buttonPrimery: '/img/button---main@2x.svg',
//   text6: 'Create',
//   className: '',
// }

// const buttonMain2Data = {
//   children: 'Connect wallet',
// }

// const iconMode5Data = {
//   src: '/img/group-5@2x.svg',
// }

// const iconTwitter625Data = {
//   className: 'icon-discord',
//   iconModeProps: iconMode5Data,
// }

// const iconButtonData = {
//   iconTwitterProps: iconTwitterData,
//   iconTwitter32Props: iconTwitter32Data,
//   iconTwitter4Props: iconTwitter4Data,
//   iconTwitter5Props: iconTwitter5Data,
//   buttonMainProps: buttonMainData,
//   buttonMain2Props: buttonMain2Data,
//   iconTwitter62Props: iconTwitter625Data,
// }

// const iconTwitter223Data = {
//   src: '/img/vector-3@2x.svg',
// }

// const iconTwitter6Data = {
//   iconTwitter2Props: iconTwitter223Data,
// }

// const iconInstagram2Data = {
//   src: '/img/group-1@2x.svg',
// }

// const iconTwitter322Data = {
//   iconInstagramProps: iconInstagram2Data,
// }

// const iconShare2Data = {
//   src: '/img/group-2@2x.svg',
// }

// const iconTwitter42Data = {
//   iconShareProps: iconShare2Data,
// }

// const iconDiscord2Data = {
//   src: '/img/group@2x.svg',
// }

// const iconTwitter52Data = {
//   iconDiscordProps: iconDiscord2Data,
// }

// const buttonMain3Data = {
//   buttonPrimery: '/img/button---main@2x.svg',
//   text6: 'Create',
//   className: 'button-primery-1',
// }

// const buttonMain22Data = {
//   children: 'Connect wallet',
//   className: 'button-main-4',
// }

// const iconMode6Data = {
//   src: '/img/group-5@2x.svg',
// }

// const iconTwitter626Data = {
//   className: 'icon-discord-1',
//   iconModeProps: iconMode6Data,
// }

// const iconButton2Data = {
//   iconTwitterProps: iconTwitter6Data,
//   iconTwitter32Props: iconTwitter322Data,
//   iconTwitter4Props: iconTwitter42Data,
//   iconTwitter5Props: iconTwitter52Data,
//   buttonMainProps: buttonMain3Data,
//   buttonMain2Props: buttonMain22Data,
//   iconTwitter62Props: iconTwitter626Data,
// }

// const dropDown1Data = {
//   text2: 'Recently Added',
//   iconArrow: '/img/icon---arrow@2x.svg',
// }

// const headingData = {
//   dropDown1Props: dropDown1Data,
// }

// const iconTwitter224Data = {
//   src: '/img/vector@2x.svg',
// }

// const iconTwitter7Data = {
//   iconTwitter2Props: iconTwitter224Data,
// }

// const iconArrow2Data = {
//   className: 'icon-arrow-2',
// }

// const inputFieldDropDownData = {
//   iconArrowProps: iconArrow2Data,
// }

// const imgUserData = {
//   imgUser: '/img/ellipse-2@2x.png',
//   iconChcek: '/img/icon---chcek-@2x.svg',
// }

// const buttonMain322Data = {
//   overlapGroup: '/img/button---main@2x.svg',
//   createI134649891: 'Buy',
//   className: 'button-main-1',
// }

// const ownerCard1Data = {
//   buttonMain3Props: imgUserData,
//   buttonMain3Props2: buttonMain322Data,
// }

// const imgUser2Data = {
//   imgUser: '/img/ellipse-2@2x.png',
//   iconChcek: '/img/icon---chcek-@2x.svg',
//   className: 'icon-mode-2',
// }

// const bidCard1Data = {
//   imgUserProps: imgUser2Data,
// }

// const profileCard1Data = {
//   imgUser: '/img/ellipse-2-2@2x.png',
//   iconChcek: '/img/icon---chcek--2@2x.svg',
//   x0003Eth10: '0.003 ETH $10',
//   balance: 'Balance',
//   className: 'profile-card-2',
// }

// const profileTabActiveData = {
//   myItems: '/img/rectangle-133@2x.svg',
//   profileTabActive: '/img/my-items@2x.svg',
//   className: 'profile-tab-active-1',
// }

// const profileTabDefultData = {
//   editProfile: 'Edit Profile',
//   rectangle133: '/img/rectangle-133@2x.png',
//   className: 'profile-tab-defult-1',
// }

// const profileTabDefult2Data = {
//   editProfile: 'Disconnect',
//   rectangle133: '/img/rectangle-133@2x.png',
//   className: 'profile-tab-defult-2',
// }

// const popProfileDropdownData = {
//   profileCard1Props: profileCard1Data,
//   profileTabActiveProps: profileTabActiveData,
//   profileTabDefultProps: profileTabDefultData,
//   profileTabDefult2Props: profileTabDefult2Data,
// }

// const profileTabActive2Data = {
//   overlapGroup: '/img/rectangle-133-5@2x.svg',
//   myItems: '/img/my-items-2@2x.svg',
// }

// const profileTabDefult22Data = {
//   rectangle133: '/img/rectangle-133@2x.png',
//   editProfileI24465: 'Purchase Now',
// }

// const profileTabDefult23Data = {
//   rectangle133: '/img/rectangle-133@2x.png',
//   editProfileI24465: 'View On Opensea',
//   className: 'profile-tab-defult-6',
// }

// const profileTabDefult3Data = {
//   editProfile: 'Share',
//   rectangle133: '/img/rectangle-133@2x.png',
//   className: 'profile-tab-defult-3',
// }

// const profileTabDefult4Data = {
//   editProfile: 'Report',
//   rectangle133: '/img/rectangle-133@2x.png',
//   className: 'profile-tab-defult-4',
// }

// const popupThreeDotsData = {
//   profileTabDefult2Props: profileTabActive2Data,
//   profileTabDefult2Props2: profileTabDefult22Data,
//   profileTabDefult22Props: profileTabDefult23Data,
//   profileTabDefultProps: profileTabDefult3Data,
//   profileTabDefult2Props22: profileTabDefult4Data,
// }

// const userData = {
//   ellipse1: '/img/ellipse-1@2x.png',
//   usernameHere: '@username.here',
//   className: 'user-1',
// }

// const card1Data = {
//   cryptojunk2181: 'CryptoJunk #2181',
//   spanText: '0.1 ETH ',
//   spanText2: '1/1',
//   buyNow: '/img/buy-now@2x.svg',
//   iconHeart: '/img/icon---heart@2x.svg',
//   number: '22',
//   userProps: userData,
// }
