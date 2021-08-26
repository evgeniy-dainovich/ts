// Exclude<Type, ExcludedUnion> / Extract<Type, Union> - создает перечисление на основе существующего

type Status = 'resolve' | 'reject' | 'pending' | 'delegated'

type PromiseStatus = Exclude<Status, 'delegated'>

type UserInfo = {age: number} | {age: string; name: string} | {name: string} | {address: string}

type PersonalUserInfo = Exclude<UserInfo, {address: string}> // { age: number } | { age: string; name: string } | { name: string }

type UserWithName = Extract<UserInfo, {name: string}> // { age: string; name: string } | { name: string }
