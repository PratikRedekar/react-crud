export const getListStudents = () => {
  if (!localStorage["students"]) {
    localStorage["students"] = "[]";
  }

  let students = localStorage["students"];
  students = JSON.parse(students);
  return students;
};

export const addStudent = (stud) => {
  const students = getListStudents();
  students.push(stud);
  localStorage["students"] = JSON.stringify(students);
};

export const removeStudent = (id) => {
  let students = getListStudents();
  students = students.filter((stud) => stud.id !== id);
  localStorage["students"] = JSON.stringify(students);
};

export const getStudentById = (id) => {
  const students = getListStudents();
  const employee = students.find((stud) => stud.id === id);
  return employee;
};

export const editStudent = (id, newStudent) => {
  let students = getListStudents();
  students = students.filter((stud) => stud.id !== id);
  students.push(newStudent);
  localStorage["students"] = JSON.stringify(students);
};