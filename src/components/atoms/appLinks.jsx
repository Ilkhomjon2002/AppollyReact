import { Image } from "@chakra-ui/react";
import PlayMarket from "../../assets/images/playMarket.png";
import AppStore from "../../assets/images/appStore.png";
const AppLinks = () => {
	return (
		<>
			<Image src={PlayMarket}></Image>
			<Image src={AppStore}></Image>
		</>
	);
};

export { AppLinks };
