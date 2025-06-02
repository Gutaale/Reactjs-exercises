import React, { useEffect, useState } from 'react'

const ChangeDocumentTitle = () => {

    const [title, setTitle] = useState('Welcome!');
    const [name, setName] = useState('');
    const [salan, setSalan] = useState('Hello, ');

    const changeTitle=()=>{
       {name? document.title = salan+ ", "   + name : document.title = title}
    }

    useEffect(() => {
        changeTitle();
    }, [name]);
  return (
    <div>
        <h1>Enter Your Name:</h1>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>Choose a Greeting</h1>
        <input type="text" name="salan" id="name" value={salan} onChange={(e)=>setSalan(e.target.value)}/>
        <h2>{salan}</h2>
    </div>
  )
}

export default ChangeDocumentTitle