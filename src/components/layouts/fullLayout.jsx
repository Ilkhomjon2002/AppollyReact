import { Navbar } from "../organisms/navbar";
import { Box } from "@chakra-ui/react";
import { TopNavbar } from "../organisms/topNavbar";
import NavbarBackground from "../../assets/images/backgroundImage.png";
import { IntroSection } from "../organisms/introSection";
import { AboutSection } from "../organisms/aboutSection";
import { FeaturesSection } from "../organisms/featuresSection";
import { InterfaceSection } from "../organisms/interfaceSection";
import { UsageSection } from "../organisms/usageSection";
import { TeamSection } from "../organisms/teamSection";
import { CustomersSection } from "../organisms/customersSection";
import { BlogSection } from "../organisms/blogSection";
import { FooterSection } from "../organisms/footerSection";
import { useEffect } from "react";
import { useFetch } from "../../useWindowResizer";
const FullLayout = () => {
	const url =
		"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
	const [data, isLoading, isError] = useFetch(url);

	useEffect(() => {}, []);
	return (
		<>
			<Box backgroundImage={NavbarBackground}>
				<Box px={{ base: "70px", mxl: "136px" }} pt={"35px"} pb={"35px"}>
					<TopNavbar></TopNavbar>
					<Navbar></Navbar>
					<IntroSection></IntroSection>
				</Box>
			</Box>
			<Box px={{ base: "70px", mxl: "136px" }}>
				<AboutSection></AboutSection>
			</Box>
			<Box backgroundImage={NavbarBackground}>
				<Box px={{ base: "70px", mxl: "136px" }}>
					<FeaturesSection></FeaturesSection>
				</Box>
			</Box>
			<Box px={{ base: "70px", mxl: "136px" }}>
				<InterfaceSection></InterfaceSection>
			</Box>
			<Box backgroundImage={NavbarBackground}>
				<Box px={{ base: "70px", mxl: "136px" }}>
					<UsageSection></UsageSection>
				</Box>
			</Box>
			<Box px={{ base: "70px", mxl: "136px" }}>
				<TeamSection></TeamSection>
			</Box>
			<Box backgroundImage={NavbarBackground}>
				<Box px={{ base: "70px", mxl: "136px" }}>
					<CustomersSection></CustomersSection>
				</Box>
			</Box>
			<Box px={{ base: "70px", mxl: "136px" }} zIndex={1}>
				<BlogSection></BlogSection>
			</Box>
			<Box background={"title.900"} pos={"relative"} zIndex={-1}>
				<Box px={{ base: "70px", mxl: "136px" }}>
					<FooterSection></FooterSection>
				</Box>
			</Box>
		</>
	);
};

export default FullLayout;
