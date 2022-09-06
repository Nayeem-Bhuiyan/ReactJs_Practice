import React, { useState } from 'react';

const useStateHook = () => {

const [color,setColor]=useState('blue');

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter Color" value={0} onChange={(e)=>setColor(e.target.value)}/><br/>
            </form>
            <p>your selected color :{color}</p>
        </div>
    );
};

export default useStateHook;