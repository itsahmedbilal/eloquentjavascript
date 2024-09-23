function deepEqual(object1, object2) {
  if (object1 === object2) return true;
  if (
    object1 == null ||
    object2 == null ||
    typeof object1 !== "object" ||
    typeof object2 !== "object"
  ) {
    return false;
  }
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);
  if (keysOfObject1.length !== keysOfObject2.length) return false;
  for (const key of keysOfObject1) {
    if (
      !keysOfObject2.includes(key) ||
      !deepEqual(object1[key], object2[key])
    ) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
