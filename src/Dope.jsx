import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Dope({children}) {
    const [read,setRead]=useState(false);
    const toggle=()=>{
        setRead(prevState=>!prevState);
    }
  return (
    <>
    <div>
    {read ? children:children.substr(0,60)}
    <Button onClick={toggle}>{read ?'Read Less':'Read More'}</Button>
    </div>

    </>
  );
};

export default Dope;