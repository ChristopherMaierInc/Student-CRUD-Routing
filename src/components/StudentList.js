import React from 'react';
import ListItem from './ListItem'

const StudentList = ({ students }) => (
  <div>
    {
      students.map(student => { return  <ListItem key={ student.id } { ...student } /> })
    }
  </div>
)


export default StudentList;
