function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage

try {
  let result2 = add(5, '10'); // Throws an error
} catch (error) {
  console.error(error.message);
}

//Alternatively, using type guards:
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function add2(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result3 = add2(5, 10);

try {
  let result4 = add2(5, '10'); // Throws an error
} catch (error) {
  console.error(error.message);
}