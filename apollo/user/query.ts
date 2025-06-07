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

export const GET_ALL_AGENTS = gql`
query GetAgents($input: AgentsInquiry!) {
    getAgents(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}`

export const GET_PRODUCT = gql`query GetProperty ($productId: String!){
    getProduct(productId: $productId) {
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


/******************
    * ARTICLE *
********************/


export const GET_ALL_ARTICLES = gql`
query GetBoardArticles ($input: BoardArticlesInquiry!) {
    getBoardArticles(input: $input) {
        list {
            _id
            articleCategory
            articleStatus
            articleTitle
            articleContent
            articleImage
            articleViews
            articleLikes
            articleComments
            memberId
            createdAt
            updatedAt
        }
        metaCounter {
            total
        }
    }
}
`

export const GET_FAVORITES = gql`query GetFavorites($input: OrdinaryInquiry!) {
    getFavorites(input: $input) {
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
    }
}
`


export const GET_VISITED = gql`query GetVisited ($input: OrdinaryInquiry!) {
    getVisited(input: $input) {
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
    }
}`


export const GET_COMMENTS = gql`query GetComments ($input: CommentsInquiry!) {
    getComments(input: $input) {
        list {
            _id
            commentStatus
            commentGroup
            commentContent
            commentRefId
            memberId
            createdAt
            updatedAt
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
            }
        }
        metaCounter {
            total
        }
    }
}
`