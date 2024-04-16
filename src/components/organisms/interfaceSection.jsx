import { Text, Box, Flex, Image } from "@chakra-ui/react";
import { InterfaceCarousel } from "../atoms/interfaceCarousel";
import { AppLinks } from "../atoms/appLinks";
import { FlexAlignCenter } from "../atoms/flexAlignCenter";
import InterfaceImage from "../../assets/images/interfaceSectionApp.png";
import StarIcon from "../../assets/icons/starInterfaceSection.svg";
import DownloadIcon from "../../assets/icons/downloadInterfaceSection.svg";
import LikeIcon from "../../assets/icons/likeInterfaceSection.svg";
import { CountIncreasingCard } from "../atoms/countIncreasingCard";
import { SectionHeader } from "../atoms/sectionHeader";
const countUpCards = [
	{
		title: "Download",
		imgSrc: DownloadIcon,
		count: 59865,
	},
	{
		title: "Like",
		imgSrc: LikeIcon,
		count: 29852,
	},
	{
		title: "5 Star Ranking",
		imgSrc: StarIcon,
		count: 1500,
	},
];
const InterfaceSection = () => {
	return (
		<Box overflow={"visible"} pt={"120px"} pb={"120px"}>
			<SectionHeader
				pb="60px"
				title={"Checkout Our App Interface Look"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<InterfaceCarousel></InterfaceCarousel>
			<Flex
				pt={"280px"}
				gap={{ base: "0%", mxl: "10%" }}
				flexDir={{ base: "column", lg: "row" }}
			>
				<Box w={{ base: "100%", lg: "50%" }} data-aos="fade-left">
					<Text
						textTransform={"uppercase"}
						fontSize={"32px"}
						fontWeight={"700"}
					>
						Download App Now
					</Text>
					<Text color={"subtitle.900"} pt="5px">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
						nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
						Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
						Ullamcorper risus tempor, ac nunc libero urna, feugiat.
					</Text>
					<FlexAlignCenter gap="14px" pb="60px" pt="40px">
						<AppLinks></AppLinks>
					</FlexAlignCenter>
					<Flex
						alignItems={"center"}
						justifyContent={"space-between"}
						gap={"30px"}
					>
						{countUpCards.map((card) => {
							return (
								<CountIncreasingCard
									key={"title"}
									title={card.title}
									count={card.count}
									imgSrc={card.imgSrc}
								></CountIncreasingCard>
							);
						})}
					</Flex>
				</Box>
				<Box
					w={{ base: "100%", lg: "50%" }}
					display={"flex"}
					flexDir={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					pt={"10%"}
					data-aos="fade-right"
				>
					<Image src={InterfaceImage}></Image>
				</Box>
			</Flex>
		</Box>
	);
};

export { InterfaceSection };
