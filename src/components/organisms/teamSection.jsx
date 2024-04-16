import { Box, Text, Flex } from "@chakra-ui/react";
import { MemberCard } from "../atoms/memberCard";
import Dev1 from "../../assets/images/dev1.jpeg";
import Dev2 from "../../assets/images/dev2.jpeg";
import Dev3 from "../../assets/images/dev3.jpeg";
import { SectionHeader } from "../atoms/sectionHeader";
const members = [
	{
		name: "Carla Press",
		position: "App Developer",
		imgSrc: Dev1,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
	},
	{
		name: "Craig Gouse",
		position: "UI/UX Designer",
		imgSrc: Dev2,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
	},
	{
		name: "Jocelyn Septimus",
		position: "Website developer",
		imgSrc: Dev3,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
	},
];
const TeamSection = () => {
	return (
		<Box pt={"280px"} pb={"120px"}>
			<SectionHeader
				title={"Our reactive team"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<Flex
				pt={"60px"}
				alignItems={"flex-start"}
				justifyContent={"space-between"}
				gap={"30px"}
				flexDirection={{ base: "column", xl: "row" }}
			>
				{members.map((member) => {
					return (
						<MemberCard
							data-aos="fade-up"
							key={member.name}
							name={member.name}
							position={member.position}
							imgSrc={member.imgSrc}
							description={member.description}
						></MemberCard>
					);
				})}
			</Flex>
		</Box>
	);
};
export { TeamSection };
