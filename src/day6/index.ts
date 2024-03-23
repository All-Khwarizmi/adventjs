export function reindeer({ movements }: { movements: string }) {
  if (!movements) throw new Error("You should pass a string as argument");
  let left: number = 0;
  let right: number = 0;
  let either: number = 0;
  for (let idx = 0; idx < movements.length; idx++) {
    const element = movements[idx];
    if (element === ">") right++;
    else if (element === "<") left++;
    else either++;
  }

  return right > left ? right - left + either : left - right + either;
}
