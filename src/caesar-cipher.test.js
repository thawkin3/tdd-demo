import { encode } from './caesar-cipher'

describe('caesar cipher', () => {
  it('takes a string and a shift value and returns a new string', () => {
    expect(typeof(encode('abc', 1))).toBe('string')
  })

  it('shifts the A-Z characters by the correct amount', () => {
    expect(encode('abc', 1)).toBe('bcd')
    expect(encode('test', 2)).toBe('vguv')
  })

  it('does not affect non-alphabetic characters', () => {
    expect(encode('abc123', 1)).toBe('bcd123')
  })

  it('maintains case', () => {
    expect(encode('aBc', 1)).toBe('bCd')
  })

  it('handles wrapping past the end of the alphabet', () => {
    expect(encode('xyz', 2)).toBe('zab')
  })

  it('handles shift values greater than 26', () => {
    expect(encode('abc', 26)).toBe('abc')
    expect(encode('abc', 28)).toBe('cde')
  })

  it('handles shift values less than 0', () => {
    expect(encode('abc', 0)).toBe('abc')
    expect(encode('abc', -2)).toBe('yza')
  })

  // it('handles bad input', () => {

  // })
})
