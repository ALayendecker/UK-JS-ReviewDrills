// Fundamental Javascript review
let solarNameString = "Solis System";    // example of declaring and defining in one line

let declareOnly;                         // example of only declaring a variable to be defined later

solarNameString = "Solar System";        // changing the definition of a variable (re-defining)


// various primitive data types
let number = 20;
let string = "string"
let boolean = true;
let undefinedVar = undefined;
let nullVar = null;
// there is also bigint and symbol but I rarely see these



//CONDITIONALS
console.log("=====CONDITIONALS=====")
// conditional operators 
// NOTE: I read my conditional statements out loud to myself to see if they make sense
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// != not equal example --- 5 != 10 "five is not equal to 10" this would be false
// == double equal allows comparisons across values that are not of the same primitive type from above 
            // example "5" == 5 is true!
            // normally it's safer to just use === to make sure you're always comparing "apples to apples"
// === the more strict version of equal comparisons 



let favoriteColor = "Grey"

if (favoriteColor === "Grey"){
    console.log("The conditional evaluated to true");
} else { // notice how I don't have any () for the else! else is meant to catch any other conditions that occurred not addressed by previous conditionals
    console.log("Value stored in favoriteColor is not 'Grey'");
}

let favoriteNumber = 23;
if (favoriteNumber > 15){
    console.log("Value in favorite number is greater than 15");
} if (favoriteNumber > 20){
    console.log("Value in favorite number is greater than 20");
} else if (favoriteNumber > 10){ 
    console.log("WHY DOESN'T THIS LOG"); // because else if's only evaluate if none of the prior conditions evaluated to true
} else {
    console.log("For anything else! No other condition specified occurred!")
}

// ARRAYS
console.log("=====ARRAYS=====")

//indexes           //0        //1      //2     //3     //4         //5        //6      //7
let planetsArr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// you can mix data-types in an array but this is often considered poor practice
let badArray = ["Hello", 10, true];

// finding values of index from array
// how many elements (items) are in planetsArr
console.log("How many elements in planetsArr: ", planetsArr.length);

// what is the last planet in the planetsArr 
console.log("What is the last planet in planetsArr: ", planetsArr[planetsArr.length - 1]); // this is fancy for saying how many elements are in planetsArr - 1 which gives us 7

console.log("Last Planet Equivalent: ", planetsArr[7]); // same as above but 

// console logging "Earth"
console.log("This should be earth: ", planetsArr[2]);

// Console logging all the planets in planetsArr
console.log("=====LOOPING=====")
for (let i = 0; i < planetsArr.length; i++) {
    const planet = planetsArr[i]; // the variable planet gets created by default when 
    console.log("This is planet at index:", i, planet); // you can log multiple variables in a single console.log
    
    if (planet === "Earth"){
        console.log("I found "+ planet + " at index " + i + "!")
    }
}

// Objects are really important! We can do all sorts of useful things with them. Here's a bit of preview of how objects are created and how to get values out of them

console.log("=====OBJECTS=====")
// Objects are made up of key value pairs 
// key's (sometimes called properties) are in front of the : and values are after
// keys are separated by a ,
let solarSystemObj = {
    planets: planetsArr, // the planets key is using the planets array as a value
    starName: "Sol",
    galaxyName: "Milky Way",
    numberOfMoons: 146,
    largestPlanet: planetsArr[4],       // able to specify singular element from array as a value as well
    smallestPlanet: planetsArr[0],
    favoriteNonPlanet: "Pluto",
    earthObj: { // you can have 'nested objects' inside of other objects here we have earthObj INSIDE of solarSystemObj
        populated: true,
        population: "7.8 Billion",
        earthDiameter: "12,742 km",
        numberOfMoons: 1
    }
}

// finding values of properties in objects
// the most common way to reach values stored inside of objects is to reference the name of the variable the object is in followed by a `.` then specifying the key of the value you want
console.log("Array of planets inside SolarSystemObj planets: ", solarSystemObj.planets) // array of planets in the 

console.log("3rd planet in SolarSystemObj Planets array: ", solarSystemObj.planets[2]) // don't forget that indexes start at 0 and not 1! Our 3rd planet would be at the 2nd index!

console.log("Galaxy name inside SolarSystemObj: ", solarSystemObj.galaxyName) // the galaxy name from solarSystemObj

console.log("Is earth populated: ", solarSystemObj.earthObj.populated) // notice how I had to specify solarSystemObj.earthObj first! then we have access to all the key's inside of earthObj

console.log("The earth has "+ solarSystemObj.earthObj.numberOfMoons + " moon(s)!")
