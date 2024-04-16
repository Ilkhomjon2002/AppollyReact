import { Box, Image, Text } from "@chakra-ui/react";
import { LinkButton } from "./linkButton";

const BlogCard = ({ title, description, imgSrc, ...props }) => {
	return (
		<Box
			{...props}
			maxW={{ base: "100%", xl: "370px" }}
			boxShadow={"0 1px 10px 0 rgba(0,0,0,0.1)"}
			borderRadius={"10px"}
			overflow={"hidden"}
		>
			<Image
				height={{ base: "400px", xl: "228px" }}
				objectFit={"cover"}
				w={"100%"}
				src={imgSrc}
			></Image>
			<Box pt={"40px"} px={"18px"} pb={"36px"}>
				<Text fontSize={"20px"} fontWeight={"600"} color={"title.900"}>
					{title}
				</Text>
				<Text pt={"14px"} color={"subtitle.900"}>
					{description}
				</Text>
				<LinkButton pt="30px">Read More</LinkButton>
			</Box>
		</Box>
	);
};

export { BlogCard };
