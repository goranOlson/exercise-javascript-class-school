class Teacher {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
        subject.addTeacher(this);
    }

    quitSubject(subject) {
        let index = this.subjects.findIndex(s => s.name === subject.name);
        this.subjects.splice(index, 1);
        subject.removeTeacher(this);
    }
}