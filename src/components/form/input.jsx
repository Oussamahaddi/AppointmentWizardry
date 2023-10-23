import React from "react";

const Input = ({type, name, pHolder}) => {
    return (
        <>
            <div>
                <input type={type} name={name} placeholder={pHolder} className="border border-[#ccc] text-black w-full"/>
            </div>
        </>
    )
}

export default Input;