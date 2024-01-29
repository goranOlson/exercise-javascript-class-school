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
        if (this.teacher === teacher) {
            this.teacher = {};
        }
    }
    
    getStudents() {
        return this.students.map(s => s.name);
    }
}