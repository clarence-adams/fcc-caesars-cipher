function rot13(str) {
  str = str.split("");

  let newStr = str.map(element => {
    if (/[A-Z]/.test(element) == false) {
      return element;
    } else if (element.charCodeAt() > 77) {
      return String.fromCharCode(element.charCodeAt() - 13);
    } else {
        return String.fromCharCode(element.charCodeAt() + 13);
    }
  }).join("")

  console.log(newStr)
  return newStr;
}

rot13("SERR CVMMN!");