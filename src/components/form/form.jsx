import React from "react";
import Button from "../buttons/Button";
import {LuCalendarCheck} from "react-icons/lu"

const Form = () => {
    return (
        <>
            <div className="w-full bg-[#60a5fa] rounded-t flex items-center gap-2 p-3 text-white">
                <LuCalendarCheck />
                <span>Add Appointement</span>
            </div>
            <form action="" className="flex flex-col gap-3 p-4">
                <div className="w-full flex justify-between">
                    <label htmlFor="ownername">Owner Name</label>
                    <input type="text" name="ownername" id="ownername" placeholder="owner name" className="border border-[#ccc] px-2 py-1 rounded w-4/6" />
                </div>
                <div className="w-full flex justify-between">
                    <label htmlFor="petname">Pet Name</label>
                    <input type="text" name="petname" id="petname" placeholder="pet name" className="border border-[#ccc] px-2 py-1 rounded w-4/6" />
                </div>
                <div className="w-full flex justify-between">
                    <label htmlFor="date">Apt Date</label>
                    <input type="date" name="date" id="date" placeholder="hellow" className="border border-[#ccc] px-2 py-1 rounded w-4/6" />
                </div>
                <div className="w-full flex justify-between">
                    <label htmlFor="date">Apt Time</label>
                    <input type="time" name="time" placeholder="hellow" className="border border-[#ccc] px-2 py-1 rounded w-4/6" />
                </div>
                <div className="w-full flex justify-between">
                    <label htmlFor="des">Appointment Note</label>
                    <textarea name="description" id="des" placeHolder="Details Comments about the condition" className="border border-[#ccc] px-2 py-1 rounded w-4/6"></textarea>
                </div>
                <Button text="submit" btnColor="bg-[#60a5fa] text-white px-4 py-2 rounded w-fit self-end"/>
            </form>
        </>
    )
}

export default Form;