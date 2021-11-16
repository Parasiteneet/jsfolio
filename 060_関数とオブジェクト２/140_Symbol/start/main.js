const s = Symbol('hello');

console.log(s);

String.prototype[s] = function() {
  return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());

