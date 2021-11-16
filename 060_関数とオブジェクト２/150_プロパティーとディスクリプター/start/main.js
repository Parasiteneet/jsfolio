// const obj = {prop: 0

const obj = {};

Object.defineProperty(obj, 'prop', {
  value : 0
})

const descripter = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(dscriptor);