
export function sledStepper(path: string, step: number) {
  if (!path || path === "") throw new Error();

  const pathRecord: { [key: number]: string } = {};
  let pathChars = path.split("");
  let sledStep: number = 0;
  let idx = 0;
  while (idx < step) {
    if (idx >= 4) {
      pathChars = pathChars.join("").replaceAll("|", "*").split("");
    }
    const element = pathChars[sledStep + 1];
    if (idx > 0 && !pathRecord[idx]) {
      if (pathChars[idx] !== "S") pathRecord[idx] = pathChars[idx];
      else pathRecord[idx] = ".";
    }
    if (element === "|") {
      idx++;
      continue;
    }
    if (element === "." || element === "*") {
      pathChars[sledStep + 1] = "S";

      if (sledStep === 0) pathChars[0] = ".";
      else if (sledStep > 0) {
        if (idx >= 5 && pathRecord[sledStep] === "|")
          pathChars[sledStep] = pathChars[sledStep] = "*";
        else pathChars[sledStep] = pathRecord[sledStep];
      }
      sledStep++;
    }

    idx++;
  }
  return pathChars.join("");
}

export function stepperII({
  path: road,
  step: time,
}: {
  path: string;
  step: number;
}) {
  if (!road || road === "") throw new Error();
  const result: string[] = [road];

  const pathRecord: { [key: number]: string } = {};
  let pathChars = road.split("");
  let sledStep: number = 0;
  let idx = 0;
  while (idx < time - 1) {
    if (idx >= 4) {
      pathChars = pathChars.join("").replaceAll("|", "*").split("");
    }
    const element = pathChars[sledStep + 1];
    if (idx > 0 && !pathRecord[idx]) {
      if (pathChars[idx] !== "S") {
        pathRecord[idx] = pathChars[idx];
      } else {
        pathRecord[idx] = ".";
      }
    }
    if (element === "|") {
      idx++;
      result.push(pathChars.join(""));
      continue;
    }
    if (element === "." || element === "*") {
      pathChars[sledStep + 1] = "S";

      if (sledStep === 0) {
        pathChars[0] = ".";
      } else if (sledStep > 0) {
        if (idx >= 5 && pathRecord[sledStep] === "|") {
          pathChars[sledStep] = pathChars[sledStep] = "*";
        } else {
          pathChars[sledStep] = pathRecord[sledStep];
        }
      }
      sledStep++;
    }

    idx++;
    result.push(pathChars.join(""));
  }
  return result;
}
