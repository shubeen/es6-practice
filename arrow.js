function doubleIt(number){
    return number *2;
}
const result = doubleIt(3);
console.log(result);



const doubleIt1 = function(number){
    return number * 2;
}
const result2 = doubleIt1(4);
console.log(result2);



// According to ES6 writing style of function in single line
const doubleIt2 = number => number*2;
//function Name = parameter => return;
const result3 = doubleIt2(5);
console.log(result3);


// Double parameter (x,y)
const add = (x, y) => x+y;
const result4 = add(4,3);
console.log(result4);


// without paramater ();
const give = ()=> 5;
const result5 = give();
console.log(result5);

// multiline Function
const doCalculation = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result6 = doCalculation (12,10);
console.log(result6);