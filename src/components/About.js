

//Adding a New Value to Array




import { useState } from "react";

import React from 'react'

const About = () => {


    const playersArray=[
    {
        id:1,
        name:"rahul",
        age:25
        
    },
    {
        id:2,
        name:"nirmal",
        age:26
    }
];

const [players, setPlayers]=useState(playersArray);

const handleAdd= () =>
{
    setPlayers((prevPlayers)=>
    [ ...prevPlayers,
        {
            id:3,
            name:"venkat",
            age:27
        }
    ]);
};


  return (
    <>
    <h1 style={{textAlign:'center'}}>Adding a new value to Array</h1>
    {
    players.map((player,index)=>
    (
<li key={index}>
    <span>Id:{player.id}</span>
    <span>Name:{player.name}</span>
    <span>Age:{player.age}</span>
</li>
    ))}

<button onClick={handleAdd}>Add</button>

</>
    
  )
}

export default About