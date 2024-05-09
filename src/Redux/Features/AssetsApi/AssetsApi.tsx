import { baseApi } from "../../Api/BaseApi";

const assetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: () => ({
        url: "/allitem",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAssetsQuery } = assetsApi;
