// types are where you create structure that can help you write better code!
type Creature = {
    name: string;
}

// types cannot be declared more than once
// type Creature = {} // error!

// interfaces also create structure, but with one major difference to types
interface Boat {}

// interfaces can be redeclared/recreated/edited!
// valid!! this overwrites the previous!
interface Boat {
    name: string;
}

// ---------------------

// classes are used to construct stuff
// typically this is where much more complex stuff kicks in
class SailBoat implements Boat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // classes can contain methods!
    hasSails(): boolean {
        return true;
    }
}

class Kraken implements Creature {
    name: string;
    tentacles: number = 8;

    constructor(name: string, tentacleDamage: number) {
        this.name = name;

        // the Kraken will have between 0 and 8 tentacles
        this.tentacles = Math.min(
            Math.max(
                8 - tentacleDamage, 
                0
            ), 
            8
        )
    }

    countTentacles(): number {
        return this.tentacles;
    }
}

// ---------------------

function printEntityName(entity: Creature | Boat) : any {
    console.log(entity.name)
    return entity.name
}

// Create an instance of the 'Cat' class and pass a name to the constructor
const ourBoat = new SailBoat("Lovely");

const ourVillain = new Kraken("Aragorn", -2)

// Call the 'printEntityName' function with the 'SailBoat' instance
printEntityName(ourBoat);

// Call the 'printEntityName' function with the 'Kraken' instance
printEntityName(ourVillain);

// ---------------------

// Let's discuss class extension!
class Pet {
    makeSound(): void {
        console.log('Dog sound');
    }
}

// Derived class representing a 
// specific type of animal: Dog
class Dog extends Pet {
    bark(): void {
        console.log('WOOF WOOF!');
    }
}

const myDog = new Dog();
myDog.makeSound(); // 'Dog sound'
myDog.bark(); // 'WOOF WOOF!' 

// ---------------------

// This example also extends, but this is just for *type* extension:
type Shape = {
    color: string;
};

// Ampersand is used to extend a type!
// this is called an intersection!
type Square = Shape & {
    sideLength: number;
};

// now we use it!
const mySquare: Square = {
    color: 'red',
    sideLength: 5,
};
console.log(mySquare);

// ---------------------

// interfaces can do this too with "extends" explicitly!
interface Shape2 {
    color: string;
}
  
interface Square2 extends Shape2 {
    sideLength: number;
}

const mySquare2: Square2 = {
    color: "red",
    sideLength: 10
};

console.log(mySquare2);

// ---------------------

// a proper intersection type

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

// ---------------------

// what about "union" types?

// the following type is cool because it could be either or
type PartialPoint = { x: number; } | { y: number; };

// but classes cannot implement a union type!
class SomePartialPoint implements PartialPoint {
  x = 1;
  y = 2;
}

// ---------------------

// for objects

// optional properties
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // ...
    console.log(opts)
}

const shape = mySquare;
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

// ---------------------

// readonly properties!
interface SomeType {
    readonly prop: string;
}
   
function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
   
    // But we can't re-assign it.
    obj.prop = "hello";
    //   Cannot assign to 'prop' because it is a read-only property.
}

// ---------------------

// you can use index signatures to describe the types of possible values
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

// ---------------------
