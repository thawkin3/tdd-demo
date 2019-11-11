/*********************************
 *** TEST 1
 ********************************/

// test
it('takes a string and a shift value and returns a new string', () => {
  expect(typeof(encode('abc', 1))).toBe('string')
})

// code
export const encode = (str, shiftAmount) => {
  return str
}
