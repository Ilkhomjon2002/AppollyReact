import { Flex, Image, Text, Box } from "@chakra-ui/react";
import {
	YoutubeSvgIcon,
	TwitterSvgIcon,
	FacebookSvgIcon,
	InstagramSvgIcon,
} from "./iconComponent";
import { FlexAlignCenter } from "./flexAlignCenter";
const MemberCard = ({ imgSrc, name, position, description, ...props }) => {
	return (
		<Flex
			{...props}
			boxShadow={"0 1px 10px 0 rgba(0,0,0,0.1)"}
			borderRadius={"10px"}
			alignItems={"center"}
			flexDirection={"column"}
			textAlign={"center"}
			p={"40px 22px 55px"}
			w={{ base: "100%" }}
		>
			<Image
				outline={"4px solid rgba(89, 86, 233, 1)"}
				outlineOffset={"11px"}
				borderRadius={"50%"}
				w={"200px"}
				h="200px"
				src={imgSrc}
			></Image>
			<Text
				textTransform={"uppercase"}
				fontSize={"32px"}
				fontWeight={"700"}
				pt={"60px"}
			>
				{name}
			</Text>
			<Text
				textTransform={"uppercase"}
				color="subtitle.900"
				fontSize={"20px"}
				fontWeight={"600"}
			>
				{position}
			</Text>
			<Text color="subtitle.900" fontWeight={"400"}>
				{description}
			</Text>
			<FlexAlignCenter gap="30px" pt="40px">
				{/* <Image
					cursor={"pointer"}
					transition={".3s ease"}
					_hover={{
						opacity: 0.5,
					}}
					fill={"red"}
					src={FacebookIcon}
				></Image> */}
				<FacebookSvgIcon color={"rgba(35, 34, 51, 1)"}></FacebookSvgIcon>
				<Box
					pos={"relative"}
					_after={{
						content: "''",
						height: "24px",
						width: "1px",
						background: "rgba(35, 34, 51, 1)",
						top: "0%",
						left: "0%",
						transform: "translate(-50%,-50%)",
						pos: "absolute",
					}}
				></Box>
				<InstagramSvgIcon color={"rgba(35, 34, 51, 1)"}></InstagramSvgIcon>
				<Box
					pos={"relative"}
					_after={{
						content: "''",
						height: "24px",
						width: "1px",
						background: "rgba(35, 34, 51, 1)",
						top: "0%",
						left: "0%",
						transform: "translate(-50%,-50%)",

						pos: "absolute",
					}}
				></Box>
				<TwitterSvgIcon color={"rgba(35, 34, 51, 1)"}></TwitterSvgIcon>
				<Box
					pos={"relative"}
					_after={{
						content: "''",
						height: "24px",
						width: "1px",
						top: "0%",
						left: "0%",
						transform: "translate(-50%,-50%)",
						background: "rgba(35, 34, 51, 1)",
						pos: "absolute",
					}}
				></Box>
				<YoutubeSvgIcon color={"rgba(35, 34, 51, 1)"}></YoutubeSvgIcon>
			</FlexAlignCenter>
		</Flex>
	);
};

export { MemberCard };
