import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface Course {
    _id: string,
    title: string,
    subTitle?: string,
    description?: string,
    thumbnail: string,
    duration?: number,
    lectures?: number,
    instructor?: string,
    rating?: number,
    enrolled?: number,
    originalPrice?: number,
    currentPrice?: number,
    label?: string
}
const url = 'https://learn-code-api.onrender.com';

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://learn-code-api.onrender.com'
    }),
    endpoints: (builder) => ({
        getCourses: builder.query<Course[], string>({
            query: () => `/api/courses/`,
        }),
    }),
});

export const { useGetCoursesQuery } = coursesApi;