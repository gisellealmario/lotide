const items = [1, 2, 3, 4, 6];
const count = function(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i];
    }
    return sum;
  
  /* IMPLEMENT ME */
};
console.log(count(items));


const num = [1, 2, 3, 4, 5];
total = num.length;
const count = function(num) {
  if (num.length === 0) {
    return 0;
  } else if (num.length === 1) {
    return 1;
  } else {
    return total;
  }
};
console.log(count(num));
