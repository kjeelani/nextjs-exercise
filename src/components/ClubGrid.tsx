import React, { useEffect } from "react";
import { useFetch } from "./AxiosHooks";
import { Club, Person } from "@/data/TestData";
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { PersonCard } from "./PersonCard"


/*
    READ ALL COMMENTS BEFORE PROCEEDING
    This section will test your ability to: 
        1) Call an API using AxiosHooks
        2) Use JSX Looping 

    The API you will use is "api/clubs". You will make a GET request via useFetch().
    The GET request requires a query parameter "clubName" as a string
    It will return the Club datatype (refer to TestData.ts) corresponding to the clubName (refer to App.tsx)
*/

interface ClubGridProps {
    clubName: string;
}

export function ClubGrid(cgprops: ClubGridProps) {
    /*
        This is how you fetch data from an API using Axios.

        refetch() -> A function you pass in the AXIOS config
            a) Refer here for more info: https://axios-http.com/docs/req_config 
        data -> What is recieved after calling refetch()
        error -> Will be true when API has returned an error, and false otherwise
        loading -> Will be true when API is still loading, and false otherwise

        IT IS KEY THAT YOU SET manual: true because this will ensure that
        you can call the API with refetch(). Or else errors will occur
    */
    const [data, error, loading, refetch] = useFetch({
        url: `api/clubs`,
        manual: true
    }); 

    useEffect(() => {
        // This gets called only once right before the component is mounted (or loaded)
        // We fetch the data from the API ONLY WHEN THE ABOVE IS TRUE
        refetch({
            url: `api/clubs?clubName=${cgprops.clubName}`
        });
    }, []);

    return (
        <>
        {
            data && 
                <Box>
                    <Box textAlign="center">
                        <Heading as="h2" size="xl" mb={4}>
                            {data.name}
                        </Heading>
                        <Text fontSize="lg" mb={6}>
                            {data.description}
                        </Text>
                    </Box>
                    <SimpleGrid columns={[1, 2, 3]} gap={12}>
                        {data.people.map((person: Person) => (
                            <PersonCard key={person.name} person={person} />
                        ))}
                    </SimpleGrid>
                </Box>      
        }
        </>
    );
}