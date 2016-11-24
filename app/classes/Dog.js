import Animal from './Animal';
import { log } from '../WindowLogger';

export default class Dog extends Animal {
  constructor(name, barkSound) {
    // this.name = name;
    super(name);
    this.barkSound = barkSound;
  }

  displayBarkSound() {
    const dogName = super.getAnimalName();
    log(`${dogName} barks like ${this.barkSound}`);
  }
}
