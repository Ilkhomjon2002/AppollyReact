import { forwardRef } from "react";
import LogoImage from "../../assets/images/logo.png";
import { Image, Box } from "@chakra-ui/react";
// import { motion } from "framer-motion";
const Logo = forwardRef((props, ref) => {
	return (
		<Box
			data-aos="zoom-in-up"
			// as={motion.div}
			pos="absolute"
			top={"50%"}
			left={"50%"}
			style={{
				transform: "translate(-50%,-50%) ",
			}}
			py={"25px"}
			cursor={"pointer"}
			background={"white"}
			borderRadius={"5px"}
			// whileInView={{ top: "50%" }}
			// whileHover={{ top: "55%" }}
			transition={".3s ease"}
			paddingX={"16px"}
			boxShadow={"0 5px 10px rgba(0,0,0,0.1)"}
		>
			<Image src={LogoImage} width={"100%"}></Image>
		</Box>
	);
});
export { Logo };
