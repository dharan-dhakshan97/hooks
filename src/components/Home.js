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




   </> 
)
}

export default Home;