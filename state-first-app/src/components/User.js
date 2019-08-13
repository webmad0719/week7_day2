import React from "react";

const User = props =>
    <div>
        <h2 style={{ backgroundColor: props.theColor }}>
            Hello, {props.name}!
        </h2>
        <img src={props.image} alt={props.name} style={{ width: 200 }}></img>
    </div>


export default User;