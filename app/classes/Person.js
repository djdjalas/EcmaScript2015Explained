import { log, logTitle } from '../WindowLogger';

export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    log(`Name : ${this.name} is ${this.age}`);
  }

  getName() {
    return this.name;
  }

  getAge(){
    return this.age;
  }

  static getObjectType() {
    log(`I am a person object`);
  }

  static upperCasePersonName(name){
    return name.toUpperCase();
  }
}
