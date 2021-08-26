// Uppercase<StringType> / Lowercase<StringType> / Capitalize<StringType>

type StringManipulationType = 'heLLo'
type UpperType = Uppercase<StringManipulationType> // HELLO
type LowerType = Lowercase<StringManipulationType> // hello
type CapitalType = Capitalize<StringManipulationType> // HeLLo
