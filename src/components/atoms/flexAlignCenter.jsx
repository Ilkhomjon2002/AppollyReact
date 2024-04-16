import { Flex } from "@chakra-ui/react";

const FlexAlignCenter = ({ children, ...props }) => {
	return (
		<Flex {...props} alignItems={"center"}>
			{children}
		</Flex>
	);
};
export { FlexAlignCenter };
