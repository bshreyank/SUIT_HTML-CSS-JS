var arr = [10,20,30,40,50,60];
console.log(arr)

//push ===================>
arr.push(70);
console.log(arr)

//pop ===================>
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// unshift ===================>
 //unshift - add element to first index

arr.unshift(5)
console.log(arr)

// shift ===================>
 //shift - removes element from first index

var b = arr.shift();
console.log(b)
console.log(arr)

// ========================>

// Slice - Extract part of Array

// syntax :- slice(start,end);

//last wala ignore ho jata hai 

var data = ["a","b","c","d","e","f","g"];
console.log(data);

console.log(data.slice(2,5))
