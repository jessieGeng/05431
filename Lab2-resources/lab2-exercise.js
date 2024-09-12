// Create a class called 'Cat' that implements the 'Animal' interface
// TODO
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        this.sound = "meow";
    }
    return Cat;
}());
// Create a function called 'printAnimalName' that takes an argument 'animal' of type 'Animal'
// TODO
function printAnimalName(animal) {
    if (animal === null)
        return;
    console.log(animal.name);
}
// Create an instance of the 'Cat' class and pass a name to the constructor
var cat = new Cat("Whiskers");
console.log(cat.sound);
// Call the 'printAnimalName' function with the 'cat' instance
printAnimalName(cat);
// Call the 'printAnimalName' function with a null value
printAnimalName(null);
// To run the file, save it with a `.ts` extension (e.g., `lab2-exercise.ts`), and assuming you have TypeScript installed, open a terminal and run the following command:
// tsc lab2-exercise.ts && node lab2-exercise.js
