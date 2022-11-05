import { Card, Image } from "antd";
import React from 'react';
import { BsPeople } from 'react-icons/bs';

const { Meta } = Card;

type Course = {
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
};

interface CoursesProps{
    items: Course[];
}

const Course:React.FC<CoursesProps> = (props) => {
    return (
        <>
            {
                props.items.map((course:Course) => (
                    <Card
                        key={course._id}
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
                ))
            }
                
        </>
    );
}


export default Course;