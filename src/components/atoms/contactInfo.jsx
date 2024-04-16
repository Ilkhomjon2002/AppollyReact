import { Image, Flex, Text, Box } from "@chakra-ui/react";
import PhoneIcon from "../../assets/icons/phoneTopNavbarIcon.svg";
import EmailIcon from "../../assets/icons/envelopeTopNavbarIcon.svg";
const ContactInfo = () => {
	return (
		<Flex
			data-aos="zoom-out-up"
			background={"white"}
			zIndex={999}
			padding={{ base: "32.5px 25px", xl: "65px 50px" }}
			alignItems={"center"}
			borderRadius={"30px"}
			boxShadow={"0px 10px 100px 0px rgba(0,0,0,0.24)"}
			justifyContent={"space-between"}
			flexDirection={{ base: "column", xl: "row" }}
			gap={{ base: "40px", xl: "0px" }}
		>
			<Flex
				w={{ base: "100%", xl: "50%" }}
				gap={"18px"}
				alignItems={"center"}
				justifyContent={{ base: "center", xl: "" }}
			>
				<Box
					borderRadius={"50%"}
					padding={"35px"}
					w={"100px"}
					h="100px"
					backgroundColor={"primary.900"}
				>
					<Image flexShrink={0} w={"100%"} h={"100%"} src={EmailIcon}></Image>
				</Box>
				<Text fontSize={"25px"} color={"title.900"} fontWeight={"600"}>
					info@youremail.com
				</Text>
			</Flex>
			<Box
				display={{ base: "none", xl: "block" }}
				pos={"relative"}
				_after={{
					width: "4px",
					height: "120px",
					top: "0%",
					left: "0%",
					content: "''",
					transform: "translate(-50%,-50%)",
					background: "rgba(35, 34, 51, 1)",
					position: "absolute",
				}}
			></Box>
			<Flex
				w={{ base: "100%", xl: "50%" }}
				pl={{ xl: "50px" }}
				gap={"18px"}
				alignItems={"center"}
				justifyContent={{ base: "center", xl: "" }}
			>
				<Box
					borderRadius={"50%"}
					padding={"35px"}
					w={"100px"}
					h={"100px"}
					backgroundColor={"primary.900"}
				>
					<Image flexShrink={0} w={"100%"} h={"100%"} src={PhoneIcon}></Image>
				</Box>
				<Text fontSize={"25px"} color={"title.900"} fontWeight={"600"}>
					+880 321 655 9985
				</Text>
			</Flex>
		</Flex>
	);
};

export { ContactInfo };
