class Greeter {
  constructor(message) {
    this.greeting = message
  }

  greet() {
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter = new Greeter('world')
