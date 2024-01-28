class School {
    constructor(name, address, zipcode, city) {
      this.name = name;
      this.address = address;
      this.zipcode = zipcode;
      this.city = city;
      this.students = [];
      this.teachers = [];
    }
    
    addStudent(student) {
      this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    fireTeacher(teacher) {
      // console.log(this.teachers);
      let index = this.teachers.findIndex(t => t.name === teacher.name);
      let tmpTeacher = this.teachers.splice(index, 1)[0];
      // console.log(tmpTeacher);
      
      // Remove teacher form subjects
      for (const subject of tmpTeacher.subjects) {
        console.log(subject);
        subject.removeTeacher(tmpTeacher);
        console.log(subject);
      }
    }

    relegateStudent(student) {
      // console.log(this.teachers);
      let index = this.students.findIndex(s => s.name === student.name);
      let tmpStudent = this.students.splice(index, 1)[0];
      // console.log(tmpStudent);

      // Remove student form subjects
      for (const subject of tmpStudent.subjects) {
        // console.log(subject);
        subject.removeStudent(tmpStudent);
        // console.log(subject);
      }
    }
  }