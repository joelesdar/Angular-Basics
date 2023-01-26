const username: string | number = 'joelesdar';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 3);

// class Person {
//   private age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName= lastName;
//   }
// }

class Person {
  constructor(private age: number, public lastName: string) {}
}

const Joel = new Person(23, 'Diaz Arévalo');
Joel.lastName;
//Joel.age;
