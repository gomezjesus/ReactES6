import { Person } from "./person";

export function promote() {
  console.log("promote Method");
}

// Default --> import ... from '';
// Named --> import { ... } from '';

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teaching");
  }
}
