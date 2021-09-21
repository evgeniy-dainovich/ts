// object is a type that represents the non-primitive type,
// i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// With object type, APIs like Object.create can be better represented.

function create(o: object | null): void {}

create({prop: 0}) // ok
create([]) // ok
create(null) // ok
create(undefined) // Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

create(42) // Argument of type '42' is not assignable to parameter of type 'object | null'.
create('string') // Argument of type '"string"' is not assignable to parameter of type 'object | null'.
create(false) // Argument of type 'false' is not assignable to parameter of type 'object | null'.
