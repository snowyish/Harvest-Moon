import { Heading, HStack, VStack, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

export default function moneygame() {
	let [money, setmoney] = useState(0);
	let [upgrades, setupgrades] = useState(1);
	
	return (
		<Center>
			<VStack>
				<Heading>${money}</Heading>
				<Heading>{upgrades}x</Heading>
				<HStack>
					<Button colorScheme="blue" 
						onClick={() => {setmoney (money + (1 * upgrades));}
					} >
						Click Me!
					</Button>
					<Button colorScheme="blue"
						onClick={() => {
							if (money >= 50) {
							setmoney(money - 50);
							setupgrades(upgrades + 1);
							}
						}}>
						Upgrade (${40 + upgrades * 10})
					</Button>
				</HStack>
			</VStack>
		</Center>
	);
}
