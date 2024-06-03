// export const INC = "INC"
// export const DEC = "DEC"
// export const ADD_HEART = "ADD_HEART"
// export const PRODUCT = "PRODUCT"

// export const incCounter = () => {
//     return {
//         type: INC
//     }
// }

// export const fetchProductsRequest = () => ({
//   type: 'FETCH_PRODUCTS_REQUEST',
// });

// export const fetchProductsSuccess = (products) => ({
//   type: 'FETCH_PRODUCTS_SUCCESS',
//   payload: products,
// });

// export const fetchProductsFailure = (error) => ({
//   type: 'FETCH_PRODUCTS_FAILURE',
//   error,
// });

// Product actions
// export const fetchProductsRequest = () => ({
//   type: 'FETCH_PRODUCTS_REQUEST',
// });

// export const fetchProductsSuccess = (products) => ({
//   type: 'FETCH_PRODUCTS_SUCCESS',
//   payload: products,
// });

// export const fetchProductsFailure = (error) => ({
//   type: 'FETCH_PRODUCTS_FAILURE',
//   error,
// });

// // Cart actions
// export const addToCart = (product) => ({
//   type: 'ADD_TO_CART',
//   payload: product,
// });

// export const removeFromCart = (product) => ({
//   type: 'REMOVE_FROM_CART',
//   payload: product,
// });

// // Like actions
// export const addToLike = (product) => ({
//   type: 'ADD_TO_LIKE',
//   payload: product,
// });

// export const removeFromLike = (product) => ({
//   type: 'REMOVE_FROM_LIKE',
//   payload: product,
// });
// Product actions
export const fetchProductsRequest = () => ({
  type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  error,
});

// Cart actions
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (product) => ({
  type: 'REMOVE_FROM_CART',
  payload: product,
});

// Like actions
export const addToLike = (product) => ({
  type: 'ADD_TO_LIKE',
  payload: product,
});

export const removeFromLike = (product) => ({
  type: 'REMOVE_FROM_LIKE',
  payload: product,
});
