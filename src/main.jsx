import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import Fonts from "./fonts.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const colors = {
	primary: {
		900: "#5956e9",
		600: "#5956e999",
		300: "#5956e94d",
	},
	subtitle: {
		900: "#6c6c72",
	},
	title: {
		900: "#232233",
	},
};
const fonts = {
	heading: `'Josefin', sans-serif`,
	body: `'Josefin', sans-serif`,
};
const breakpoints = {
	base: "0px",
	sm: "320px",
	md: "768px",
	lg: "1035px",
	xl: "1200px",
	mxl: "1400px",
	"2xl": "1536px",
};
AOS.init();

const theme = extendTheme({ colors, fonts, breakpoints });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts />
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
