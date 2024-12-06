let age = 25;
function displayAge() {
    console.log("Age:", age);
}
function changeAge(newAge) {
    age = newAge;
    console.log("Updated Age:", age);
}
console.log("Before calling functions:");
displayAge();
console.log("After calling changeAge:");
changeAge(30);
displayAge();
