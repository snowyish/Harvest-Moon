import { Center, CenterProps } from "@chakra-ui/react";

export default function Container(props: CenterProps): JSX.Element {
	return (
		<Center as="section" {...props}>
			{props.children}
		</Center>
	);
}
