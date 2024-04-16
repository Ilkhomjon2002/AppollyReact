import EmailIcon from "../../assets/icons/envelopeTopNavbarIcon.svg";
import FacebookIcon from "../../assets/icons/facebookTopNavbarIcon.svg";
import InstagramIcon from "../../assets/icons/instagramTopNavbarIcon.svg";
import PhoneIcon from "../../assets/icons/phoneTopNavbarIcon.svg";
import TwitterIcon from "../../assets/icons/twitterTopNavbarIcon.svg";
import YoutubeIcon from "../../assets/icons/youtubeTopNavbarIcon.svg";
import { Image } from "@chakra-ui/react";
import { FlexAlignCenter } from "../atoms/flexAlignCenter";
const TopNavbar = () => {
	return (
		<FlexAlignCenter justifyContent="space-between" color="white">
			<FlexAlignCenter gap="50px">
				<FlexAlignCenter
					gap="18px"
					cursor={"pointer"}
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
				>
					<Image src={EmailIcon}></Image>
					Info@youremail.com
				</FlexAlignCenter>
				<FlexAlignCenter
					cursor={"pointer"}
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					gap="18px"
				>
					<Image src={PhoneIcon}></Image>
					(480) 555-0103
				</FlexAlignCenter>
			</FlexAlignCenter>
			<FlexAlignCenter gap="30px">
				<Image
					cursor={"pointer"}
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					src={FacebookIcon}
				></Image>
				<Image
					cursor={"pointer"}
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					src={InstagramIcon}
				></Image>
				<Image
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					cursor={"pointer"}
					src={TwitterIcon}
				></Image>
				<Image
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					cursor={"pointer"}
					src={YoutubeIcon}
				></Image>
			</FlexAlignCenter>
		</FlexAlignCenter>
	);
};
export { TopNavbar };
