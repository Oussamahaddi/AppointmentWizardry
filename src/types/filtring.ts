export type SortT = "Asc" | "Desc"
export type FilterT = "petName" | "ownerName" | "aptDate"


export type FilterAndSortT = {
  filter : FilterT
  sort : SortT
}