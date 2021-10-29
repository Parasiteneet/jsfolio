function a() {
    console.log('hello ' + this.name);
}

const tim = { name: 'Tim' }

const b = a.bind({ name: 'John' });

b();

a.apply(tim);
a.call(tim);

const array = [ 1,2,3,4,5 ];

const result = Math.min.apply(null, array);
console.log(result);