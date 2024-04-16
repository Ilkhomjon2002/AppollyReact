import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: Josefin;
        src: url("/public/fonts/JosefinSans-Bold.ttf");
        font-weight: 900;
        font-style: normal;
    }
    /* latin */
    @font-face {
        font-family: Josefin;
        src: url("/public/fonts/JosefinSans-Regular.ttf");
        font-weight: 500;
        font-style: normal;
    }
    /*latin*/
    @font-face {
        font-family: Josefin;
        src: url("/public/fonts/JosefinSans-Medium.ttf");
        font-weight: 600;
        font-style: normal;
    }
    /*latin*/
    @font-face {
        font-family: Josefin;
        src: url("/public/fonts/JosefinSans-Bold.ttf");
        font-weight: 700;
        font-style: normal;
    }
    /* latin */
    @font-face {
        font-family: Josefin;
        src: url("/public/fonts/JosefinSans-Regular.ttf");
        font-weight: 400;
        font-style: normal;
    }
      `}
	/>
);

export default Fonts;
