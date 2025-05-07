import { BoardArticleCategory, BoardArticleStatus } from "libs/enums/board-article.enum";
import {Direction} from "libs/config"

export default interface ABAISearch {
    articleStatus?:BoardArticleStatus;
    articleCategory?: BoardArticleCategory;
}

export interface AllBoardArticlesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ABAISearch;
}


