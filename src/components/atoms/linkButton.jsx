import { Box } from "@chakra-ui/react";

const LinkButton = ({ children, ...props }) => {
	return (
		<Box
			{...props}
			w={"fit-content"}
			cursor={"pointer"}
			fontWeight={"600"}
			fontSize={"20px"}
			color={"rgba(35, 34, 51, 1)"}
			transition={".3s ease"}
			position={"relative"}
			_before={{
				content: "''",
				width: "0%",
				position: "absolute",
				backgroundColor: "primary.900",
				height: "2px",
				bottom: 0,
				transition: ".3s ease",
			}}
			_hover={{
				color: "primary.900",
				_before: {
					width: "100%",
				},
			}}
		>
			{String(children).toUpperCase()}
		</Box>
	);
};

export { LinkButton };
