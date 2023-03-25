import { useState } from "react";

import React from 'react'

const Update = () => {

    const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
    },
];

const [friends,setFriends]=useState(friendsArray);


const handleSecondFriend = () => {
        setFriends(
            friends.map((friend) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                friend.id === 2
                    ? { ...friend, name: "Changed Name" }
                    : { ...friend }
            )
        );
    };


  return (
    <>

     <h1 style={{textAlign:'center'}}> Updating a specific object in Array of objects </h1>

    <button onClick={handleSecondFriend}>Change Second Name</button>
    </>
  )
}

export default Update;