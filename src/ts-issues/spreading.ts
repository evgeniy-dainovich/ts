type Metadata = {}

type UserMetadata = { [key: string]: Metadata }

const cache: UserMetadata = {}
console.log(cache.foo)
// 30 файлов спустя
const cacheCopy: UserMetadata = { ...cache }
console.log(cacheCopy.foo)

// // type UserMetadata = { [key: string]: Metadata } // before
// type UserMetadata = Map<string, Metadata> // after

// const cache: UserMetadata = new Map()
// console.log(cache.get('foo'))
// // 30 файлов спустя

// const cacheCopy: UserMetadata = { ...cache }

// console.log(cacheCopy.get('foo'))
