//下のように別々に宣言したオブジェクトは値が同じだとしても別物になる。
// プリミティブ型 値の比較
//オブジェクト 参照先の比較

const a = {
  prop : 0
}

const b = {
  prop : 0
}


console.log(a === b);

console.log(a.prop === b.prop); //オブジェクトの中身を比べると true