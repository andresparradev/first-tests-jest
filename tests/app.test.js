const { sum } = require('../app')

describe('sum', () => {
  test('sum is correctly', () => {
    const result = sum(2,2)
    expect(result).toBe(4)
  })

  test('no parameters', () => {
    const result = sum()
    expect(result).toBeUndefined()
  })

  test('only have one parameter', () => {
    const result = sum(2)
    expect(result).toBeUndefined()
  })

  test('no receives numbers', () => {
    const result = sum('5', '10')
    expect(result).toBeUndefined()
  })
})