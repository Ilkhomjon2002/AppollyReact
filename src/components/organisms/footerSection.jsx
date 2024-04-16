import {
	Box,
	Flex,
	Stack,
	Text,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Input,
	Image,
} from "@chakra-ui/react";
import SendImage from "../../assets/icons/sendIcon.svg";
import {
	YoutubeSvgIcon,
	TwitterSvgIcon,
	FacebookSvgIcon,
	InstagramSvgIcon,
} from "../atoms/iconComponent";
import { FlexAlignCenter } from "../atoms/flexAlignCenter";
const FooterSection = () => {
	return (
		<Box zIndex={"-1"} pt={"235px"} color={"white"}>
			<Flex>
				<Flex w={"50%"} gap={"60px"}>
					<Stack w={"50%"}>
						<Text
							fontSize={"32px"}
							fontWeight={"700"}
							textTransform={"uppercase"}
						>
							{" "}
							LOGO
						</Text>
						<Text pt={"5px"} pb={"38px"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
							nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
						</Text>
						<FlexAlignCenter gap="30px">
							<FacebookSvgIcon color={"white"}></FacebookSvgIcon>
							<Box
								pos={"relative"}
								_after={{
									content: "''",
									height: "24px",
									width: "1px",
									background: "white",
									top: "0%",
									left: "0%",
									transform: "translate(-50%,-50%)",
									pos: "absolute",
								}}
							></Box>
							<InstagramSvgIcon color={"white"}></InstagramSvgIcon>
							<Box
								pos={"relative"}
								_after={{
									content: "''",
									height: "24px",
									width: "1px",
									background: "white",
									top: "0%",
									left: "0%",
									transform: "translate(-50%,-50%)",

									pos: "absolute",
								}}
							></Box>
							<TwitterSvgIcon color={"white"}></TwitterSvgIcon>
							<Box
								pos={"relative"}
								_after={{
									content: "''",
									height: "24px",
									width: "1px",
									top: "0%",
									left: "0%",
									transform: "translate(-50%,-50%)",
									background: "white",
									pos: "absolute",
								}}
							></Box>
							<YoutubeSvgIcon color={"white"}></YoutubeSvgIcon>
						</FlexAlignCenter>
					</Stack>
					<Stack w={"50%"}>
						<Text
							textTransform={"uppercase"}
							fontWeight={"600"}
							fontSize={"25px"}
						>
							quick link
						</Text>
						<Text
							cursor={"pointer"}
							transition={".3s ease"}
							_hover={{
								opacity: 0.5,
							}}
							pt={"12px"}
						>
							About
						</Text>
						<Text
							cursor={"pointer"}
							transition={".3s ease"}
							_hover={{
								opacity: 0.5,
							}}
							pt={"12px"}
						>
							Features
						</Text>
						<Text
							cursor={"pointer"}
							transition={".3s ease"}
							_hover={{
								opacity: 0.5,
							}}
							pt={"12px"}
						>
							Screenshot
						</Text>
						<Text
							cursor={"pointer"}
							transition={".3s ease"}
							_hover={{
								opacity: 0.5,
							}}
							pt={"12px"}
						>
							Blog
						</Text>
					</Stack>
				</Flex>
				<Stack w="50%" pl={"20%"}>
					<Text
						fontWeight={"600"}
						textTransform={"uppercase"}
						fontSize={"20px"}
					>
						news letter
					</Text>
					<Text pt={"12px"} pb={"33px"}>
						Subscribe our newsletter to get our latest update & news
					</Text>
					<InputGroup background={"white"} borderRadius={"4px"}>
						<Input placeholder="Your email address" />
						<InputRightElement
							padding={"1px"}
							cursor={"pointer"}
							width={"50px"}
						>
							<Flex
								borderRadius={"4px"}
								backgroundColor={"primary.900"}
								w={"100%"}
								height={"100%"}
								alignItems={"center"}
								justifyContent={"center"}
								flexDirection={"column"}
							>
								<Image src={SendImage}></Image>
							</Flex>
						</InputRightElement>
					</InputGroup>
				</Stack>
			</Flex>
			<Box w={"100%"} pt={"64px"}>
				<Box
					width={"100%"}
					pos={"relative"}
					_after={{
						width: "100%",
						height: "2px",
						background: "white",
						content: "''",
						top: "0",
						left: "0",
						position: "absolute",
					}}
				></Box>
				<Box w={"100%"} textAlign={"center"} py={"18px"}>
					<Text>
						<Text as={"span"}>©</Text>Copyright 2021 .Ojjomedia. All Right
						Reserved.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};
export { FooterSection };
