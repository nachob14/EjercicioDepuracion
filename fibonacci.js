function fibonacci(num) {
  let secuencia = [];
  let a = 1;
  let b = 0;
  let temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    secuencia.push(b);
    num--;
  }

  return secuencia;
}

const result = fibonacci(6);
console.log(result);
