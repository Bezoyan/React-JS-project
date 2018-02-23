import React from 'react';

import './User.css';

const user = (props) => {
  return (
    <div className="User">
        <p onClick={props.click}> Name:   {props.name} Age:   {props.age} years old! </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )

};

export default user;
