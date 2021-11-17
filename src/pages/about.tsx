import { HStack, Text, VStack, Heading, Image, Link } from "@chakra-ui/react";

export default function about() {
	return (
		<HStack 
			spacing={{base: "0px", md:"36px" }}
			justify="center"
			flexDirection={{base: "column", md: "row"}}
			
			>
				<ImageBox
					link="/catto"
					src="/catto.jpg"
					alt="cute cat with innocent eyes"
					heading="This is Cat #1"
					text="cute cat with innocent eyes"
				/>
				<ImageBox
					link="/catto2"
					src="/catto2.jpg"
					alt="brown cat with tongue out"
					heading="This is Cat #2"
					text="brown cat with tongue out"
				/>
				<ImageBox
					link="/catto3"
					src="/catto3.jpg"
					alt="angry brown-white cat"
					heading="This is Cat #3"
					text="angry brown-white cat"
				/>
		</HStack>
	);
}

function ImageBox(props) {
	return (
		<VStack>
			<Link href={props.link}>
				<Image src={props.src} alt={props.alt} h="300px" />
			</Link>
			<Heading>{props.heading}</Heading>
			<Text>{props.text}</Text>
		</VStack>
	);
}
