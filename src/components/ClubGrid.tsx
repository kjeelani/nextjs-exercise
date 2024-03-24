import React, { useEffect } from "react";
import { useFetch } from "./AxiosHooks";
import { Club, Person } from "@/data/TestData";

/*
    READ ALL COMMENTS BEFORE PROCEEDING
    This section will test your ability to: 
        1) Call an API using AxiosHooks
        2) Use JSX Looping 

    The API you will use is "api/clubs". You will make a GET request via useFetch().
    The GET request requires a QUERY PARAMETER "clubName" as a string
    It will return the Club datatype (refer to TestData.ts) corresponding to the clubName (refer to App.tsx)
*/

interface ClubGridProps {
    clubName: string;
}

export function ClubGrid(cgprops: ClubGridProps) {
    /*
        This is how you fetch data from an API using Axios.

        refetch(config) -> A function that does a GET request with the config specified
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
            url: `XXX` // TODO: Figure out what goes here
        });
    }, []);

    return (
        <>
            {/**
             * TODO: Figure out what goes here
             */}
        </>
    );
}