import { Image, Text, Stack } from "@chakra-ui/react";

const FeatureCard = ({
	title,
	imgSrc,
	description,
	alignment,
	exception,
	...props
}) => {
	return (
		<Stack
			{...props}
			color={"white"}
			maxW={"400px"}
			py={"60px"}
			pl={{
				base: alignment == "flex-start" ? "15px" : "",
				lg: alignment == "flex-start" ? "60px" : "",
			}}
			pr={{
				base: alignment == "flex-end" ? "15px" : "",
				lg: alignment == "flex-end" ? "60px" : "",
			}}
			alignItems={{ base: "center", lg: alignment ? alignment : "center" }}
			flexDirection={"column"}
			textAlign={{
				base: "center",
				lg: alignment?.split("-")[1] ? alignment?.split("-")[1] : "center",
			}}
		>
			<Image w={exception ? "" : "50px"} h={"50px"} src={imgSrc}></Image>
			<Text
				py="22px"
				fontSize={"25px"}
				fontWeight={"600"}
				textTransform={"uppercase"}
			>
				{title}
			</Text>
			<Text fontWeight={"400"}>{description}</Text>
		</Stack>
	);
};

export { FeatureCard };
