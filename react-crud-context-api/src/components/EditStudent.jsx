import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Container from 'reactstrap/lib/Container';

export const EditStudent = (props) => {
  const { editStudent, students } = useContext(GlobalContext);
  const [selectedStudent, setSelectedStudent] = useState({
    id: '',
    name: '',
    age:'',
    courses:''
  })
  const history = useHistory();
  const currentStudentId = props.match.params.id;

  useEffect(() => {
    const studentId = currentStudentId;
    const selectedStudent = students.find(student => student.id === studentId);
    setSelectedStudent(selectedStudent);
  }, [currentStudentId, students])

  const onChange = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editStudent(selectedStudent);
    history.push("/")
  }

  return (
    <Container>
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedStudent.name} onChange={onChange} name="name" placeholder="Enter Student" required></Input>
      </FormGroup>
       <FormGroup>
        <Label>Age</Label>
        <Input type="number" value={selectedStudent.age} onChange={onChange} name="age" placeholder="Enter Student Age" required></Input>
      </FormGroup>
       <FormGroup>
        <Label>Courses</Label>
        <Input type="text" value={selectedStudent.courses} onChange={onChange} name="courses" placeholder="Enter Student Course" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </Container>
  )
}
