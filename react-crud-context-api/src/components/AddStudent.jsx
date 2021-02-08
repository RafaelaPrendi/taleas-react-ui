import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddStudent = () => {
  const [name, setName, age, courses] = useState('');
  const { addStudent } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: uuid(),
      name,
      age,
      courses
    }
    addStudent(newStudent);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit} className="container md">
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter Student" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Age</Label>
        <Input type="number" value={age} name="age" placeholder="Enter Age" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Courses</Label>
        <Input type="text" value={courses} name="courses" placeholder="Enter course" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
