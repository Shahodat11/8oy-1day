// import { configureStore  } from '@reduxjs/toolkit'
// import counterSlice from './counterSlice'
// import wishlistSlice from './wishlistSlice'
// import cartSlice from './cartSlice'
// import { api } from "./api";

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     wishlist: wishlistSlice,
//     cart: cartSlice,
//     [api.reducerPath]: api.reducer,
//   },
//     middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(api.middleware),
// })

// import { createStore, combineReducers } from 'redux';
// import productsReducer from '../lib/productsReducer/productsReducer';

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// import { createStore, combineReducers } from 'redux';
// import productsReducer from '../lib/productsReducer/productsReducer';
// import cartReducer from '../lib/reducer/cartReducer';
// import likeReducer from '../lib/reducer/likeReducer';

// const rootReducer = combineReducers({
//   products: productsReducer,
//   cart: cartReducer,
//   like: likeReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { createStore, combineReducers } from 'redux';
import productsReducer from '../lib/productsReducer/productsReducer';
import cartReducer from '../lib/reducer/cartReducer';
import likeReducer from '../lib/reducer/likeReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  like: likeReducer,
});

const store = createStore(rootReducer);

export default store;

