import React, { useEffect, useState } from "react"
import { Data } from "../types"
import { http } from "../lib/http"
import {LuCalendarDays} from "react-icons/lu"
import Form from "../components/form/Form"
import Search from "../components/layout/Search"
import Appoi from "../components/appointment/Appoi"
import LoadingSpinner from "../components/LoadingSpinner"

const Appointment = () => {

	const [data, setData] = useState<Data[]>([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [src , setSrc] = useState<string>("")

	const getData = async () => {
		const { data } = await http.get<Data[]>("data.json")
		setData(data)
		setIsLoaded(true)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSrc(e.target.value)
	}

	useEffect(() => {
		getData()
	}, [])

	if (!isLoaded) return <LoadingSpinner />

	return (
		<>
			<div className="w-11/12 mx-auto">
				<div className="flex gap-2 items-center">
					<LuCalendarDays className="text-7xl text-orange-500" />
					<h1 className="text-2xl font-semibold">Your Appointements</h1>
				</div>
				<div className="border border-[#ccc] rounded">
					<Form />
				</div>
				<div>
					<Search search={src} change={handleChange} />
				</div>
				<div>
					{
						data.filter(item => {
							return item.petName.toLowerCase().includes(src.toLocaleLowerCase())
						}).map((item , index) => (
							<Appoi key={index} appointment={item} />
						))
					}
				</div>
			</div>
		</>
	)
}

export default Appointment