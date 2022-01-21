// Write your solution here!

// const prepend = ["Milo", "Otis", "Garfield"];
// const removeLast = ["Milo", "Otis", "Garfield"];
// const removeFirst = ["Milo", "Otis", "Garfield"];

addPetsToEnd = (driver) => {
    driver.push("Odie")
    return driver;
};

function addPetsToBegining(driver) {
    driver.unshift("Odie")
    return driver;
}

removeLastPet = (driver) => {
    driver.pop("Garfield")
    return driver
}

removeFirstPet = (driver) => {
    driver.shift("Milo")
    return driver
}