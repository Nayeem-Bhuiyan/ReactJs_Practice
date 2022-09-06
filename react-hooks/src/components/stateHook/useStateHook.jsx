import React, { useState } from 'react';

const useStateHook = () => {

const [color,setColor]=useState('blue');

    return (
        <div>
            <input value={0} onChange={(e)=>setColor(e.target.value)}/><br/>
            <p>your selected color :{color}</p>

        </div>
    );
};

export default useStateHook;