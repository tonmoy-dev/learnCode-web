import React from 'react';
import { Course } from '../models/course.model';
import { useAddCourseMutation, useCourseQuery, useCoursesQuery, useDeleteCourseMutation, useUpdateCourseMutation } from "../services/api/coursesApi";


const PopularCourses: React.FC = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useCoursesQuery();
  // console.log(data);
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading && <p>Loading...</p>}
            {isFetching && <p>Fetching...</p>}
          {error && <p>Got error</p>}
          {isSuccess && (
            <div className=''>
              {
                data.map((course: Course) => (
                  <div key={course?._id}>
                    <p className='text-xl text-red-600'>{course.title}</p>
                      <CourseDetail _id={course?._id} />
                  </div>
                )
                )
              }
            </div>
          )}
          <div>
            <AddCourse />
          </div>
        </div>
      </div>
    </>
  );
};

export const CourseDetail = ({ _id }: { _id: string }) => {
  const { data } = useCourseQuery(_id);
  // console.log(data);
  return (
    <div className='border border-2 border-green-500'>
      <p>{data?.description}</p>
    </div>
  )
}


export const AddCourse = () => {
  const [addCourse] = useAddCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  // const {refetch} = useCoursesQuery();
  const course = {
    "title": "Advanced",
    "subTitle": "The most advanced  master flexbox, CSS Grid, responsive design, and so much more.",
    "description": "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    "thumbnail": "https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png",
    "duration": 28,
    "lectures": 26,
    "instructor": "Jonas Schmedtmann",
    "rating": 4.8,
    "enrolled": 8280,
    "originalPrice": 84.99,
    "currentPrice": 16.99,
    "label": "Bestseller"
  }
  const course2 = {
    "_id":"63666fadfa921dc82df75e54",
    "title": "Advanced Course updated",
    "subTitle": "The most advanced  master flexbox, CSS Grid, responsive design, and so much more.",
    "description": "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    "thumbnail": "https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png",
    "duration": 28,
    "lectures": 26,
    "instructor": "Jonas Schmedtmann",
    "rating": 4.8,
    "enrolled": 8280,
    "originalPrice": 84.99,
    "currentPrice": 16.99,
    "label": "Bestseller"
  }
  const course3 = {
    "_id":"63666c08d208eacd39f9cab1",
    "title": "Advanced ",
    "subTitle": "The most advanced  master flexbox, CSS Grid, responsive design, and so much more.",
    "description": "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
    "thumbnail": "https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png",
    "duration": 28,
    "lectures": 26,
    "instructor": "Jonas Schmedtmann",
    "rating": 4.8,
    "enrolled": 8280,
    "originalPrice": 84.99,
    "currentPrice": 16.99,
    "label": "Bestseller"
  }

  const addHandler = async () => {
    await addCourse(course);
    // refetch();
  }
  const updateHandler = async () => {
    await updateCourse(course2);
    // refetch();
  }
  const deleteHandler = async () => {
    await deleteCourse(course3._id);
    // refetch();
  }
  return (
    <>
      <button onClick={addHandler}>Add course</button>
      <button onClick={updateHandler}>Update course</button>
      <button onClick={deleteHandler}>Delete course</button>
    </>
  )
}



export default PopularCourses;

