import { Image, VStack, Text } from "@chakra-ui/react";

export default function catto(){
    return (
        <VStack >
            <Image src="/catto.jpg" alt="cute cat with innocent eyes" h="400px" />
            <Text maxWidth="500px" textAlign={{base: "center", md: "justify"}}>
                This cat shows how cats may not be abused by any humans in this cruel world and 
                and they are just an angel but also devil little beautiful creature that lives in this 
                round earth. The cat shows you what an innocent animal can possibly looks like. 
                All they do is sleep, play, and eat but weirdly we still love them though they thought they 
                owned us, not the other way around. 
            </Text>
        </VStack>
        );
}