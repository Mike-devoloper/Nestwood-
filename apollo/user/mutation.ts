import { gql } from "@apollo/client";

export const LOGIN = gql`mutation Login ($input: LoginInput!){
    login(input: $input) {
        _id
        memberType
        memberAuthType
        memberStatus
        memberNick
        memberPhone
        memberFullName
        memberImage
        memberAddress
        memberDesc
        memberProducts
        memberFollowers
        memberFollowings
        memberArticle
        memberViews
        memberPoints
        memberLikes
        memberRank
        memberWarnings
        memberComments
        memberBlocks
        deletedAt
        updatedAt
        createdAt
        accessToken
    }
}
`

export const SIGN_UP = gql`mutation Signup ($input: MemberInput!){
    signup(input: $input) {
        _id
        memberType
        memberAuthType
        memberStatus
        memberNick
        memberPhone
        memberFullName
        memberImage
        memberAddress
        memberDesc
        memberProducts
        memberFollowers
        memberFollowings
        memberArticle
        memberViews
        memberPoints
        memberLikes
        memberRank
        memberWarnings
        memberComments
        memberBlocks
        deletedAt
        updatedAt
        createdAt
        accessToken
    }
}
`


//LIKE TARGET PRODUCT

export const LIKE_TARGET_PRODUCT = gql`
mutation LikeTargetProperty ($productId: String!) {
    likeTargetProperty(productId: $productId) {
        _id
        productType
        productStatus
        productSize
        productAddress
        productName
        productPrice
        productLikes
        productRank
        productViews
        productComments
        productImages
        productDesc
        memberId
        soldAt
        deletedAt
        constructedAt
        updatedAt
        createdAt
        accessToken
    }
}
`


//COMMENT
export const CREATE_COMMENT = gql`
	mutation CreateComment($input: CommentInput!) {
		createComment(input: $input) {
			_id
			commentStatus
			commentGroup
			commentContent
			commentRefId
			memberId
			createdAt
			updatedAt
		}
	}
`;
