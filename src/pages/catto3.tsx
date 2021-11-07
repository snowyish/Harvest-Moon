import { Center, VStack, Image, Text } from "@chakra-ui/react";

export default function catto3(){
    return (
		<Center>
			<VStack>
				<Image
					src="/catto3.jpg"
					alt="angry brown-white cat"
					h="400px"
				/>
				<Text
					maxWidth="500px"
					textAlign={{ base: "center", md: "justify" }}
				>
					This cat looks so angry for no specific reason which is so
					messed up honestly cus it looks clean so i think the cat is
					well-fed and well-cared so i really don't know what this
					makes this cat looks kinda annoyed or like angry so yeah
					catto, you still look so cute even when you're angry though
					lmao.
				</Text>
			</VStack>
		</Center>
	);
}