import { baseApi } from "../../Api/BaseApi";

const assetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () => ({
        url: "/allitem",
        method: "GET",
      }),
    }),
    getAssetsById: builder.query({
      query: (_id) => ({
        url: `/assets/${_id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAssetsQuery, useGetAssetsByIdQuery } = assetsApi;
