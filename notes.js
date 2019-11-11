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


/*********************************
 *** TEST 2
 ********************************/

// test
it('shifts the A-Z characters by the correct amount', () => {
  expect(encode('abc', 1)).toBe('bcd')
  expect(encode('test', 2)).toBe('vguv')
})

// code
export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
		const code = str.charCodeAt(index)
		const shiftedCode = code + shiftAmount
		return String.fromCharCode(shiftedCode)
  })
  
	return encryptedMessage.join('')
}
