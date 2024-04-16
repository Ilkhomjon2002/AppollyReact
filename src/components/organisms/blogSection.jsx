import { Box, Flex, Text } from "@chakra-ui/react";
import { BlogCard } from "../atoms/blogCard";
import { ContactInfo } from "../atoms/contactInfo";
import BlogImg1 from "../../assets/images/blog1.jpeg";
import BlogImg2 from "../../assets/images/blog2.jpeg";
import BlogImg3 from "../../assets/images/blog3.jpeg";
import { SectionHeader } from "../atoms/sectionHeader";
const blogs = [
	{
		title: "The Snap Pixel: How It Works and How to Install ",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
		imgSrc: BlogImg1,
	},
	{
		title: "Global Partner Solutions: A Partnership of Innovation",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
		imgSrc: BlogImg2,
	},
	{
		title: "2021: An opportunity for Snapchatters to start fresh",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
		imgSrc: BlogImg3,
	},
];
const BlogSection = () => {
	return (
		<Box pos={"relative"} pt={"120px"} pb={"248px"} zIndex={99}>
			<SectionHeader
				title={"Our recent blog"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>
			<Flex
				pt={"60px"}
				flexDirection={{ base: "column", xl: "row" }}
				gap={"30px"}
				justifyContent={"space-between"}
			>
				{blogs.map((blog, i) => {
					return (
						<BlogCard
							key={i}
							data-aos="zoom-out-up"
							title={blog.title}
							description={blog.description}
							imgSrc={blog.imgSrc}
						></BlogCard>
					);
				})}
			</Flex>
			<Box
				mt={{ base: "100px", xl: "0px" }}
				pos={"absolute"}
				w={"100%"}
				top={"90%"}
				zIndex={999}
			>
				<ContactInfo></ContactInfo>
			</Box>
		</Box>
	);
};

export { BlogSection };
