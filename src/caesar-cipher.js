export const encode = (str, shiftAmount) => {
  const encryptedMessage = str.split('').map((character, index) => {
		const code = str.charCodeAt(index)
		const shiftedCode = code + shiftAmount
		return String.fromCharCode(shiftedCode)
  })
  
	return encryptedMessage.join('')
}
