// ReturnType<Type> - выделяет тип возвращаемого значения функции

function returnDictionary(): Dictionary1 {
  return {x: 'y'}
}

type returnedType = ReturnType<typeof returnDictionary> // { [key: string]: string | number; }
