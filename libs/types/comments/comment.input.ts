import { CommentGroup } from "libs/enums/comment.enum";
import { Direction } from "libs/enums/common.enum";

interface CISearch {
    commentRefId?: string;
}

export default interface CommentsInquiry {
    page: number;
    limit: number;
    sort?: string;
    direction?: Direction;
    search: CISearch;
}

export interface CommentInput {
	commentGroup: CommentGroup;
	commentContent: string;
	commentRefId: string;
	memberId?: string;
}


