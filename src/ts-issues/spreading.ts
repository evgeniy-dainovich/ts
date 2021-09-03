type Metadata = {}
type UserMetadata = Record<string, Metadata>
// type UserMetadata = Map<string, Metadata> // after

const cache: UserMetadata = {}
// const cache: UserMetadata = new Map()
console.log(cache.foo)
// console.log(cache.get('foo'))

// somewhere in the project
const cacheCopy: UserMetadata = {...cache}
console.log(cacheCopy.foo)
// console.log(cacheCopy.get('foo'))
