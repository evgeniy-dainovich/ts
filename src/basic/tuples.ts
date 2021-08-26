type Coordinate = [number, number, number?]

const cord1 = [1, 2, 3]
const cord2 = [1, 2]

type Coordinate1 = [number, number, ...string[]] // show that there might be a lot of values
const cord3 = [1, 2, '3', '3', '3']
