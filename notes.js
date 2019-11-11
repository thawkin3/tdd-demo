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


/*********************************
 *** TEST 3
 ********************************/

// test
it('does not affect non-alphabetic characters', () => {
  expect(encode('abc123', 1)).toBe('bcd123')
})

// code
export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
    const code = str.charCodeAt(index)

    // 97-122 => a-z
    if (code >= 97 && code <= 122) {
		  const shiftedCode = code + shiftAmount
      return String.fromCharCode(shiftedCode)
    }

    return character
  })
  
	return encryptedMessage.join('')
}


/*********************************
 *** TEST 4
 ********************************/

// test
it('maintains case', () => {
  expect(encode('aBc', 1)).toBe('bCd')
})

// code
export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
    const code = str.charCodeAt(index)

    // 97-122 => a-z; 65-90 => A-Z
    if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
		  const shiftedCode = code + shiftAmount
      return String.fromCharCode(shiftedCode)
    }

    return character
  })
  
	return encryptedMessage.join('')
}
