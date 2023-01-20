import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, getStudentById } from '../service/localstorage';
import { useForm } from '../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editStudent } from '../service/localstorage';


export const CreateForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        physics: '',
        chemistry: '',
        maths: '',
        it: '',
        total: ''
    });
    const [tot, setTot] =  useState();
    useEffect(() => {
        if (id) {
            const employee = getStudentById(id);
            setForm(employee);
        }
    }, [id]);
const {Id , name , parc} = useParams()
// console.log({id : Id , name:name , parcrntage : parc})
    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editStudent(id, inputValues) : addStudent({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };
    var total;
    function handleClick() {

        // total = Number(inputValues.maths) + Number(inputValues.physics) + Number(inputValues.chemistry);
        total = inputValues.chemistry+inputValues.physics;
        setTot(total);
    }
    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Student</h1>
                <div />
            </div>

            <div className="card border-light p-5 m-5  rounded">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label>
                        <input
                            name="name"
                            type="text"
                            // value={inputValues.name}
                            defaultValue={name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Physics</label>
                        <input
                            name="physics"
                            type="number"
                            value={inputValues.physics}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Chemistry</label>
                        <input
                            type="number"
                            name="chemistry"
                            value={inputValues.chemistry}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Maths</label>
                        <input
                            name="maths"
                            type="number"
                            value={inputValues.maths}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">I.T</label>
                        <input
                            name="it"
                            type="number"
                            value={inputValues.it}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                  

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block" onClick={handleClick}>{id ? "Edit" : "Add"} Student</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Student.
                        </div>
                    </div>
                )
            }

        </div >
    )
}
