import { Image, Box, Text } from "@chakra-ui/react";

const CustomerCard = ({ name, position, description, imgSrc }) => {
	return (
		<Box
			maxW={{ base: "100%", xl: "770px" }}
			maxHeight={"100%"}
			background={"white"}
			textAlign={"center"}
			padding={{ base: "10px 12px", md: "40px 62px" }}
			borderRadius={"10px"}
		>
			<Image
				m={"0 auto"}
				width={"96px"}
				height={"96px"}
				borderRadius={"50%"}
				src={imgSrc}
			></Image>
			<Text fontWeight={"700"} fontSize={"32px"} pt="20px">
				{name}
			</Text>
			<Text fontSize={"20px"} fontWeight={"600"} pt={"5px"}>
				{position}
			</Text>
			<Text pt={"12px"} color={"subtitle.900"}>
				{description}
			</Text>
		</Box>
	);
};

export { CustomerCard };
