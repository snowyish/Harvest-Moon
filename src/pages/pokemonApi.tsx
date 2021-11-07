import { VStack, Text, Heading, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon(){
    const RandomPokemon = Math.floor(Math.random() * (152 - 1 + 1)) + 1;
    console.log(RandomPokemon);

    const [pokemon, setPokemon] = useState() as any;

    useEffect(async () => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${RandomPokemon}`);
        console.log(data);
        setPokemon(data);
    }, []);

    return (
		<VStack>
			<Heading>{pokemon?.name}</Heading>
			<Text>Height: {pokemon?.height} decimeters</Text>
			<HStack>
				<Text>Types:</Text>
				<Text>
					{pokemon?.types
						?.map((type) => {
							return type.type.name;
						})
						.join(" ,")}
				</Text>
			</HStack>
			<HStack>
				<Text>Abilities:</Text>
				<Text>
					{pokemon?.abilities
						?.map((ability) => {
							return ability.ability.name;
						})
						.join(" ,")}
				</Text>
			</HStack>
			
			<Text>
				Sprites:<Image
					src={pokemon?.sprites.front_default}
					alt="image"
				></Image>
			</Text>
		</VStack>
	);
}