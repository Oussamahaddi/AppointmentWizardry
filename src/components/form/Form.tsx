import React, { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { LuCalendarCheck } from "react-icons/lu"
import Button from "../buttons/Button"
import { AppoiT, Inputs } from "../../types"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


// eslint-disable-next-line react/prop-types, @typescript-eslint/no-explicit-any
const Form = ({arr, setApp} : {arr : AppoiT[], setApp: any}) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<Inputs>()

	const onSubmit : SubmitHandler<Inputs> = (data) => {
		const newData = {
			id : arr.length ,
			petName: data.petName,
			ownerName: data.ownerName,
			aptDate: `${data.aptDate} ${data.aptTime}`,
			aptNotes: data.aptNotes,
		}
		setApp([...arr, newData])
		toast.success("Appointment created succussfully")
	}

	useEffect(() => {
		if (isSubmitSuccessful) reset({
			petName : "",
			ownerName: "",
			aptDate : "",
			aptTime : "",
			aptNotes : ""
		})
	}, [isSubmitSuccessful])
	

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				draggable
				theme="dark"
			/>
			<div className="w-full bg-[#60a5fa] rounded-t flex items-center gap-2 p-3 text-white">
				<LuCalendarCheck />
				<span>Add Appointement</span>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 p-4">
				<div className="w-full grid grid-cols-[1fr_2fr]">
					<label className="text-left" htmlFor="petName">Owner Name</label>
					<div className="flex flex-col items-start">
						<input
							type="text"
							id="petName"
							placeholder="Pet name"
							className="w-full border border-[#ccc] px-2 py-1 rounded md:w-3/6"
							{...register("petName", { 
								required: "This field can't be null",
								pattern: {
									value : /^[a-zA-Z0-9]+$/gi,
									message : "Invalide characters"
								},
								minLength : {
									value : 3,
									message : "Must be more than 3 character"
								},
								maxLength: {
									value: 20,
									message: "Must be more less than 20 character.",
								}
							})}
						/>
						{errors.petName && <div className="text-red-400">{errors.petName?.message}</div>}
					</div>
				</div>
				<div className="w-full grid grid-cols-[1fr_2fr]">
					<label className="text-left" htmlFor="ownerName">Pet Name</label>
					<div className="flex flex-col items-start">
						<input
							type="text"
							id="ownerName"
							placeholder="pet name"
							className="w-full border border-[#ccc] px-2 py-1 rounded md:w-3/6"
							{...register("ownerName", { 
								required: "This field can't be null", 
								pattern : {
									value : /^[a-zA-Z]+[\s]+[a-zA-Z]+$/gi,
									message : "Invalide characters"
								},
								minLength : {
									value : 3,
									message : "Must be more than 3 character"
								},
								maxLength: {
									value: 20,
									message: "Must be more less than 20 character.",
								}
							})}
						/>
						{errors.ownerName && <div className="text-red-400">{errors.ownerName?.message}</div>}
					</div>
				</div>
				<div className="w-full grid grid-cols-[1fr_2fr]">
					<label className="text-left" htmlFor="date">Apt Date</label>
					<div className="flex flex-col items-start">
						<input
							type="date"
							id="date"
							placeholder="hellow"
							className="w-full border border-[#ccc] px-2 py-1 rounded md:w-3/6"
							{...register("aptDate", { 
								required: "This field can't be null",
								pattern : {
									value : /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
									message : "Date must be a valid date in the format YYYY-MM-DD"
								}
							})}
						/>	
						{errors.aptDate && <div className="text-red-400">{errors.aptDate?.message}</div>}
					</div>
				</div>
				<div className="w-full grid grid-cols-[1fr_2fr]">
					<label className="text-left" htmlFor="time">Apt Time</label>
					<div className="w-full">
						<div className="flex flex-col items-start">
							<input
								type="time"
								id="time"
								placeholder="hellow"
								className="w-full border border-[#ccc] px-2 py-1 rounded md:w-3/6"
								{...register("aptTime", { 
									required: "This field can't be null", 
									pattern : {
										value : /^\d{1,2}:\d{1,2}$/,
										message : "Invalide characters"
									}
								})}
							/>
							{errors.aptTime && <div className="text-red-400">{errors.aptTime?.message}</div>}
						</div>
					</div>
				</div>
				<div className="w-full grid grid-cols-[1fr_2fr]">
					<label className="text-left" htmlFor="aptNotes">Appointment Note</label>
					<div className="flex flex-col items-start">
						<textarea
							id="aptNotes"
							placeholder="Details Comments about the condition"
							className="border border-[#ccc] px-2 py-1 rounded md:w-full"
							{...register("aptNotes", { 
								required: "This field can't be null", 
								pattern : {
									value : /^[a-z A-Z 0-9]+$/gi,
									message : "Invalide characters"
								},
								minLength : {
									value : 5,
									message : "Must be more than 3 character"
								},
								maxLength: {
									value: 255,
									message: "This input exceed maxLength.",
								}
							})}
						></textarea>
						{errors.aptNotes && <div className="text-red-400">{errors.aptNotes?.message}</div>}
					</div>
				</div>
				<Button
					text="submit"
					btnColor="bg-[#60a5fa] text-white px-4 py-2 rounded w-fit self-end hover:bg-blue-600"
				/>
			</form>
		</>
	)
}

export default Form
