import { configureStore } from "@reduxjs/toolkit";
import { assetsReducer } from "./Features/AssetsApi/AssetsSlice";
import { baseApi } from "./Api/BaseApi";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    assets: assetsReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
