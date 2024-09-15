function isEven(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven((num - 2));
  }
}

console.log("isEven", isEven(50));
console.log("isEven", isEven(75));
console.log("isEven", isEven(-50));
