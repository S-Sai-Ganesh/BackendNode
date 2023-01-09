let multiply = (a,b) => a*b

console.log(multiply(10,4))

let student = {
    name: 'Max',
    age: 22,
    greet() {
        console.log('Hi, I\'m student ' + this.name);
    }
}

student.greet()