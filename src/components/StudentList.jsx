import { StudentItem } from './StudentItem';
import { useEffect, useState } from 'react';
import { getListStudents } from './../service/localstorage';

export const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(getListStudents());
    }, []);

    return (
        <div >
            <h1 className="my-5 text-center">Manage Students</h1>

            {
                students.length > 0 ? (
                    <div className="card  p-3 " >
                        <table className="table table-hover ">
                            <thead>
                                <tr className='p-3 mb-2 bg-light text-dark'>
                                    <th scope="col">Name</th>
                                    <th scope="col">Physics</th>
                                    <th scope="col">Chemistry</th>
                                    <th scope="col">Maths</th>
                                    <th scope="col">I.T</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Percentage</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map(student => {
                                       let total =  +student.physics + +student.chemistry + +student.maths + +student.it 
                                        let perct = (+student.physics + +student.chemistry + +student.maths + +student.it)/5;
                                        let grade;
                                        if(perct>75 ){
                                            grade="First class";
                                        }else if(perct>60 && perct<75){
                                            grade="Second class";
                                        }else if(perct>35){
                                            grade="Pass";
                                        }else{
                                            grade = "fail"
                                        }
                                        console.log(grade);
                                        return(
                                        <StudentItem student={student} key={student.id} setStudents={setStudents} total = {total} perct = {perct} grade = {grade}  />
                                    )}
                  )  }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Students Data</h3>
                )
            }

        </div>
    )
}
