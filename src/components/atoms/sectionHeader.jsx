import { Box, Text } from "@chakra-ui/react";
const SectionHeader = ({ title, description, colorMode, ...props }) => {
	return (
		<Box
			{...props}
			data-aos="zoom-out-up"
			textAlign={"center"}
			margin={"0 auto"}
			maxW={"600px"}
		>
			<Text
				fontWeight={"900"}
				fontSize={"32px"}
				textTransform={"uppercase"}
				color={colorMode == "black" ? "white" : "title.900"}
			>
				{title}
			</Text>
			<Text color={colorMode == "black" ? "white" : "subtitle.900"} pt={"22px"}>
				{description}
			</Text>
		</Box>
	);
};

export { SectionHeader };
