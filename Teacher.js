class Teacher {
    constructor(name, school) {
        this.name = name;
        this.subjects = [];
        this.school = school;
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

    setGrades(subject) {
        if ( this.subjects.map(s => s.name).indexOf(subject.name) >= 0) {
            const studentNames = subject.getStudents();

            if (studentNames.length > 0) {
                for (const name of studentNames) {
                    // object: subjectName, studentName, grade, teacherName
                    this.school.addGrade( { 
                        subject: subject.name,
                        student: name,
                        grade: 4,
                        teacher: this.name 
                    });
                }
            }
        }
    }

}