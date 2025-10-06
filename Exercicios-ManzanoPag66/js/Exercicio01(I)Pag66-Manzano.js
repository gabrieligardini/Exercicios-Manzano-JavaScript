let t1 = 1;
let t2 = 1;
let fibonacci = [t1, t2];
let i = 3;

do {
  let t3 = t1 + t2;
  fibonacci.push(t3);
  t1 = t2;
  t2 = t3;
  i++;
} while (i <= 15);

alert("15 primeiros termos da série de Fibonacci:\n" + fibonacci.join(", "));
