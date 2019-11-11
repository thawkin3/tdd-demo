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
