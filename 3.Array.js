// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango',  'empty string', 'lemon] using array maps

const arr =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const TransformArr = arr.map((ele) => {
    if(ele === ' '){
        return ele = 'empty string';
    } else {
        return ele
    }
})

console.log(TransformArr);