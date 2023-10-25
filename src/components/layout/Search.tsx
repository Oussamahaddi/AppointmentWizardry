import React from "react"

const filterList = ["Pet Name", "Owner Name", "Date", "Asc", "Desc"]

const Search = ({search, change} : {search : string, change : React.ChangeEventHandler<HTMLInputElement>}) => {
	return (
		<>  
			<div className="flex items-center w-full my-4">
				<div className="w-full">
					<input type="text" placeholder="search" value={search} onChange={change} className="w-full py-1 px-2 border border-[#ccc] rounded-l" />
				</div>
				<div >
					<select name="" id="" className="p-1.5 bg-[#60a5fa] text-white">
						{/* <option value="" selected disabled>select</option> */}
						{
							filterList.map((item, index) => (
								<option key={index} value={item}>{item}</option>
							))
						}
					</select>
				</div>
			</div>
		</>
	)
}

export default Search