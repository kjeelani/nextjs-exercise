import type { NextApiRequest, NextApiResponse } from 'next'
import { delta, randomClub } from "@/data/TestData";
import { NextRequest } from 'next/server';
import { ParsedUrlQuery } from 'querystring';



// Ignore this. Refer to ClubGrid for instructions on how to call this API

function createClub(clubname: any) {
    if (clubname === "delta") {
        return delta;
    } else {
        return randomClub();
    }
}

interface ClubQuery extends ParsedUrlQuery {
    clubName?: string,
}

interface ClubRequest extends NextApiRequest {
    query: ClubQuery; 
}

export default function handler(
    req: ClubRequest,
    res: NextApiResponse
  ) {
        if(req.method === "GET") {
            try {
                let club = createClub(req.query.clubName);
                res.status(200).json(club)
            } catch(error) {
                res.status(400);
            }
        } else {
            res.status(404);
        }
        res.end()
}