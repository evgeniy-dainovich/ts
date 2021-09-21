interface GreeterInterface {
  greet(appeal: string): void
}

class Greeter2 implements GreeterInterface {
  private readonly greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet(appeal: string) {
    console.log(`Hello, ${this.greeting} from ${appeal}`)
  }
}

const greeter2 = new Greeter2('world')
