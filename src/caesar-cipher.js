export const encode = (str = '', shiftAmount = 0) => {
  if (typeof str !== 'string' || typeof shiftAmount !== 'number') {
    return ''
  }

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
