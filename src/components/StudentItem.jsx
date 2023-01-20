import React, { useState } from 'react'
import { removeStudent } from '../service/localstorage';
import { getListStudents } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const StudentItem = ({ student, setStudents, total, perct, grade }) => {
    const { id, name, physics, chemistry, maths, it } = student;
    console.log(student);
    const navigate = useNavigate();

    const deleteStudent = () => {
        removeStudent(id);
        setStudents(getListStudents());
    }
    // script
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <tr className="table-primasry p-3 mb-2 bg-light text-dark">
            <th>{name}</th>
            <td>{physics}</td>
            <td>{chemistry}</td>
            <td>{maths}</td>
            <td>{it}</td>
            <td>{total}</td>
            <td>{perct}%</td>
            <td>{grade}</td>
            <td>
                <div className="d-flex gap-3 p-3 mb-2 bg-light text-dark">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-student/${id}/${name}/${perct}`)}>Edit</span>
                 

                    <Button className="badge bg-danger" onClick={handleShow}>
                    Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Do You want to confirm delete</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={deleteStudent}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>



                </div>
            </td>
        </tr>
    </>
    )
}
