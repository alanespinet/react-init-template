class Student {

  constructor(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  birthday() {
    this.age++;
  }

  toString() {
    return this.name + ", " + this.age + ", " + this.sex;
  }

}


export default Student;
