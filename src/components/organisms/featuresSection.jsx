import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PhoneImage from "../../assets/images/phoneFeaturesSection.png";
import { FeatureCard } from "../atoms/featureCard";
import MessageIcon from "../../assets/icons/messageFeaturesSection.svg";
import PhoneIcon from "../../assets/icons/phoneFeaturesSection.svg";
import EyeIcon from "../../assets/icons/eyeFeaturesSection.svg";
import ConsultationIcon from "../../assets/icons/consultantFeaturesSection.svg";
import DesignIcon from "../../assets/icons/uiFeaturesSection.svg";
import BrowserIcon from "../../assets/icons/browserFeaturesSection.svg";
import { SectionHeader } from "../atoms/sectionHeader";
const FeaturesSection = () => {
	return (
		<Box pt={"120px"} pb="120px">
			<SectionHeader
				colorMode={"black"}
				title={"App features"}
				description={`			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<Flex direction={"column"} alignItems={"center"}>
				<FeatureCard
					data-aos="zoom-out-up"
					imgSrc={MessageIcon}
					title={"Full free chat"}
					description={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					}
				></FeatureCard>
				<Flex
					justifyContent={"space-between"}
					flexDirection={{ base: "column", lg: "row" }}
				>
					<Flex flexDirection={"column"} justifyContent={"space-between"}>
						<FeatureCard
							data-aos-delay="300"
							data-aos="fade-left"
							alignment={"flex-end"}
							imgSrc={BrowserIcon}
							title={"unlimited features"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							}
						></FeatureCard>
						<FeatureCard
							data-aos-delay="300"
							data-aos="fade-left"
							alignment={"flex-end"}
							imgSrc={DesignIcon}
							title={"Awesome ui design"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							}
						></FeatureCard>
					</Flex>
					<Image
						data-aos-delay="100"
						data-aos="zoom-in"
						borderRadius={"40px"}
						boxShadow={"40px 40px 100px 0 rgba(24, 48, 63, 0.5)"}
						maxH={"812px"}
						src={PhoneImage}
					></Image>
					<Flex flexDirection={"column"} justifyContent={"space-between"}>
						<FeatureCard
							data-aos-delay="300"
							data-aos="fade-right"
							exception={true}
							alignment={"flex-start"}
							imgSrc={PhoneIcon}
							title={"ios & android version"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							}
						></FeatureCard>
						<FeatureCard
							data-aos-delay="300"
							data-aos="fade-right"
							alignment={"flex-start"}
							imgSrc={EyeIcon}
							title={"retina ready graphics"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							}
						></FeatureCard>
					</Flex>
				</Flex>
				<FeatureCard
					data-aos-delay="300"
					data-aos="fade-down"
					imgSrc={ConsultationIcon}
					title={"24/7 support by real pepole"}
					description={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					}
				></FeatureCard>
			</Flex>
		</Box>
	);
};

export { FeaturesSection };
