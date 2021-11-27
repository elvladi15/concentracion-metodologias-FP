const f = (x) => 4 * x;
const g = (x) => x + 3;

const compose = (x) => {
  return f(g(x));
};

// f(g(x))
//f(x + 3)
//4 * (x + 3)

//x = 2
//4 * (2 + 3)
//4 * (5)
//20
console.log(compose(2));
