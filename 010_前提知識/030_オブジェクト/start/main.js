'use strict'

let obj = {
  prop1 : 'value1',
  prop2 : 'value2',
  prop3: function() { //オブジェクトには無名関数を使用する
      console.log('value3');
  },
  prop4: {
    prop5 : 'value5'
  }
}

console.log(obj);