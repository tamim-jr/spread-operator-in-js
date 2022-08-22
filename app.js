var numbers = [1, 2, 3];
var a = [...numbers]; //this is the example of spread operator
var newNumbers = [...a, 4, 5, 6, 7];
numbers.push(4);
console.log(a);
console.log(numbers);
console.log(newNumbers);

var numbers1 = [1, 2, 3];
var numbers2 = [4, 5, 6];
var newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers);

var newNum = {
    x : 1,
    y : 2
}

var oldNum = {
    a : 3,
    b : 4
}

var totalNum = {
    ...newNum,
    ...oldNum
}

console.log(totalNum);