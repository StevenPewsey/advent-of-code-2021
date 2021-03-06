import {
  calculateNumberWithMultipleOverLaps,
  calculateNumberWithMultipleOverLapsDiagonal,
  getInput,
} from "./day5"

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2

test("part 1, example", () => {
  const coordinates = getInput("day5/exampleInput.txt")

  expect(calculateNumberWithMultipleOverLaps(coordinates)).toEqual(5)
})

test("part 1, partial", () => {
  const coordinates = getInput("day5/partialRealInput.txt")

  expect(calculateNumberWithMultipleOverLaps(coordinates)).toEqual(20)
})

test("part 1, actual", () => {
  const coordinates = getInput("day5/realInput.txt")

  console.log(calculateNumberWithMultipleOverLaps(coordinates))
})

test("part 2, example", () => {
  const coordinates = getInput("day5/exampleInput.txt")

  expect(calculateNumberWithMultipleOverLapsDiagonal(coordinates)).toEqual(12)
})

test.only("part 2, actual", () => {
  const coordinates = getInput("day5/realInput.txt")

  console.log(calculateNumberWithMultipleOverLapsDiagonal(coordinates))
})
