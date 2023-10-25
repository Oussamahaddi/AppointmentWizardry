import React from "react";

const Button = ({text, btnColor}: {text: string, btnColor : string}) => {
    return (
        <>
            <button className={btnColor}>{text}</button>
        </>
    )
}

export default Button;