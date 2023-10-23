import React from "react";
import Button from "../buttons/button";

const Form = () => {
    return (
        <>
            <form action="" className="flex justify-center">
                <div className="w-5/6 flex flex-col">
                    <input type="text" name="ownername" placeholder="hellow" />
                    <input type="text" name="petname" placeholder="hellow" />
                    <input type="date" name="date" placeholder="hellow" />
                    <input type="time" name="time" placeholder="hellow" />
                    <textarea name="description" placeHolder="Details Comments about the condition"></textarea>
                    <Button text="submit" btnColor="bg-[#60a5fa] text-white px-4 py-2 rounded w-fit self-end"/>
                </div>
            </form>
        </>
    )
}

export default Form;