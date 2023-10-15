/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductItem\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartUpdateItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartUpdateItemQuantityDocument,
    "mutation CartUpsertProduct($cartId: ID!, $productId: ID!, $orderItemId: ID, $total: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}, update: {quantity: $quantity, total: $total}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}": types.CartUpsertProductDocument,
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    ...ReviewsItem\n  }\n  averageRating\n}": types.ProductItemFragmentDoc,
    "mutation ProductPublish($id: ID!) {\n  publishProduct(where: {id: $id}, to: PUBLISHED) {\n    ...ProductItem\n  }\n}": types.ProductPublishDocument,
    "query ProductsGetByCategorySlug($slug: String!, $first: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    name\n    description\n    products(first: $first, skip: $skip) {\n      ...ProductItem\n    }\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($first: Int, $skip: Int, $query: String, $orderBy: ProductOrderByInput) {\n  products(\n    where: {name_contains: $query}\n    first: $first\n    skip: $skip\n    orderBy: $orderBy\n  ) {\n    ...ProductItem\n  }\n  productsConnection(where: {name_contains: $query}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    ...ReviewsItem\n  }\n}": types.ReviewCreateDocument,
    "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewsItem\n  }\n}": types.ReviewPublishDocument,
    "mutation ReviewUpdateAverageRating($id: ID!, $averageRating: Int) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    id\n  }\n}": types.ReviewUpdateAverageRatingDocument,
    "fragment ReviewsItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n  stage\n}": types.ReviewsItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpdateItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartUpdateItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpsertProduct($cartId: ID!, $productId: ID!, $orderItemId: ID, $total: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}, update: {quantity: $quantity, total: $total}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartUpsertProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    ...ReviewsItem\n  }\n  averageRating\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductPublish($id: ID!) {\n  publishProduct(where: {id: $id}, to: PUBLISHED) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $first: Int, $skip: Int) {\n  categories(where: {slug: $slug}) {\n    name\n    description\n    products(first: $first, skip: $skip) {\n      ...ProductItem\n    }\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int, $query: String, $orderBy: ProductOrderByInput) {\n  products(\n    where: {name_contains: $query}\n    first: $first\n    skip: $skip\n    orderBy: $orderBy\n  ) {\n    ...ProductItem\n  }\n  productsConnection(where: {name_contains: $query}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($id: ID!, $headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $id}}}\n  ) {\n    ...ReviewsItem\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    ...ReviewsItem\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewUpdateAverageRating($id: ID!, $averageRating: Int) {\n  updateProduct(where: {id: $id}, data: {averageRating: $averageRating}) {\n    id\n  }\n}"): typeof import('./graphql').ReviewUpdateAverageRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewsItem on Review {\n  id\n  name\n  headline\n  email\n  content\n  rating\n  stage\n}"): typeof import('./graphql').ReviewsItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
