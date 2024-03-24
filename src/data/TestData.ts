// DO NOT TOUCH anything in TestData.ts. This contains data that you can use to test your implementation.
// However, READ THIS to familiarize yourself with TypeScript
import { faker } from '@faker-js/faker';



/* 
    An interface is similar to creating an object with definitive types.
    Static typing helps ensure error detection, readibility, and maintainence

    Exporting this interface allows it to be used in other ts/tsx files
*/
export interface Person {
    name: string,
    major: string,
    year: string,
    description: string,
    image: string //File Path
}

export interface Club {
    name: string,
    description: string,
    people: Person[] //people is an array of Cards
}

// Now we can define a Club object
export let delta: Club = {
    name: "Delta Consulting",
    description: "Berkeley's premier ed-tech consulting club!",
    people: [
        {
            name: "Kaif Jeelani",
            major: "EECS",
            year: "2nd Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "kaif.png"
        },
        {
            name: "Manu John",
            major: "CS and Business",
            year: "3rd Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "manu.png"
        },
        {
            name: "Shailee Nanavati",
            major: "EECS and Data Science",
            year: "2nd Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "shailee.png"
        }
    ]
}

// For random club generation
export function randomClub(): Club {
    const majorList = ["EECS", "DS", "CS", "Business", "MCB", "Math", "Physics"]
    const year = ["1st Year", "2nd Year", "3rd Year", "4th Year"]

    let randomClub: Club = {
        name: `${faker.animal.type()} Club`,
        description: faker.lorem.lines(1),
        people: []
    }

    for (let i = 0; i < Math.random() * 9; i++) {
        randomClub.people.push({
            name: faker.person.fullName(),
            major: majorList[Math.floor(Math.random() * majorList.length)],
            year: year[Math.floor(Math.random() * year.length)],
            description: faker.lorem.lines(3),
            image: "kaif.png" // It was always Kaif's all along!!!
        })
    }

    return randomClub;
}
