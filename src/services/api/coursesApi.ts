import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Course, CourseType } from "../../models/course.model";

export const coursesApi = createApi({
    reducerPath: "coursesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    tagTypes:['Course'],
    endpoints: (builder) => ({
        courses: builder.query<Course[], void>({
            query: () => '/api/courses',
            providesTags:['Course']
        }),
        course: builder.query<Course, string>({
            query: (_id) => `/api/courses/${_id}`,
            providesTags:['Course']
        }),
        addCourse: builder.mutation<void, CourseType>({
            query: course => ({
                url: '/api/courses',
                method: 'POST',
                body: course
            }),
            invalidatesTags:['Course']
        }),
        updateCourse: builder.mutation<void, Course>({
            query: ({_id,...rest}) => ({
                url: `/api/courses/${_id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags:['Course']
        }),
        deleteCourse: builder.mutation<void, string>({
            query: (_id) => ({
                url: `/api/courses/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Course']
        }),
    })
})

export const {
    useCoursesQuery,
    useCourseQuery,
    useAddCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} = coursesApi;