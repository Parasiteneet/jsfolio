window.name = 'John';



const person = {
    name: 'Tom',
    hello()  {
        console.log('Hello ' + this.name);
     },
    bye() {
        console.log('Bye ' + this.name);
    }
}
person.hello();
person.bye();



