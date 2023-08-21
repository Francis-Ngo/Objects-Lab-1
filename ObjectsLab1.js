// Problem 1
// 1 Declare a JS object called carThree with 4 properties 
const carThree = {
    wheels: 4,
    owner: "John",
    isBroken: false,
    color: "blue"
};

//2 Use dot notation to add a new property called price with a number value
carThree.price = 15000;

//3 Use bracket notation to add a new property called year with a number value
carThree["year"] = 2023;

//4 Use dot notation to change the value of the isBroken property
carThree.isBroken = true;

//5 Use dot notation to read the value of owner
const ownerValue = carThree.owner;

//6 Create a new variable (not part of the object) called clientIsInterested that has no value.
let clientIsInterested;

//7 Check if car color is blue. If true, set clientIsInterested to true, else false.

if (carThree.color === "blue") {
    clientIsInterested = true;
} else {
    clientIsInterested = false;
}

//8 Delete the owner property of carThree.
delete carThree.owner;


//Problem 2
//1 Declare a JS object called store with 4 properties
const store = {
    profit: 999999999,
    manager: "Alice",
    isOpenNow: true,
    isVeryExpensive: false
};

//2 Use dot notation to add a new property called location with a string value
store.location = "Downtown";

//3 Use bracket notation to add a new property called storeType with a string value
store["storeType"] = "Jewelry";

//4 Use dot notation to change the value of the isOpenNow property
store.isOpenNow = false;

//5 Use dot notation to read the value of isVeryExpensive 
const isVeryExpensiveValue = store.isVeryExpensive;

//6 Create a new variable (not part of the object) called canShopHere that has no value.
let canShopHere;

//7 Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
if (store.isOpenNow && !store.isVeryExpensive) {
    canShopHere = true;
} else {
    canShopHere = false;
}

//8 Delete the profit property of store.
delete store.profit;


//Problem 3
//1 Declare a JS object called home with 4 properties
const home = {
    rooms: 3,
    bathrooms: 2,
    isForSale: true,
    isInGoodLocation: true
};

//2 Use dot notation to add a new property called price with a number value
home.price = 250000;

//3 Use bracket notation to add a new property called year with a number value
home["year"] = 2005;

//4 Use dot notation to change the value of the isForSale property
home.isForSale = false;

//5 Use dot notation to read the value of bathrooms
const bathroomsValue = home.bathrooms;

//6 Create a new variable (not part of the object) called buyHouse that has no value.
let buyHouse;

//7 Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
if (home.isForSale && home.isInGoodLocation) {
    buyHouse = true;
} else {
    buyHouse = false;
}

// Delete the isForSale property of home.
delete home.isForSale;

//Problem 4 and 5
//1 Declare a JS object with 4 properties (4 keys and 4 values).
const myObject = {
    key1: "value1",
    key2: 42,
    key3: true,
    key4: ["apple", "banana"]
};

//2 Use dot notation to add a new property.
myObject.newProperty = "Hello";

//3 Use bracket notation to add a new property.
myObject["anotherProperty"] = false;

//4 Use dot notation to change the value of one of the properties.
myObject.key3 = false;

//5 Use dot notation to read the value of one of the properties.
const valueOfKey4 = myObject.key4;

//6 Create a new variable (not part of the object) that has no value.
let variableValue;

//7 Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
if (myObject.key2 > 20 && myObject.key3 === false) {
    variableValue = true;
} else {
    variableValue = false;
}

//8 Delete one of the object properties.
delete myObject.key1;

