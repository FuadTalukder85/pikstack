import { baseApi } from "../../Api/BaseApi";

const assetsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postAssets: builder.mutation({
      query: (postAssets) => ({
        url: "/additem",
        method: "POST",
        body: postAssets,
      }),
    }),
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
    updateAssets: builder.mutation({
      query: ({ _id, assetsData }) => ({
        url: `/assets/${_id}`,
        method: "PUT",
        body: assetsData,
      }),
    }),
    deleteAssets: builder.mutation({
      query: (_id) => ({
        url: `/assets/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  usePostAssetsMutation,
  useGetAssetsQuery,
  useGetAssetsByIdQuery,
  useUpdateAssetsMutation,
  useDeleteAssetsMutation,
} = assetsApi;
