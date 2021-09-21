class GreeterWithPrivateGreeting {
  private readonly greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter1 = new GreeterWithPrivateGreeting('world')
console.log(greeter1.greeting) // Property 'greeting' is private
