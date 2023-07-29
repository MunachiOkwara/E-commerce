import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import eCommerce from "./feautures.js"

const persistConfig = {
    key: 'root',
    storage: storage,
  }
//   export const rootReducers = combineReducers({
//     commerce: eCommerce,
//   })
  const persistedReducer = persistReducer(persistConfig, eCommerce);

  const store = configureStore({
    reducer: {commerce: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  setupListeners(store.dispatch)
  
  export default store
