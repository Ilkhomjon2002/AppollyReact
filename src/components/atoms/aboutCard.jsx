import { Box, Text, Flex, Image } from "@chakra-ui/react";
import CheckBoxIcon from "../../assets/icons/checkBoxIcon.png";
const AboutCard = ({ title, description }) => {
	return (
		<Flex
			id="about"
			alignItems={"flex-start"}
			boxShadow={"0px 1px 10px 0 rgba(0,0,0,0.1)"}
			borderRadius={"10px"}
			py={"30px"}
			px={"18px"}
			gap={"18px"}
			transition={".3s ease"}
			data-aos="fade-left"
		>
			<Image
				width="20px"
				height={"20px"}
				objectFit={"cover"}
				src={CheckBoxIcon}
			></Image>
			<Box>
				<Text fontSize={"20px"} fontWeight={"600"} textTransform={"uppercase"}>
					{title}
				</Text>
				<Text pt={"12px"} color={"subtitle.900"} fontSize={"16px"}>
					{description}
				</Text>
			</Box>
		</Flex>
	);
};

export { AboutCard };
