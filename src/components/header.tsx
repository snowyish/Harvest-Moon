import { Heading, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function Main() {
	return (
		<HStack
			borderTop="5px #E26A2C solid"
			justify="space-between"
			px="30px"
			py="10px"
			as="header"
		>
			<Heading>Web Developer</Heading>
			<HStack justify="center" align="center">
				<NextLink href="/">
					Home 
				</NextLink>
				<NextLink
					href="/cat">
					About 
				</NextLink>
				<NextLink href="/catto">
					Test
				</NextLink>
			</HStack>
		</HStack>
	);
}
