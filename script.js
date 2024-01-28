/* 5 Create instances */
// const lexicon = new School('Lexicon', 'Bygatan 1', '111 11 Bystad', 'Stockholm');
// console.log(lexicon);

// const biology = new Subject('biology');
// const mathematics = new Subject('mathematics');
// const science = new Subject('science');
// console.log(science);

// const adam = new Student('adam', 29, 'male');
// const beata = new Student('beata', 22, 'female');
// const carl = new Student('carl', 23, 'male');
// const diana = new Student('diana', 12, 'female');
// const erik = new Student('erik', 22, 'male');
// console.log(erik);

// const niklas = new Teacher('niklas');
// const thomas = new Teacher('thomas');
// console.log(thomas);

 /* 6 */
// niklas.addSubject(biology);
// console.log(niklas);
// console.log(biology);


/* 7 */
// biology.addStudent(adam);
// console.log(adam);
// console.log(biology);

/* 8 */
function addSubjectToTeacher(subject, teacher) {
    subject.teacher = teacher;
    teacher.addSubject(subject);
    return teacher;
}
// let addedTeacher = addSubjectToTeacher(mathematics, niklas);
// console.log(addedTeacher);

/* 9 */
// thomas.addSubject(science);
// console.log(thomas);

/* 12 */
//--- fireTeacher ---
// lexicon.addTeacher(thomas);
// lexicon.fireTeacher(thomas);
//  console.log(lexicon);

//--- relegateStudent ---
// lexicon.addStudent(erik);
// erik.enlistToSubject(mathematics);
//  console.log(lexicon);
//  console.log(mathematics);
// console.log('Remove student');
// lexicon.relegateStudent(erik);
//  console.log(lexicon);
//  console.log(erik);
//  console.log(mathematics);

/* 14 */
const lexicon = new School('Lexicon', 'Bygatan 1', '111 11 Bystad', 'Stockholm');
// console.log(lexicon);

const biology = new Subject('biology');
const mathematics = new Subject('mathematics');
const science = new Subject('science');
// console.log(science);

const adam = new Student('adam', 29, 'male');
const beata = new Student('beata', 22, 'female');
const carl = new Student('carl', 23, 'male');
const diana = new Student('diana', 12, 'female');
const erik = new Student('erik', 22, 'male');
// console.log(erik);

const niklas = new Teacher('niklas');
const thomas = new Teacher('thomas');
// console.log(thomas);

lexicon.addTeacher(niklas);
lexicon.addTeacher(thomas);

lexicon.addStudent(adam);
lexicon.addStudent(beata);
lexicon.addStudent(carl);
lexicon.addStudent(diana);
lexicon.addStudent(erik);
// console.log(lexicon);

niklas.addSubject(biology);
niklas.addSubject(mathematics);
thomas.addSubject(science);
// console.log(niklas);

adam.enlistToSubject(biology);
beata.enlistToSubject(biology);
carl.enlistToSubject(mathematics);
carl.enlistToSubject(science);
diana.enlistToSubject(biology);
diana.enlistToSubject(mathematics);
diana.enlistToSubject(science);
erik.enlistToSubject(mathematics);
erik.enlistToSubject(science);
// console.log(biology);
// console.log(adam);

/* 15 */
function displayAllStudents() {
    const students = lexicon.students;
    
    for (const s of students) {
        console.log(`${s.name}, ${s.age}, ${s.gender}, subjects: ${s.subjects.map((s) => s.name).join(", ") }`);
    }
}

 displayAllStudents();
