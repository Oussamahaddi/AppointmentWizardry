import React, { useCallback, useEffect, useState } from "react"
import { AppoiT, FilterAndSortT } from "../types"
import { http } from "../lib/http"
import {LuCalendarDays} from "react-icons/lu"
import Form from "../components/form/Form"
import Search from "../components/layout/Search"
import Appoi from "../components/appointment/Appoi"
import LoadingSpinner from "../components/LoadingSpinner"

const Appointment = () => {

	const [data, setData] = useState<AppoiT[]>([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [src , setSrc] = useState<string>("")
	
	const [filtering, setFiltring] = useState<FilterAndSortT>({
		filter: "petName",
		sort: "Asc"
	});

	const getData = async () => {
		const { data } = await http.get<AppoiT[]>("data.json")
		setData(data)
		setIsLoaded(true)
	}

	const deleteAppoint = useCallback(
		(item : AppoiT) => {
			setData(data.filter(ele => ele.id !== item.id))
		},
		[data],
	)

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
					<Form arr={data} setApp={setData}/>
				</div>
				
				<div>
					<Search search={src} setSrc={setSrc} filtering={filtering} setFiltring={setFiltring} />
				</div>
				<div>
					{
						data.filter((item : AppoiT) => {
							return (item.petName).toLowerCase().includes(src.toLocaleLowerCase())
						}).sort((a, b) => {
							if (filtering.filter === "petName")
								return filtering.sort === "Asc" ? a.petName > b.petName ? 1 : -1 : a.petName > b.petName ? -1 : 1
							if (filtering.filter === "ownerName")
								return filtering.sort === "Asc" ? a.ownerName > b.ownerName ? 1 : -1 : a.ownerName > b.ownerName ? -1 : 1
							if (filtering.filter === "aptDate")
								return filtering.sort === "Asc" ? a.aptDate > b.aptDate ? 1 : -1 : a.aptDate > b.aptDate ? -1 : 1
							else 
								return 0
						}).map((item , index) => (
							<Appoi key={index} deleteAppoint={deleteAppoint} appointment={item} />
						))
					}
				</div>
			</div>
		</>
	)
}

export default Appointment