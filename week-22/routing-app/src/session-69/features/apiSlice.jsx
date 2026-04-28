import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice= createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints:(builder)=>({
        //GET API
        getUsers:builder.query({
            query:()=>"users"
        })
        //POST //PUT //DELETE
    })
});
export const{
    useGetUsersQuery
}= apiSlice;