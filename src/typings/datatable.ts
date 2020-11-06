export interface Inventory extends Array<Product>{};

export interface Product {
	product_id: number;
	amazon_image_url: string;
	asin: string;
	title: string;
	inventory_level: number;
	lead_time: number;
}

export type SortOptions = SortOptionsEnums.ASCENDING | SortOptionsEnums.DESCENDING;

export enum SortOptionsEnums {
	ASCENDING = 'asc',
	DESCENDING = 'desc'
}

export interface SelectOptions extends Array<Option>{};

export interface Option {
	name: string;
	value: number;
}
