class Subject {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teacher = {};
    }
    
    addStudent(student) {
        this.students.push(student);
    }


}