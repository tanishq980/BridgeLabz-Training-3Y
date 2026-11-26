// Q1 Student Result Processing
class Student {
  constructor(name, marks) { this.name=name; this.marks=marks; }
  calculateAverage() {
    if (!this.marks.length) throw new Error("Marks cannot be empty");
    return this.marks.reduce((sum, mark)=>sum+mark,0)/this.marks.length;
  }
  getGrade() {
    const avg=this.calculateAverage();
    if(avg>=80) return "A";
    if(avg>=60) return "B";
    if(avg>=40) return "C";
    return "F";
  }
}
const students=[new Student("Aarav",[85,90,88]),new Student("Diya",[70,65,75]),new Student("Kabir",[35,42,30])];
students.forEach(s=>console.log(`${s.name}: Average=${s.calculateAverage().toFixed(2)}, Grade=${s.getGrade()}`));
