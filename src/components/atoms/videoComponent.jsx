import { Image, Box } from "@chakra-ui/react";
import Triangle from "../../assets/icons/triangleIcon.svg";
import { InView } from "react-intersection-observer";
import { useState } from "react";
const VideoComponent = ({ src }) => {
	const [boxShadow, setBoxShadow] = useState();

	return (
		<InView
			as="div"
			onChange={(inView, entry) => {
				if (inView) {
					setBoxShadow(true);
				} else {
					setBoxShadow(false);
				}
			}}
		>
			<Box
				width={{ base: "100vw", md: "770px" }}
				maxH={"320px"}
				pos={"relative"}
				borderRadius={"10px"}
				overflow={"hidden"}
				transition={".3s ease"}
				boxShadow={boxShadow ? "0px 10px 100px 0 rgba(0,0,0,0.24)" : ""}
			>
				<Image
					src={src}
					objectFit={"cover"}
					height={"100%"}
					width={"100%"}
				></Image>
				<Box
					top={"0"}
					left={"0"}
					backgroundColor={"rgba(88, 81, 234, 0.4)"}
					width={"100%"}
					height={"100%"}
					position={"absolute"}
				>
					<Box
						top={"50%"}
						left={"50%"}
						transform={"translate(-50%,-50%)"}
						position={"absolute"}
						cursor={"pointer"}
					>
						<Box
							_hover={{
								outline: "20px solid rgba(255, 255, 255, 0.6)",
							}}
							transition={".3s ease "}
							boxShadow={"0 0 0 10px rgba(255, 255, 255, 0.7)"}
							outline={"0px solid rgba(255, 255, 255, 0.6)"}
							width={"50px"}
							height={"50px"}
							background={"white"}
							pos={"relative"}
							borderRadius={"50%"}
						>
							<Image
								top={"50%"}
								left={"50%"}
								transform={"translate(-50%,-50%)"}
								position={"absolute"}
								width={"18px"}
								height={"18px"}
								overflow={"hidden"}
								borderRadius={"2px"}
								src={Triangle}
							></Image>
						</Box>
					</Box>
				</Box>
			</Box>
		</InView>
	);
};

export { VideoComponent };
