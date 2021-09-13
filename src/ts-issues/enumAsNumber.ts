enum TestEnum {
  foo,
}

const testArg: number = 10

function func(arg: TestEnum) {
  console.log(arg)
}

func(testArg) // no warning
