function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  let subject;
  this.subject = subjectName;
  return {
    subject,
  };
}

Student.prototype.addMark = function (mark) {
  let marks;
  
  if (this.marks === undefined) { 
    this.marks = Array.from(mark);
    this.marks.unshift(mark);
  } else {
      this.marks.push(mark);
    }
  
  return {
    marks
    };
}

Student.prototype.addMarks = function (...markN) {
  let marks;
  this.marks = Array.from(markN)
  return {
    marks,
  };
}

Student.prototype.getAverage = function () {
  let avg;
  avg = this.marks.reduce((acc, item, idx, arr) => {
    acc += item;
    if (idx === arr.length - 1) {
      return acc / arr.length;
    } else {
      return acc;
    }
  },)

  return {
    avg,
  };
}

Student.prototype.exclude = function (reason) {  
  delete this.subject;
  delete this.marks;

  let excluded;
  this.excluded = reason;
  
  return {
    excluded,
  };
}

const dima = new Student("Dima", "male", "24");
const tanya = new Student("Tanya", "female", "23");

dima.addMark(5);
dima.addMark(4);
dima.addMark(3);
console.log(dima.getAverage());
console.log(dima);
tanya.addMarks(10, 2, 4, 8);
tanya.setSubject("Math11");
tanya.exclude("low grades");
console.log(tanya);

