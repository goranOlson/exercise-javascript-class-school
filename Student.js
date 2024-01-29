class Student {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.subjects = [];        
    }

    enlistToSubject(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }

    quitSubject(subject) {
        const index = this.subjects.map(s => s.name).indexOf(subject.name);
        
        if (index >= 0) {
            this.subjects.splice(index, 1);
            subject.removeTeacher(this);
        }
    }
}