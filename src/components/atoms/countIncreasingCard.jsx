import { Image, Box, Flex, Text } from "@chakra-ui/react";
import { CountUp } from "./countUp";

const CountIncreasingCard = ({ count, title, imgSrc }) => {
	return (
		<Flex
			width={"170px"}
			pt={"30px"}
			pb={"20px"}
			borderRadius={"10px"}
			backgroundColor={"primary.900"}
			flexDirection={"column"}
			alignItems={"center"}
			gap={"18px"}
			boxShadow={"0 1px 10px 0 rgba(0,0,0,0.1)"}
		>
			<Image src={imgSrc} w={"35px"} h="35px"></Image>
			<CountUp count={count}></CountUp>
			<Text color="white" fontSize={"20px"} fontWeight={"600"}>
				{title}
			</Text>
		</Flex>
	);
};

export { CountIncreasingCard };
