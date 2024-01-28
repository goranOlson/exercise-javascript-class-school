class Subject {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teacher = {};
    }
    
    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        let index = this.students.findIndex(s => s.name === student.name);
        if (index >= 0) {
            this.students.splice(index, 1);
        }
    }

    addTeacher(teacher) {
        this.teacher = teacher;
    }

    removeTeacher(teacher) {
        this.teacher = {};
    }
}