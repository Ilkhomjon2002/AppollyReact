import { Button } from "@chakra-ui/react";
const PrimaryButton = ({ children, ...props }) => {
	return (
		<Button
			{...props}
			borderRadius={"5px"}
			backgroundColor={"primary.900"}
			_hover={{
				backgroundColor: "primary.600",
			}}
			_active={{
				backgroundColor: "primary.300",
			}}
			color={"white"}
		>
			{children}
		</Button>
	);
};

export { PrimaryButton };
