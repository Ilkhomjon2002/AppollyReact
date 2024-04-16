import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { AboutCard } from "../atoms/aboutCard";
import Phone from "../../assets/images/aboutSectionPhone.png";
import { SectionHeader } from "../atoms/sectionHeader";
const mockCards = [
	{
		title: "Creative design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
	},
	{
		title: "Easy to use",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
	},
	{
		title: "Best user experince",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
	},
];
const AboutSection = () => {
	return (
		<Box py="120px">
			<SectionHeader
				title={"ABOUT OUR APP"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<Flex
				alignItems={"center"}
				gap={"20px"}
				pt="60px"
				flexDirection={["column", "column", "column", "row"]}
			>
				<Box width={{ base: "100%", xl: "50%" }} data-aos="fade-right">
					<Image maxH={"526px"} margin={"0 auto"} src={Phone}></Image>
				</Box>
				<Flex
					pt={{ base: "50px", xl: "0" }}
					width={{ base: "100%", xl: "50%" }}
					gap={"40px"}
					flexDirection={"column"}
				>
					{mockCards.map((card) => {
						return (
							<AboutCard
								key={card.title}
								title={card.title}
								description={card.description}
							></AboutCard>
						);
					})}
				</Flex>
			</Flex>
		</Box>
	);
};

export { AboutSection };
