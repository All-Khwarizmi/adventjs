// export function manufacture(gifts: string[], materials: string): string[] {
// //   const start = Date.now();
//   interface hash {
//     [key: string]: boolean;
//   }
//   const obj: hash = {};
//   const materialsChars = materials.split("");

//   for (let j = 0; j < gifts.length; j++) {
//     const element = gifts[j];
//     obj[element] = true;
//     const elementChar = element.split("");

//     for (let k = 0; k < elementChar.length; k++) {
//       const char = elementChar[k];
//       if (!materialsChars.includes(char)) obj[element] = false;
//     }
//   }

//   const returnObj: string[] = [];
//   Object.entries(obj).forEach(([key, value]) => {
//     if (value) {
//       returnObj.push(key);
//     }
//   });
// //   const end = Date.now();
// //   console.log(`Execution time: ${end - start} ms`);
//   return returnObj;
// }

export function manufacture(gifts: string[], materials: string): string[] {
  interface hash {
    [key: string]: boolean;
  }
  const obj: hash = {};
  const materialsChar = materials.split("");
  let iterate = true;
  let idx = 0;
  const returnArr = [];

  while (iterate) {
    // At each iteration we stop unless the conditions to continue are met and manually set
    iterate = false;

    // Loop over all the gifts to check each char until we scan the last char of the longest gift element
    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i];

      const length = gift.length;
      if (obj[gift] == undefined) {
        obj[gift] = true;
      } else if (obj[gift] == false) {
        continue;
      }
      // Check if gift length is valid to be scaned
      if (length > idx) {
        const char = gift[idx];
        if (!materialsChar.includes(char)) obj[gift] = false;
      }

      // Check if there's at least another loop
      if (length + 1 > idx && !iterate) iterate = true;

      // Check if gift char is the last element
      if (length == idx && obj[gift]) returnArr.push(gift);
    }
    idx++;
  }
  
  // Test on advent no passing because the order of the elements whereas the first version is passing 
  return returnArr;
}
