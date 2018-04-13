//for loop - add a string to an array 25 times
//then return the array
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    }
    else {
      array.push('I am ${i} strange loops.')
    }
  }
  return array
}

//while loop - count done from given number and then return 'done'
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}
