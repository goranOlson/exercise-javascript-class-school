





/* 5 Create instances */
const lexicon = new School('Lexicon', 'Bygatan 1', '111 11 Bystad', 'Stockholm');
// console.log(lexicon);

const biology = new Subject('Biology');
const mathematics = new Subject('Mathematics');
const science = new Subject('Science');
// console.log(science);

const adam = new Student('Adam', 29, 'male');
const beata = new Student('Beata', 22, 'female');
const carl = new Student('Carl', 23, 'male');
const diana = new Student('Diana', 12, 'female');
const erik = new Student('Erik', 22, 'male');
// console.log(erik);

const niklas = new Teacher('Niklas');
const thomas = new Teacher('Thomas');
// console.log(thomas);

 /* 6 */
niklas.addSubject(biology);
// console.log(niklas);
// console.log(biology);


/* 7 */
biology.addStudent(adam);
// console.log(adam);
// console.log(biology);

