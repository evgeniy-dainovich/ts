enum TestEnum {
  foo, // 0
  bar, // 1
}

const testArg: number = 10

function func(arg: TestEnum) {
  console.log(arg)
}

func(testArg) // no warning
