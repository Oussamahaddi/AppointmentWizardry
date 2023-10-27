import React, { Dispatch, useState } from "react"
import { FilterAndSortT, FilterT, SortT } from "../../types"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"

const filterBy : Array<FilterT> = ["petName", "ownerName", "aptDate"]
const sortBy : Array<SortT> = ["Asc", "Desc"]

type ChildProps = {
	search: string
	setSrc: Dispatch<string>
	filtering : FilterAndSortT
	setFiltring : (ops : FilterAndSortT) => void
};

const Search: React.FC<ChildProps> = ({ search, setSrc, filtering, setFiltring }) => {

	const [drop, setDrop] = useState<boolean>(false)

	return (
		<>
			<div className="flex items-center w-full my-4">
				<div className="w-full">
					<input type="text" placeholder="search" value={search} onChange={(e) => setSrc(e.target.value)} className="w-full py-1 px-2 border border-[#ccc] rounded-l" />
				</div>
				<div className="relative">
					<button onClick={() => setDrop(!drop)} className="flex items-center gap-2 text-white bg-[#60a5fa] font-semibold text-sm px-5 py-1.5 text-center inline-flex items-center hover:bg-blue-600">
						select
						{!drop ? <IoMdArrowDropdown className="text-lg" /> : <IoMdArrowDropup className="text-lg" /> }
					</button>
					{
						drop &&
						<div id="dropdownDefaultRadio" className="absolute right-0 my-1 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-[0_0_2px] shadow-[#60a5fa]">
							<div className="flex flex-col">
								{
									filterBy.map((item, index) => (
										<div key={index} className="flex justify-between p-2 hover:bg-[#60a5fa] hover:text-white rounded">
											<label htmlFor={`firlter-${index}`} className="w-full text-left ml-2 text-sm font-medium">{item}</label>
											<input id={`firlter-${index}`} type="radio" value={item} name="filterBy" onChange={() => setFiltring({...filtering, filter : item})} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
										</div>
									))
								}
								<hr />
								{
									sortBy.map((item, index) => (
										<div key={index} className="flex justify-between p-2 hover:bg-[#60a5fa] hover:text-white rounded">
											<label htmlFor={`sort-${index}`} className="w-full ml-2 text-sm font-medium text-left">{item}</label>
											<input id={`sort-${index}`} type="radio" value={item} name="sortBy" onChange={() => setFiltring({...filtering, sort : item})} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
										</div>
									))
								}
							</div>
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default Search