import { Box, BoxProps } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function ContainerInside(props: BoxProps): JSX.Element {
	return (
		<Box maxW="1200px" w="100%" mx="25px" {...props}>
			{props.children}
		</Box>
	);
}
