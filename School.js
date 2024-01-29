class School {
    constructor(name, address, zipcode, city) {
      this.name = name;
      this.address = address;
      this.zipcode = zipcode;
      this.city = city;
      this.students = [];
      this.teachers = [];
    }

    addTeacher(teacher) {
      this.teachers.push(teacher);
    }

    // removeTeacher ?

    fireTeacher(teacher) {
      const index = this.teachers.map(t => t.name).indexOf(teacher.name);

      if (index >= 0) {
        const tmpTeacher = this.teachers.splice(index, 1)[0];  // Remove teacher from school

        for (const s of tmpTeacher.subjects) {
          s.removeTeacher(tmpTeacher);  // Remove teacher from subject
          tmpTeacher.quitSubject(s);  // Remove subject from teacher
        }
    }
    }

    addStudent(student) {
      this.students.push(student);   
    }

    relegateStudent(student) {
      const index = this.students.map(s => s.name).indexOf(student.name);
       console.log(index);
      console.log('relegateStudent, index: ' + index);

      if (index >= 0) {
        const tmpStudent = this.students.splice(index, 1)[0];  // Remove student from school
         console.log(tmpStudent);

        for (const s of tmpStudent.subjects) {
          console.log(s);
          s.removeStudent(tmpStudent);  // Remove student from subject
          tmpStudent.quitSubject(s);  // Remove subject from student
        }
      }
    }

  }