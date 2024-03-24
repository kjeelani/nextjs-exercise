import React, { useEffect } from "react";
import { Club, Person } from "@/data/TestData";
import { Box, Image, Heading, Text } from '@chakra-ui/react';


/*
    This section will test your ability to: 
        1) Call an API using AxiosHooks
        2) Use JSX Looping 
        3) Utilize useEffect and useState effectively
*/

interface PersonCardProps {
    key: string,
    person: Person
}

export function PersonCard(pcprops: PersonCardProps) {
    // This is how you fetch data with Axios
    let person = pcprops.person;

    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <Image src={person.image} alt={person.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
                {person.name}
            </Heading>
            <Text fontSize="md">{`${person.year} ${person.major} Major`}</Text>
            <Text fontSize="sm">{person.description}</Text>
        </Box>
    );
}