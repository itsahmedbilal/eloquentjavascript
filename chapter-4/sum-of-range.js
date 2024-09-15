function range(start = 0, end = 0, step = 1) {
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

function sum(args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result = result + Number(args[i]);
  }
  return result;
}

console.log(sum(range(1, 10)));
