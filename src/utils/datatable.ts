import { Inventory, SortOptions, SortOptionsEnums } from 'src/typings/datatable';

export const getAllKeysFromData = (data: Inventory): string[] => {
	let headers: string[] = [];
	data.map((x) => headers = [...Object.keys(x)]);
	return headers;
}

export const cleanValue = (key: string): string => {
	
	return key.replace(/_/g, " ").toUpperCase();
}

export const getSortedData = (data: Inventory, sortKey: string, sortOrder: SortOptions) =>  {
	return data.sort((a: any, b: any) => {
		if (sortOrder === SortOptionsEnums.ASCENDING) {
			return a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0;
		} else {
			return b[sortKey] > a[sortKey] ? 1 : b[sortKey] < a[sortKey] ? -1 : 0;
		}
	})
}
