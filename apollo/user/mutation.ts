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