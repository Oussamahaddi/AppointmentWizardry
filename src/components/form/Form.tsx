import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { LuCalendarCheck } from "react-icons/lu"
import Button from "../buttons/Button"
import { Inputs } from "../../types"

const Form = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit : SubmitHandler<Inputs> = (data) => console.log(data, errors)
	
	return (
		<>
			<div className="w-full bg-[#60a5fa] rounded-t flex items-center gap-2 p-3 text-white">
				<LuCalendarCheck />
				<span>Add Appointement</span>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 p-4">
				<div className="w-full flex justify-between">
					<label htmlFor="ownername">Owner Name</label>
					<input
						type="text"
						id="ownername"
						placeholder="owner name"
						className="border border-[#ccc] px-2 py-1 rounded w-4/6"
						{...register("owner", { 
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
				</div>
				{errors.owner && <div className="text-red-400">{errors.owner?.message}</div>}
				<div className="w-full flex justify-between">
					<label htmlFor="petname">Pet Name</label>
					<input
						type="text"
						id="petname"
						placeholder="pet name"
						className="border border-[#ccc] px-2 py-1 rounded w-4/6"
						{...register("petname", { 
							required: "This field can't be null", 
							pattern : {
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
				</div>
				{errors.petname && <div className="text-red-400">{errors.petname?.message}</div>}
				<div className="w-full flex justify-between">
					<label htmlFor="date">Apt Date</label>
					<input
						type="date"
						id="date"
						placeholder="hellow"
						className="border border-[#ccc] px-2 py-1 rounded w-4/6"
						{...register("date", { 
							required: "This field can't be null",
							pattern : {
								value : /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
								message : "Date must be a valid date in the format YYYY-MM-DD"
							}
						})}
					/>	
				</div>
				{errors.date && <div className="text-red-400">{errors.date?.message}</div>}
				<div className="w-full flex justify-between">
					<label htmlFor="date">Apt Time</label>
					<input
						type="time"
						placeholder="hellow"
						className="border border-[#ccc] px-2 py-1 rounded w-4/6"
						{...register("time", { 
							required: "This field can't be null", 
							pattern : {
								value : /([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}/,
								message : "Invalide characters"
							}
						})}
					/>
				</div>
				{errors.time && <div className="text-red-400">{errors.time?.message}</div>}
				<div className="w-full flex justify-between">
					<label htmlFor="des">Appointment Note</label>
					<textarea
						id="des"
						placeholder="Details Comments about the condition"
						className="border border-[#ccc] px-2 py-1 rounded w-4/6"
						{...register("description", { 
							required: "This field can't be null", 
							pattern : {
								value : /^[a-zA-Z0-9]+$/gi,
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
				</div>
				{errors.description && <div className="text-red-400">{errors.description?.message}</div>}
				<Button
					text="submit"
					btnColor="bg-[#60a5fa] text-white px-4 py-2 rounded w-fit self-end"
				/>
			</form>
		</>
	)
}

export default Form
