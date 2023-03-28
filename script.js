// complete the given function

function palindrome(str){
	str=str.replaceAll(" ","").toLowerCase()
	var str2=str.split("").reverse().join("");
	if(str==str2)
		return true
	else
		return false
}
module.exports = palindrome
