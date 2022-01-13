import { Heading, HStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function Main() {
	return (
		<Container
			borderTop="5px #0a7457 solid"
			px="20px"
			py="10px"
			bg="brand.transparent"
			as="header"
		>
			<ContainerInside>
				<Heading>Web Developer</Heading>
				<HStack justify="center">
					<NextLink href="/">Home</NextLink>
					<NextLink href="/about">About</NextLink>
					<NextLink href="/catto">Test</NextLink>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
