class Greeter {
  readonly greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter = new Greeter('world')
console.log(greeter.greeting)
greeter.greeting = 'sun' // Cannot assign to 'greeting' because it is a read-only property.
