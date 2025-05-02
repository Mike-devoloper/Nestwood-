import { Direction } from "../../enums/common.enum";
import { ProductSize, ProductStatus, ProductType } from "../../enums/product.enum";


export interface ProductInput {
	productType: ProductType;
	productStatus?: ProductStatus;
	productAddress?: string;
	productName: string;
	productPrice: number;
	productImages: string[];
	productDesc?: string;
	memberId?: string;
}

interface PISearch {
	memberId?: string;
	productList?: ProductType[];
	sizeList?: ProductSize[];
	pricesRange?: Range;
	text?: string;
}

export interface ProductsInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: PISearch;
}

interface APISearch {
	productStatus?: ProductStatus;
}

export interface AgentPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: APISearch;
}

interface ALPISearch {
	productStatus?: ProductStatus;
	productList?: ProductType[];
}

export interface AllPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ALPISearch;
}

interface Range {
	start: number;
	end: number;
}


