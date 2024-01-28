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
        // Remove
        let index = this.subjects.findIndex(o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    }

}