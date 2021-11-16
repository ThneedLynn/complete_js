/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */

const mark1 = {
    mass:78,
    height: 1.69
}

const john1 = {
    mass:92,
    height: 1.95
}

const mark2 = {
    mass:95,
    height: 1.88
}

const john2 = {
    mass:85,
    height: 1.76
}

function calBMI(mass, height) {
    return mass / height ** 2; // mass / (height * height) 
}

const markHigherBMI_1 = calBMI(mark1.mass, mark1.height) > calBMI(john1.mass, john1.height);
const markHigherBMI_2 = calBMI(mark2.mass, mark2.height) > calBMI(john2.mass, john2.height);

console.log("markHigherBMI_1: ", markHigherBMI_1);
console.log("markHigherBMI_2: ", markHigherBMI_2);