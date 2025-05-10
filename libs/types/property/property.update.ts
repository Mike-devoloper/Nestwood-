import { ProductStatus, ProductType } from "libs/enums/product.enum";


export interface PropertyUpdate {
	_id: string;
	propertyType?: ProductType;
	propertyStatus?: ProductStatus;
	propertyAddress?: string;
	propertyTitle?: string;
	propertyPrice?: number;
	propertySquare?: number;
	propertyBeds?: number;
	propertyRooms?: number;
	propertyImages?: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
}
