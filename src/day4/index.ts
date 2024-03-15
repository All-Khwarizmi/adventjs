export function reverse(str: string): string {
  const reversedStr: string[] = [];
  for (let index = str.length; index >= 0; index--) {
    const element = str[index];
    reversedStr.push(element);
  }
  return reversedStr.join("");
}
function decodeReverse(str: string): [string, number] {
  let returnStr = "";
  let subStr;
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == ")") {
      returnStr = reverse(returnStr);
      return [returnStr, i];
    }
    if (element == "(") {
      [subStr, idx] = decodeReverse(str.slice(i + 1));
      returnStr += subStr;
      i += idx + 1;
    }
    if (element !== "(" && element !== ")") returnStr += element;
  }
  return [returnStr, idx];
}
export function decode(message: string): string {
  let returnStr = "";
  let returnIdx = 0;
  for (let i = 0; i < message.length; i++) {
    const element = message[i];
    if (element == "(") {
      let str;
      [str, returnIdx] = decodeReverse(message.slice(i + 1));
      returnStr += str;
      i += returnIdx;
    }
    if (element !== "(" && element !== ")") returnStr += element;
  }
  return returnStr;
}
