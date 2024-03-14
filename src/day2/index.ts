export function manufacture(gifts: string[], materials: string): string[] {
  interface hash {
    [key: string]: boolean;
  }
  const obj: hash = {};
  const materialsChars = materials.split("");

  for (let j = 0; j < gifts.length; j++) {
    const element = gifts[j];
    obj[element] = true;
    const elementChar = element.split("");

    for (let k = 0; k < elementChar.length; k++) {
      const char = elementChar[k];
      if (!materialsChars.includes(char)) obj[element] = false;
    }
  }

  const returnObj: string[] = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      returnObj.push(key);
    }
  });
  return returnObj;
}
