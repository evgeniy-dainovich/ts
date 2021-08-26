// unknown
/*
There are often times where we want to describe the least-capable type in TypeScript.
This is useful for APIs that want to signal “this can be any value, so you must perform some type
of checking before you use it”. This forces users to safely introspect returned values.
*/

function upperCase(x: string) {
  return x.toUpperCase()
}

let fooAny: any = 10

// All of these will throw errors, but TypeScript won't complain since `foo` has the type `any`.
fooAny.x.prop
fooAny()
new fooAny()
upperCase(fooAny)

let fooUnknown: unknown = 10

// Since `foo1` has type `unknown`, TypeScript errors on each of these usages.
fooUnknown.x.prop // Object is of type 'unknown'.
fooUnknown() // Object is of type 'unknown'.
new fooUnknown() // Object is of type 'unknown'.
upperCase(fooUnknown) // Argument of type 'unknown' is not assignable to parameter of type 'string'

// solution
function hasX(obj: any): obj is {x: any} {
  return !!obj && typeof obj === 'object' && 'x' in obj
}

// Using a user-defined type guard we're allowed to access certain properties again.
if (hasX(fooUnknown)) {
  fooUnknown.x.prop
}

// We can also just convince TypeScript we know what we're doing by using a type assertion.
upperCase(fooUnknown as string)
