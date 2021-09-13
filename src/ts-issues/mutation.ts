type Cat = {meow: () => void}
type Dog = {woof: () => void}
const createCat = (): Cat => ({meow: () => console.log('Meow!')})
const createDog = (): Dog => ({woof: () => console.log('Woof!')})

const mutateAnimals = (animals: (Cat | Dog)[]) => animals.push(createDog())

const cats: Cat[] = []
mutateAnimals(cats)
cats.forEach((cat) => cat.meow()) // But failed in runtime with cat.meow is not a function
