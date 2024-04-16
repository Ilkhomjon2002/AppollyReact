import {
	Box,
	Flex,
	Image,
	Menu,
	MenuButton,
	MenuList,
	Button,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
import { LinkButton } from "../atoms/linkButton";
import { PrimaryButton } from "../atoms/button";
import { Logo } from "../atoms/logo";
import { AlignRight } from "lucide-react";
const Navbar = () => {
	const scroll = (view) => {};
	return (
		<>
			<Box pos={"relative"}>
				<Flex
					justifyContent={"space-between"}
					mt={"15px"}
					borderRadius={"5px"}
					padding={"5px"}
					backgroundColor={"white"}
					alignItems={"center"}
					display={{ base: "none", xl: "flex" }}
				>
					<Flex w="35%" justifyContent={"space-between"} alignItems={"center"}>
						<LinkButton ml="30px" onClick={() => scroll("#home")}>
							Home
						</LinkButton>

						<LinkButton onClick={() => scroll("#about")}>About</LinkButton>
						<LinkButton onClick={() => scroll("#features")}>
							Features
						</LinkButton>
					</Flex>

					<Flex w="35%" justifyContent={"space-between"} alignItems={"center"}>
						<LinkButton onClick={() => scroll("#screenshot")}>
							Schreenshot
						</LinkButton>
						<LinkButton onClick={() => scroll("#blog")}>Blog</LinkButton>
						<PrimaryButton
							fontWeight="600"
							textTransform="uppercase"
							fontSize="20px"
						>
							Download
						</PrimaryButton>
					</Flex>
				</Flex>
				<Flex
					justifyContent={"flex-end"}
					mt={"15px"}
					borderRadius={"5px"}
					padding={"5px"}
					backgroundColor={"white"}
					alignItems={"center"}
					display={{ base: "flex", xl: "none" }}
				>
					<Menu>
						<MenuButton
							backgroundColor={"primary.900"}
							color={"white"}
							as={IconButton}
							icon={<AlignRight />}
						></MenuButton>
						<MenuList>
							<MenuItem>Home</MenuItem>
							<MenuItem>About</MenuItem>
							<MenuItem>Features</MenuItem>
							<MenuItem>Screenshot</MenuItem>
							<MenuItem>
								<PrimaryButton
									fontWeight="600"
									textTransform="uppercase"
									fontSize="20px"
									w="100%"
								>
									Download
								</PrimaryButton>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
				<Logo></Logo>
			</Box>
		</>
	);
};

export { Navbar };
