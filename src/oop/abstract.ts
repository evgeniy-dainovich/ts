abstract class Animal {
  move(): void {
    console.log('roaming the earth...')
  }
}

const animal = new Animal() // Cannot create an instance of an abstract class.

class Rabbit implements Animal {
  move(): void {
    console.log('jump')
  }
}

const rabbit = new Rabbit() // OK

rabbit.move() // jump
