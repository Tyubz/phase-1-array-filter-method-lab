// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
const drivers = ["Abel", "Mutua", "Njugush", "Munyambu"];
console.log(findMatching(drivers, "mutua"));

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

console.log(fuzzyMatch(drivers, "Mu"));

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const driverObjects = [
    { name: "Abel", hometown: "Macha" },
    { name: "Njugush", hometown: "Kiambu" },
    { name: "Wakavinye", hometown: "Kitengela" },
];
console.log(matchName(driverObjects, "abel"));