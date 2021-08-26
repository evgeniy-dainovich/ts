interface Fish {
  swim(): void
}

interface Bird {
  fly(): void
}

function getSmallPet(): Bird | Fish {
  return Math.random() > 0.5 ? {fly: () => console.log('fly')} : {swim: () => console.log('swim')}
}

// ex 1
function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    return pet.swim()
  }
  return pet.fly()
}

const birdOrFish = getSmallPet()
move(birdOrFish)

// ex 2
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('hero', '*') // *hero
padLeft('hero', 2) // __hero

// Since nullable types are implemented with a union, you need to use a type guard to get rid of the null.
// Fortunately, this is the same code you’d write in JavaScript:
// ex 3
function f1(stringOrNull: string | null): string {
  if (stringOrNull === null) {
    return 'default'
  } else {
    return stringOrNull
  }
}

function f2(stringOrNull: string | null): string {
  return stringOrNull ?? 'default'
}

// ex 4
// User defined type guards
function isNumber(x: any): x is number {
  return typeof x === 'number'
}

let something = '1234'
let value = 5

if (isNumber(something)) {
  value = something
}

// ex 5
// User defined type guards
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

// Any time isFish is called with some variable,
// TypeScript will narrow that variable to that specific type if the original type is compatible.
const pet = getSmallPet()
function move2() {
  // Both calls to 'swim' and 'fly' are now okay.

  if (isFish(pet)) {
    pet.swim()
  } else {
    pet.fly()
  }
}

// extra materials
// https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html
