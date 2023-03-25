import React from 'react'
import { useState } from 'react';
import "../styles/Homestyles.css";

const Home = () => {

    // let name='mario';


    
    const [name, setName] = useState('mario');
    
    
    const [age, setAge]=useState(25);

const handleClick=() =>
{
setName('lugi');
setAge(35);
}



const [count,setCount]=useState(0);

const increment=()=>
{
    setCount(count+1);
}


const [counter,setCounter]=useState(100);
const decrement=()=>
{ 
    
    setCounter(counter-1);
}

const friendsArray = [
    {
        name: "John",
        age: 19,
    },
    {
        name: "Candy",
        age: 18,
    },
    {
        name: "mandy",
        age: 20,
    },
];

const [friends, setFriends] = useState(friendsArray); // Setting default value

    const handleAddFriend = () => {
        
setFriends((prevFriends) => [
        ...prevFriends,
        {
            name: "Random Friend Name",
            age: 20, // Random age
        }
]);

};

return (
    
    <>
    
    <div className="home">
        <h2 style={{textAlign:'center'}}>Using State Hooks</h2>
        
        <p style={{textAlign:'center'}}>I am  {name} and i am {age} years old. </p>
        
        </div>
        <div className="btn">
        <button onClick={handleClick}>Click Me!</button>
    </div>
    
   
   
   
<br></br>
<div>

    <h1>The Increment Value is {count} </h1>

    <button onClick={increment}>Increment</button>

                    
                    
                    <h1>The Decrement Value is {counter} </h1>


             <button onClick={decrement}>Decrement</button> </div>




<main>
            <ul>
                  {/* Mapping over array of friends  */}
                {friends.map((friend, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>
            </ul>
        </main>







   </> 
)
}

export default Home;