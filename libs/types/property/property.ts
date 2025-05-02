import { ProductSize, ProductStatus, ProductType } from '../../enums/product.enum';
import { Member } from '../member/member';



export interface MeLiked {
	memberId: string;
	likeRefId: string;
	myFavorite: boolean;
}

export interface TotalCounter {
	total: number;
}

export interface Product {
	_id: string;
	productType: ProductType;
	productStatus: ProductStatus;
	productSize: ProductSize;
	productAddress: string;
	productName: string;
	productPrice: number;
	productLikes: number;
	productRank: number;
	productViews: number;
	productComments: number;
	productImages: string[];
	productDesc: string;
	memberId: string;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregation **/
	meLiked?: MeLiked[];
	memberData?: Member;
}

export interface Products {
	list: Product[];
	metaCounter: TotalCounter[];
}
