// any
const a = {name: '342'}

function stringToUpperCase(x: string) {
  return x.toUpperCase()
}

stringToUpperCase(a as any) // no error with any

// never
function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}

function infiniteRec(): never {
  return infiniteRec()
}

// void
function showMessage(message: string): void {
  console.log(message)
}
