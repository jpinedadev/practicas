import React, {useState} from "react"

function MyForm3(){
    const [name,setName] =  useState("");

    const handleSubmit(event) => {
        event.preventDefault();

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    valuer={name}
                    onChange={(e)=> setName({e.target.value})}
                />
            </label>
            <input type="submit"/>
        </form>
        )
}

export default MyForm3
