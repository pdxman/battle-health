import React, {useState} from 'react'

export default function Status (props){


    return(
        <div>
            <h1>Status</h1>
            <p>Health: {props.health} </p>
            <p>Fire: {props.fire}</p>
            <p>Energy: {props.energy}</p>
        </div>
    )
}