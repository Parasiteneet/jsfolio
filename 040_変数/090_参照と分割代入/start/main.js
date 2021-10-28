//オブジェクトの場合は分割代入すると元のプロパティの値も変更してしまうため
//代入する場合は、それを考慮に入れて行わないと挙動がおかしくなってしまう。

const a = {
  prop: 0
}

let { prop} = a;

prop = 1;

console.log(a, prop);

function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}

fn(a);

const c = {
  prop1 : {
    prop2 : 0
  }
}

let  { prop1 } = c;

console.log(prop1);

prop1.prop2 = 1;

console.log(c, prop1);

