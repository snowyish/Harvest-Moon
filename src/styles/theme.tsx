/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			primary: "#064635",
			secondary: "#519259",
			transparant: "rgba(255,255,255,0.3)",
		},
	},
	fonts: {
		heading: "Cocogoose-Pro-Semilight",
		body: "Cocogoose-Pro-Light",
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				lineHeight: "base",
				padding: 0,
				margin: 0,

				background:
					"#064635 linear-gradient(120deg, #064635 0%, #118040 30%, #085026 100%)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			h1: {
				color: "#F4EEA9",
			},
			h2: {
				color: "#F4EEA9",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
				background: "#118040 30%",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
			"@font-face": [
				{
					fontFamily: "Cocogoose-Pro-Semilight",
					src: "url( '/fonts/Cocogoose Pro Semilight.ttf' )",
				},
				{
					fontFamily: "Cocogoose-Pro-Light",
					src: "url( '/fonts/Cocogoose Pro Light.ttf' )",
				},
			],
		}),
	},
});

export default theme;
