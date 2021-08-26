enum Directions1 {
  up,
  down,
  left,
  right,
}

const selectedDirection1 = Directions1.up // 0

enum Directions2 {
  up = 10,
  down,
  left,
  right,
}

const selectedDirection2 = Directions2.up // 10
const selectedDirection3 = Directions2.down // 11

enum StringDirection {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}

const stringDir = StringDirection.down // 'DOWN'

// reverse mapping
let up = Directions1.up // 0
let nameOfUp = Directions1[up] // up

// const enums
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

// objects vs enums
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

// as const – used for strings makes them literals, used for objects assigns a read-only attribute to its fields
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const

console.log(EDirection.Up) // 0

console.log(ODirection) // { Up: 0, Down: 1, Left: 2, Right: 3 }
console.log(ODirection.Up) // 0
