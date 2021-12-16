import React from 'react'

const Input = ({label,nameTitle})=>{
    return(
        <div className="Input">
            <label>{label}</label>
            <input type="textbox" name={nameTitle}  autocomplete="off"/>

        </div>
    )
}

export default Input
