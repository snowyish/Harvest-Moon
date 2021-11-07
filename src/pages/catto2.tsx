import { Center, Image, VStack, Text } from "@chakra-ui/react";

export default function catto2() {
    return (
		<Center>
			<VStack>
				<Image
					src="/catto2.jpg"
					alt="brown cat with tongue out"
					h="400px"
				/>
				<Text
					maxWidth="500px"
					textAlign={{ base: "center", md: "justify" }}
				>
					This cat shows a big disrespect for its owner but still
					manages to look super cute that we can't help but to squeeze
					them like a squishy. It probably thought we are so easily to
					be defeated which is not completely wrong but it is also so
					annoying but we still love them just the way they are.
				</Text>
			</VStack>
		</Center>
	);
}