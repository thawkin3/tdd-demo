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


/*********************************
 *** TEST 5
 ********************************/

// test
it('handles wrapping past the end of the alphabet', () => {
  expect(encode('xyz', 2)).toBe('zab')
})

// code
export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
    const code = str.charCodeAt(index)

    // 97-122 => a-z; 65-90 => A-Z
    if (code >= 65 && code <= 90) {
		  const shiftedCode = ((code + shiftAmount - 65) % 26) + 65
      return String.fromCharCode(shiftedCode)
    } else if (code >= 97 && code <= 122) {
		  const shiftedCode = ((code + shiftAmount - 97) % 26) + 97
      return String.fromCharCode(shiftedCode)
    }

    return character
  })
  
	return encryptedMessage.join('')
}


/*********************************
 *** TEST 6
 ********************************/

 // test
 it('handles shift values greater than 26', () => {
  expect(encode('abc', 26)).toBe('abc')
  expect(encode('abc', 28)).toBe('cde')
})

// code (no changes from TEST 5)


/*********************************
 *** TEST 7
 ********************************/

 // test
 it('handles shift values less than 0', () => {
  expect(encode('abc', 0)).toBe('abc')
  expect(encode('abc', -2)).toBe('yza')
})

// code
export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
    const code = str.charCodeAt(index)
    const moduloShiftAmount = (shiftAmount % 26) + 26

    // 97-122 => a-z; 65-90 => A-Z
    if (code >= 65 && code <= 90) {
		  const shiftedCode = ((code + moduloShiftAmount - 65) % 26) + 65
      return String.fromCharCode(shiftedCode)
    } else if (code >= 97 && code <= 122) {
		  const shiftedCode = ((code + moduloShiftAmount - 97) % 26) + 97
      return String.fromCharCode(shiftedCode)
    }

    return character
  })
  
	return encryptedMessage.join('')
}
