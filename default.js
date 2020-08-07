function add ( num1,num2 = 10){
    // num2 = num2 || 3;
    return num1+ num2;
}
const total = add(13);
console.log(total);

// here num2 = 10 is  the backup for the parameter, if function is called it will call the function with default parameter but if function is called later with input it will execute the input value.

function createUser(name, age = 18){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
    }
    const user = ("shubeen", 40);
    console.log(user);