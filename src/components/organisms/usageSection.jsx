import { Box, Text } from "@chakra-ui/react";
import { VideoComponent } from "../atoms/videoComponent";
import Video from "../../assets/images/video.jpeg";
import { SectionHeader } from "../atoms/sectionHeader";
import { InView } from "react-intersection-observer";
const UsageSection = () => {
	return (
		<Box pt={"120px"} pb="220px" pos={"relative"}>
			<SectionHeader
				colorMode={"black"}
				title={"how to use the app perfectly"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<Box
				pos={"absolute"}
				left={"50%"}
				top={"100%"}
				transform={"translate(-50%,-50%)"}
				width={"fit-content"}
			>
				<VideoComponent src={Video}></VideoComponent>
			</Box>
		</Box>
	);
};

export { UsageSection };
