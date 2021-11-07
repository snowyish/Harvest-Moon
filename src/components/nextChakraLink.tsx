/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

// eslint-disable-next-line import/no-default-export
export default function NextChakraLink(props: any): JSX.Element {
	return (
		<NextLink href={props.href} >
			<Link
				{...props}
			>
				{props.children}
			</Link>
		</NextLink>
	);
}
