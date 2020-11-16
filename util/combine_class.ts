export default function combineClass(
  name: string | string[],
  names?: Record<string, boolean>
) {
  let classNames: string[] = [];
  if (typeof name === "string") {
    classNames.push(name);
  } else {
    classNames = classNames.concat(name);
  }
  if (names) {
    Object.keys(names).forEach((key) => {
      if (names[key]) {
        classNames.push(key);
      }
    });
  }

  return classNames.join(" ");
}
