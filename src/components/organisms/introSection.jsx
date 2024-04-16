import { Flex, Image, Text } from "@chakra-ui/react";
import IntroMobile from "../../assets/images/topMobilePhoneCropped.png";

import { Box } from "@chakra-ui/react";
import { FlexAlignCenter } from "../atoms/flexAlignCenter";
import { AppLinks } from "../atoms/appLinks";
const IntroSection = () => {
	return (
		<Flex
			pt={"70px"}
			alignItems={{ base: "center" }}
			justifyContent={"space-between"}
			pb="50px"
			flexDirection={{ base: "column", xl: "row" }}
		>
			<Box
				data-aos="fade-right"
				backgroundColor={"white"}
				maxW={{ base: "100%", xl: "570px" }}
				px={"30px"}
				pt={"40px"}
				zIndex={{ base: 0, xl: 99 }}
				position={"relative"}
				_after={{
					xl: {
						content: "''",
						width: "100%",
						height: "112%",
						top: "-10%",
						left: "4%",
						position: "absolute",
						border: "18px solid rgba(255, 255, 255, 0.5)",
						zIndex: -1,
					},
				}}
			>
				<Text
					fontWeight={"700"}
					fontSize={"48px"}
					lineHeight={"63px"}
					color={"primary.900"}
					textTransform={"uppercase"}
				>
					A GREAT APP MAKES YOUR LIFE BETTER
				</Text>
				<Text pt={"22px"} color={"subtitle.900"} fontWeight={"400"}>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</Text>
				<Text pt={"52px"} fontSize={"25px"} fontWeight={"600"}>
					DOWNLOAD APP NOW
				</Text>
				<FlexAlignCenter gap="14px" pb="40px">
					<AppLinks></AppLinks>
				</FlexAlignCenter>
			</Box>
			<Box
				paddingRight={{ base: "0%", xl: "5%" }}
				pt={{ base: "100px" }}
				data-aos="fade-left"
			>
				<Image maxH={"725px"} src={IntroMobile}></Image>
			</Box>
		</Flex>
	);
};
export { IntroSection };
