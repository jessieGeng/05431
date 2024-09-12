// Define an interface called 'Animal' with a property 'name' of type string
interface Animal {
  name: string;
}

// Create a class called 'Cat' that implements the 'Animal' interface
class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Create a method called 'makeSound' that returns a string
  makeSound(): string {
    return "Meow!";
  }
}

// Create a function called 'printAnimalName' that takes an argument 'animal' of type 'Animal'
function printAnimalName(animal: Animal | null): void {
  // Check if 'animal' is null or undefined using the '!' operator
  if (animal !== null && animal !== undefined) {
    // Use a type assertion with the 'as' keyword to access the 'name' property
    console.log((animal as Animal).name);
  } else {
    console.log("Unknown animal");
  }
}

// Create an instance of the 'Cat' class and pass a name to the constructor
const cat = new Cat("Whiskers");

// Call the 'printAnimalName' function with the 'cat' instance
printAnimalName(cat);

// Call the 'printAnimalName' function with a null value
printAnimalName(null);

// To run the file, save it with a `.ts` extension (e.g., `lab2-exercise.ts`), and assuming you have TypeScript installed, open a terminal and run the following command:
// tsc lab2-exercise-soln.ts && node lab2-exercise-soln.js
