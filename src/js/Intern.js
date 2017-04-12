import Student from './Student';


class Intern extends Student {

  constructor(name, age, sex, years){
    super(name, age, sex);
    this.years = years;
  }

  decrementYears() {
    this.years--;
  }

  toString() {
    return super.toString() + ", " + this.years;
  }
}


export default Intern;
