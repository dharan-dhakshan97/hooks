import { useState } from "react";
import React from 'react'

const Onedimensional = () => {



const studentsArray=[
  {
    id:1,
    name:"venkat",
    age:25,
    hobbies:["singing","drawing"],
  },
  {
    id:2,
    name:"venkat",
    age:25,
    hobbies:["hunting","slepping"],
  },
  {
    id:3,
    name:"venkat",
    age:25,
    hobbies:["dancing","bating"],
  },
];


const [students, setStudents]=useState(studentsArray);


const handleClick = () =>
{
    setStudents( students.map((student) =>
    
      student.id===2 ? {...students,hobbies:[...student.hobbies,"Cooking"],}:{...student}
    )
    );
};









  return (
    
<>
<h1 style={{textAlign:'center'}}>Adding a new value in two dimensional array (array in Array) </h1>


<ul>
            {students.map((student) => (
                // I am no longer using index as key, as I have unique id value.
                <li key={student.index}>
                    <span>name: {student.name}</span>{" "}
                    <span>age: {student.age}</span>
                    <br />
                    <span>Hobbies</span>
                    <ul>
                        {student.hobbies.map((hobby) => (
                            <li>{hobby}</li>
                        ))}

</ul>
</li>
                
            ))}


<button onClick={handleClick}>Add a New Value</button>
</ul>

</>

      )
}

export default Onedimensional;