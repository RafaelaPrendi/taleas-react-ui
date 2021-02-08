import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import Container from 'reactstrap/lib/Container';

export const StudentList = () => {
  const { students, removeStudent } = useContext(GlobalContext);

  return (
    <Container>
    <ListGroup className="mt-4" >
      {students.length > 0 ? (
        <>
          {students.map(student => (
            <ListGroupItem className="d-flex" key={student.id}>
              <strong>{student.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${student.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeStudent(student.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Students</h4>
        )}
    </ListGroup>
    </Container>
  )
}
