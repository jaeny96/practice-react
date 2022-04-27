// Primitives : number, string, boolean
// More complex types : arryas, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = "Jisu";

let isInstructor: boolean;
isInstructor = true;

// More Complex types
let hobbies: string[];
hobbies = ["cooking", "listening to music"];

let person: { name: string; age: number };
person = {
  name: "Jisu",
  age: 27,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = "React - The Complete Guide";

// Union type
let courseInfo: string | number = "Reac - The Complete Guide";
courseInfo = 12345;

// Type Aliases
type Person = {
  name: string;
  age: number;
};

let person1: Person;
person = {
  name: "Jisu",
  age: 27,
};

let people1: Person[];

// Function & types
function add(a: number, b: number) {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

// Generics - 유연성과 타입안정성을 준다
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
