const ages =[34,23,45,67,12];
const ages2 = [33,35,46,32,21];
const ages3 = [34,45,31];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);


const allAges2 = [ages,ages2,5,ages3];
console.log(allAges2); 

const allAges3= [...ages,...ages2,...ages3,5];
console.log(allAges3);



const minister = 650;
const business = 450;
const secretary = 250;

const maxiMum = Math.max(minister,business,secretary);
console.log(maxiMum);



const moneyHolder = [750,450,250];
const takawala = Math.max(...moneyHolder);
console.log(takawala);


const nums = [2, 5, 1, 7, 8, 33, 29];

const largest = Math.max(...nums);
console.log(largest);