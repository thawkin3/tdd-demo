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
