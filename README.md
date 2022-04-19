## Typescript

<!--v-->

### About speaker

My name is Evgeniy Dainovich

Skype: nukink

Presentation: [https://evgeniy-dainovich.github.io/ts/](https://evgeniy-dainovich.github.io/ts/)

Repository: [https://github.com/evgeniy-dainovich/ts](https://github.com/evgeniy-dainovich/ts)

<!--s-->

## What is TypeScript?

<!--v-->

### TypeScript is JavaScript with syntax for types

- Voted as third most loved programming language in the [Stack Overflow 2021 Developer survey](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages), (2nd in [2020](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted))

- TypeScript was used by 69% of the respondents [2021 State of JS](https://2021.stateofjs.com/en-US/other-tools/#javascript_flavors), (78% in [2020](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/)).

<!--v-->

### Run .ts files with node

- `npm install -g typescript tsc`
- `tsc --init`
- create `filename.ts` file
- `tsc filename.ts`
- `node filename.js`

<!--v-->

### Run .ts files with ts-node

- `npm install -D typescript ts-node`
- create tsconfig.json file with required settings
- create `filename.ts` file
- `npx ts-node filename.ts`

<!--v-->

### tsconfig.json

```json data-line-numbers=[]
{
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "lib": ["es2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "rootDir": "src",
    "sourceMap": true,
    "strict": true,
    "target": "es2019"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "src/**/math.js"]
}
```

<!--v-->

## Useful links

- [Official documentation](https://www.typescriptlang.org/docs/)
- [Playground](https://www.typescriptlang.org/play)
- [tsconfig options](https://www.typescriptlang.org/tsconfig)

<!--s-->

## Primitive types

<!--v-->

### string, number, boolean, null, undefined

```ts data-line-numbers=[]
const age: number = 12
const givenName: string = 'Alex'
const isAdult: boolean = false
const undef: undefined = undefined
const nullable: null = null

type PaperName = string
function collect(paper: PaperName): void {}
```

<!--v-->

### any

```ts data-line-numbers=[]
const a = {name: '342'}

function stringToUpperCase(x: string) {
  return x.toUpperCase()
}

stringToUpperCase(a as any) // no error with any
```

<!--v-->

### object

object is a type that represents the non-primitive type

```ts data-line-numbers=[]
function create(o: object | null): void {}

create({prop: 0}) // ok
create([]) // ok
create(null) // ok
create(undefined) // Error

create(42) // Error
create('string') // Error
create(false) // Error
```

<!--v-->

### void

```ts data-line-numbers=[]
function showMessage(message: string): void {
  console.log(message)
}
```

<!--v-->

### never

```ts data-line-numbers=[]
function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}

function infiniteRec(): never {
  return infiniteRec()
}
```

<!--v-->

### unknown

```ts data-line-numbers=[]
let fooAny: any = 10

// All of these will throw errors, but TypeScript won't complain since `foo` has the type `any`.
fooAny.x.prop
fooAny()
new fooAny()
upperCase(fooAny)

let fooUnknown: unknown = 10

// Since `foo1` has type `unknown`, TypeScript errors on each of these usages.
fooUnknown.x.prop // error
fooUnknown() // error
new fooUnknown() // error
upperCase(fooUnknown) // error
```

<!--v-->

### unknown

#### how to use?

```ts data-line-numbers=[]
let fooUnknown: unknown = JSON.parse('{"x":{"prop":"x"}}')

fooUnknown.x.prop // Object is of type 'unknown'.

function hasX(obj: any): obj is {x: any} {
  return !!obj && typeof obj === 'object' && 'x' in obj
}

// Using a user-defined type guard we're allowed to access certain properties again.
if (hasX(fooUnknown)) {
  fooUnknown.x.prop
}

// We can also just convince TypeScript we know what we're doing by using a type assertion.
upperCase(fooUnknown as string)
```

<!--s-->

## Types & Interfaces

<!--v-->

### type

Can't be re-opened or changed after being declared

```ts data-line-numbers=[]
type StringType = string

type TupleType = [string, string, string]

type ConsoleLogType = (smth: string) => void

type OnlyBools = {
  [key: string]: boolean
}

const conforms: OnlyBools = {
  del: true,
  rodney: false,
}
```

<!--v-->

### type

#### union

```ts data-line-numbers=[]
type UnionType1 = 'type1' | 'type2'

function showType(arg: UnionType1) {
  console.log(arg)
}

showType('type1') // type1
showType(7) // Argument of type '7' is not assignable to parameter of type 'UnionType1'.

type UnionType2 = {a: string} | {b: number}
const ut21: UnionType2 = {a: ''}
const ut22: UnionType2 = {b: 3}
```

<!--v-->

### type

#### intersection

```ts data-line-numbers=[]
type LeftType = { id: number left: string }
type RightType = { id: number right: string }

type IntersectionType = LeftType & RightType

function showType(args: IntersectionType) {
  console.log(args)
}

showType({ id: 1, left: 'test', right: 'test' }) // {id: 1, left: "test", right: "test"}
```

<!--v-->

### interfaces

#### extending

```ts data-line-numbers=[]
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}
```

<!--v-->

### interfaces

#### declaration merging

```ts data-line-numbers=[]
interface Window {
  title: string
}

interface Window {
  ts: import('typescript')
}

const src = 'const a = "Hello World"'
window.ts.transpileModule(src, {})
```

<!--v-->

### interfaces vs types

When to use type:

- when defining an alias for primitive types (string, boolean, number, etc)
- when need to use union or intersection
- when defining tuple types
- when defining function types
- when needing to take advantage of mapped types

When to use interface:

- for all object types where using type is not required (see above)
- when you want to take advantage of declaration merging
<!--s-->

## Non-primitive types

<!--v-->

### tuples

```ts data-line-numbers=[]
type Coordinate = [number, number, number?]

const cord1: Coordinate = [1, 2, 3]
const cord2: Coordinate = [1, 2]

type Coordinate1 = [number, number, ...string[]]

const cord3: Coordinate1 = [1, 2, '3', '3', '3']
```

<!--v-->

### arrays

```ts data-line-numbers=[]
const numbers: number[] = [1, 2, 3, 4, 5]

type Guy = {age: number; name: string}

const guys1: Guy[] = [
  {name: 'alex', age: 22},
  {name: 'john', age: 23},
]

const guys2: Array<Guy> = [
  {name: 'alex', age: 22},
  {name: 'john', age: 23},
]
```

<!--v-->

### arrays (not empty)

```ts data-line-numbers=[]
function calculate(numbers: [string]): number

function calculate(numbers: string[]): number

function calculate(numbers: Array<string>): number
```

<!--v-->

### functions

#### declaration

```ts data-line-numbers=[]
function sum(a: string, b: string): string
function sum(a: number, b: number): number
function sum(a: any, b: any) {
  return a + b
}

const x = sum(1, 2)
const y = sum('a', 'b')
```

<!--v-->

### Function

```ts data-line-numbers=[]
function doSomething(f: Function) {
  return f(1, 2, 3)
}

// better
function doSomething(f: (arg1: number, arg2: number, arg3: number) => number) {
  return f(1, 2, 3)
}
```

<!--v-->

### enum

#### numeric enum

```ts data-line-numbers=[]
enum Directions1 {
  up,
  down,
  left,
  right,
}

const selectedDirection1 = Directions1.up // 0 (autoincrement starts from 0)
```

<!--v-->

### enum

#### string enum

```ts data-line-numbers=[]
enum StringDirection {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}

const stringDir = StringDirection.down // 'DOWN'
```

<!--v-->

### enum

#### const enum

```ts data-line-numbers=[]
const enum Direction3 {
  Up,
  Down,
  Left,
  Right,
}

const directions = [Direction3.Up, Direction3.Down, Direction3.Left, Direction3.Right]

/*
after compilation
"use strict";
let directions = [
    0, // Up
    1, // Down
    2, // Left
    3, // Right
]
*/
```

<!--s-->

## OOP in TS

<!--v-->

### JS class

```ts data-line-numbers=[]
class Greeter {
  constructor(message) {
    this.greeting = message
  }

  greet() {
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter = new Greeter('world')
```

<!--v-->

### readonly

```ts data-line-numbers=[]
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
```

<!--v-->

### private

```ts data-line-numbers=[]
class Greeter {
  private readonly greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    console.log(`Hello, ${this.greeting}`)
  }
}

const greeter = new Greeter('world')
console.log(greeter.greeting) // Property 'greeting' is private
```

<!--v-->

### implements Interface

```ts data-line-numbers=[]
interface GreeterInterface {
  greet(appeal: string): void
}

class Greeter implements GreeterInterface {
  private readonly greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet(appeal: string) {
    console.log(`Hello, ${this.greeting} from ${appeal}`)
  }
}

const greeter = new Greeter('world')
```

<!--v-->

### protected

```ts data-line-numbers=[]
class Person {
  constructor(protected name: string) {}
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

const howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // Property 'name' is protected
```

<!--v-->

### static

```ts data-line-numbers=[]
class Circle {
  static pi: number = 3.14

  static calculateArea(radius: number) {
    return this.pi * radius * radius
  }
}

console.log(Circle.pi)
console.log(Circle.calculateArea(5))
```

<!--v-->

### abstract

```ts data-line-numbers=[]
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
```

<!--s-->

## Other features

<!--v-->

### generic

```ts data-line-numbers=[]
type Container<T> = {value: T}

const container1: Container<number> = {value: '344'} // Type 'string' is not assignable to type 'number'
const container2: Container<number> = {value: 344}
```

<!--v-->

### generic

```ts data-line-numbers=[]
interface dbSet<T> {
  get(id: number): T
  getAll(): T[]
  create(smth: T): {id: number}
  patch(fieldsToUpdate: Partial<T>): T
  delete(id: number): void
}
```

<!--v-->

### complex interfaces

```ts data-line-numbers=[]
type ID = string | number

type PassportData = {
  number: string
  expiresAt: string
}

interface Coordinates {
  lng: string
  lat: string
}

interface CourierInterface {
  readonly id: ID
  readonly passportData: PassportData
  name?: string
  coordinates: Coordinates
}
```

<!--v-->

### lookup types

```ts data-line-numbers=[]
interface Person {
  name: string
  location: string
  coords: {
    lng: string
    lat: string
  }
}

// We can also rename fields and fields below will autorename too (except union types)

type PersonKey = keyof Person // "name" | "location" | "coords"
type Name = Person['name'] // string
type Coords = Person['coords'] // {lng: string; lat: string}
```

<!--v-->

### narrowing

#### by checking type

```ts data-line-numbers=[]
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('hero', '*') // *hero
padLeft('hero', 2) // __hero
padLeft('hero', {} as string) // Runtime Error: Expected string or number'
```

<!--v-->

### narrowing

#### by checking with guard

```ts data-line-numbers=[]
interface Fish {
  swim(): void
}

interface Bird {
  fly(): void
}

function getRandomPet(): Bird | Fish {}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function move(pet) {
  isFish(pet) ? pet.swim() : pet.fly()
}
const pet = getRandomPet()
move(pet)
```

<!--v-->

### template literal

```ts data-line-numbers=[]
type NotificationObject = 'user' | 'host'
type NotificationOperation = 'changed' | 'deleted'

// "user changed" | "user deleted" | "host changed" | "host deleted"
type NotificationMessage = `${NotificationObject} ${NotificationOperation}`
```

<!--v-->

### private fields

```ts data-line-numbers=[]
class Person {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}!`)
  }
}

let jeremy = new Person('Jeremy Bearimy')

// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
jeremy.#name
```

<!--s-->

## Using js library without type declarations

<!--v-->

### app.ts

```ts data-line-numbers=[]
// Could not find a declaration file for module 'right-pad'.
// 'node_modules/right-pad/rightpad.js' implicitly has an 'any' type.

import rightPad from 'right-pad'
```

<!--v-->

Solutions:

- `npm i @types/untyped-module`
- create and include declaration file

<!--v-->

### right-pad.d.ts

```ts data-line-numbers=[]
declare module 'right-pad' {
  export default function rightPad(arg: string): string
}
```

<!--v-->

### app.ts

```ts data-line-numbers=[]
import rightPad from 'right-pad'

rightPad(3) // Argument of type 'number' is not assignable to parameter of type 'string'.
rightPad('3') // Ok
```

<!--s-->

## utility types

- Record
- Readonly
- Partial/Required
- Pick/Omit
- Exclude/Extract
- ReturnType
- stringManipulation

<!--v-->

### Record

```ts data-line-numbers=[]
type Dictionary1 = {[key: string]: string | number}

const dic1: Dictionary1 = {}
const dic2: Dictionary1 = {harryPotter: 'Rowling', twilight: 'Meyer'}

type Dictionary2 = Record<string, string | number>

const dic3: Dictionary2 = {harryPotter: 'Rowling'}
```

<!--v-->

### Readonly

```ts data-line-numbers=[]
type AdvanceFigure = {
  width: number
  height: number
  coords: {
    x: number
    y: number
  }
}

const readonlyAdvFigure: Readonly<AdvanceFigure> = {
  width: 10,
  height: 10,
  coords: {x: 10, y: 10},
}

readonlyAdvFigure.width = 25 // Cannot assign to 'width' because it is a read-only property
readonlyAdvFigure.coords.x = 25 // no error
```

<!--v-->

### Partial/Required

```ts data-line-numbers=[]
type Figure = {
  width: number
  height: number
  area?: number
}

type Dimension = Partial<Figure>

const dim1: Dimension = {width: 12}
const dim2: Dimension = {height: 12}
const dim3: Dimension = {width: 12, height: 12}
// Property 'area' is missing in type '{ width: number; height: number; }'
// but required in type 'Required<Figure>'
const dim4: Required<Figure> = {width: 12, height: 12} // error
```

<!--v-->

### Pick/Omit

```ts data-line-numbers=[]
type Figure = {
  width: number
  height: number
  area?: number
}

type FigureDimensions = Pick<Figure, 'height' | 'width'> // { width: number; height: number; }
type FigureWithoutArea = Omit<Figure, 'area'> // { width: number; height: number; }
```

<!--v-->

### Exclude/Extract

```ts data-line-numbers=[]
type Status = 'resolve' | 'reject' | 'pending' | 'delegated'

type PromiseStatus = Exclude<Status, 'delegated'>

type UserInfo = {age: number} | {age: string; name: string} | {name: string} | {address: string}

// { age: number } | { age: string; name: string } | { name: string }
type PersonalUserInfo = Exclude<UserInfo, {address: string}>

// { age: string; name: string } | { name: string }
type UserWithName = Extract<UserInfo, {name: string}>
```

<!--v-->

### Where to read more

- [utility types documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [utility types library](https://github.com/piotrwitek/utility-types)
- [types challenges](https://github.com/type-challenges/type-challenges#challenges)

<!--s-->

## Typescript issues

- Structural typing
- Enum as number
- Private is not private
- Cloning
- Mutations

<!--v-->

### Structural typing

```ts data-line-numbers=[]
interface Book {
  price: number
  name: string
}

interface Car {
  price: number
  name: string
  maxSpeed: number
  color: string
}

function buyBook(_book: Book): void {}

const car = {
  price: 10000,
  name: 'BMW',
  maxSpeed: 200,
  color: 'red',
}

buyBook(car) // no any issues with type cheking
```

<!--v-->

### Enum as number

```ts data-line-numbers=[]
enum TestEnum {
  foo, // 0
  bar, // 1
}

function func(arg: TestEnum) {
  console.log(arg)
}

const testArg: number = 10

func(testArg) // no warning
```

<!--v-->

### Private is not private

```ts data-line-numbers=[]
class Member {
  private secret = 'private member'
}

const member = new Member()
// Property 'secret' is private and only accessible within class 'Member'.
member.secret
// Works like a sharm. The privacy of members are only enforced within the compiler.
;(member as any).secret
```

<!--v-->

### Cloning

```ts data-line-numbers=[1,2,5,7,11,12|1,3,6,8,11,13]
type Metadata = {}
type UserMetadata = Record<string, Metadata>
type UserMetadata = Map<string, Metadata>

const cache: UserMetadata = {}
const cache: UserMetadata = new Map()
console.log(cache.foo)
console.log(cache.get('foo'))

// somewhere in the project
const cacheCopy: UserMetadata = {...cache}
console.log(cacheCopy.foo)
console.log(cacheCopy.get('foo')) // runtime error
```

<!--v-->

### Mutation

```ts data-line-numbers=[]
type Cat = {meow: () => void}
type Dog = {woof: () => void}
const createCat = (): Cat => ({meow: () => console.log('Meow!')})
const createDog = (): Dog => ({woof: () => console.log('Woof!')})

const mutateAnimals = (animals: (Cat | Dog)[]) => animals.push(createDog())

const cats: Cat[] = []
mutateAnimals(cats)
cats.forEach((cat) => cat.meow()) // Failed in runtime with cat.meow is not a function
```

<!--v-->

### Useful links

- [do's and don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [best practices](https://blog.softwaremill.com/typescript-mistakes-to-avoid-d3ab240c90eb)
- [why TS is bad](https://www.t.me/why_typescript_is_bad)
