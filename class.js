class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'DRMC';

    }
    
}

const student1= new student(6089, "shubeen");
const student2 = new student(4567, 'zafina');
const student3 = new student ( 6257, 'zahura');
console.log(student1, student2);
console.log(student3);

console.log(student2.id);