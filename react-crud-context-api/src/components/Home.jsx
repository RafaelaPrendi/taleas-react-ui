import React from 'react';
import { Heading } from "./Heading";
import { StudentList } from "./StudentList";
import { NavMenu } from "../components/NavMenu";
export const Home = () => {
  return (
    <div>
          <NavMenu /> 
      <Heading />
      <StudentList />
      </div>
  )
}
