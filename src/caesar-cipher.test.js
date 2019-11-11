import { encode } from './caesar-cipher'

describe('caesar cipher', () => {
  it('takes a string and a shift value and returns a new string', () => {
    expect(typeof(encode('abc', 1))).toBe('string')
  })

  it('shifts the A-Z characters by the correct amount', () => {
    expect(encode('abc', 1)).toBe('bcd')
    expect(encode('test', 2)).toBe('vguv')
  })

  // it('does not affect non-alphabetic characters', () => {

  // })

  // it('maintains case', () => {

  // })

  // it('handles wrapping past the end of the alphabet', () => {

  // })

  // it('handles shift values greater than 26', () => {

  // })

  // it('handles bad input', () => {

  // })
})
