export default function findFirstRepeated(giftIds: number[]): number {
  const arr: number[] = [];
  for (let index = 0; index < giftIds.length; index++) {
    const element = giftIds[index];
    if (arr.includes(element)) {
      return element;
    }
    arr.push(element);
  }
  return -1;
}
