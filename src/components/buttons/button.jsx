import React from "react";

const Button = ({text, btnColor}) => {
    return (
        <>
            <button className={btnColor}>{text}</button>
        </>
    )
}

export default Button;