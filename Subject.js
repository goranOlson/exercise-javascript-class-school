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
        const index = this.students.map(s => s.name).indexOf(student.name);
        if (index >= 0) {
            this.students.splice(index, 1);
        }
    }
    
    addTeacher(teacher) {
        this.teacher = teacher;
    }
    removeTeacher(teacher) {
         console.log('removeTeacher('+teacher.name+')');
        if (this.teacher === teacher) {
            console.log('removeTeacher('+teacher.name+')');

            this.teacher = {};
        }
    }

}