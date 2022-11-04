import { Card, Image } from "antd";
import axios from "axios";
import React, { useState } from 'react';
import { BsPeople } from 'react-icons/bs';
import useSWR from "swr";
const { Meta } = Card;

type CourseType = {
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
/* 
interface CoursesProps {
    course: CourseType[]
}
 */

// const url = "https://learn-code-api.onrender.com/api/courses";
const url = "http://localhost:5000/api/courses";

const PopularCourses: React.FC = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
    
  const fetcher = (url: string) => axios.get(url).then((res) => setCourses(res.data));
  const { data, error } = useSWR(`${url}`, fetcher);
  if (error) return <div>Loading failed</div>
    console.log(data)
  return (
    <>
      {
        (!data) && (<div>Loading..</div>)
      }
      {
        (courses.length !== 0) && <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            courses.map((course: CourseType, index: number) => (
              <div key={index}>
                <Card
                  hoverable
                  style={{ width: 300, margin: 'auto' }}
                  cover={
                    <Image
                      // width={200}
                      alt='thumbnail'
                      src={course.thumbnail}
                    />
                  }
                  bodyStyle={{ fontSize: '16px' }}
                >
                  <Meta
                    // avatar={<Avatar src="" />}
                    title={course.title}
                  // description={ description}
                  />
                  <div className='flex justify-between'>
                    <p>{course.instructor}</p>
                    <span>{course.rating} (<BsPeople /> {course.enrolled})</span>
                    <span>{course.duration} {course.lectures}</span>
                    <span>{course.currentPrice} {course.originalPrice}</span>
                    <span>{course?.label}</span>
                  </div>
                </Card>
              </div>
            ))
          }
                
        </div>
      </div>
      }
      
    </>
  );
};

export default PopularCourses;