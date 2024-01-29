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
        const index = this.subjects.map(s => s.name).indexOf(subject.name);
        
        if (index >= 0) {
            this.subjects.splice(index, 1);
            subject.removeTeacher(this);
        }
    }

}