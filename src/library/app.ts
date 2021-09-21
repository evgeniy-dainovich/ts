import {sin, sum} from './math'
import rightPad from 'right-pad'

rightPad(3) // Argument of type 'number' is not assignable to parameter of type 'string'.
rightPad('3') // Ok

sin(1) // Ok
sin('1') // Argument of type 'string' is not assignable to parameter of type 'number'

sum(1, 2, 3) // Ok
sum(1, '2', 'd') // Argument of type 'string' is not assignable to parameter of type 'number'
