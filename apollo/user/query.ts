import {gql} from "@apollo/client"

/******************
    * PRODUCT *
********************/

export  const GET_PRODUCTS = gql`query GetProducts ($input: ProductsInquiry!){
    getProducts(input: $input) {
        list {
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
            memberData {
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
                meLiked {
                    memberId
                    likeRefId
                    myFavorite
                }
            }
        }
        metaCounter {
            total
        }
    }
}
`


/******************
    * ARTICLE *
********************/