import { Avatar, Card, Image } from 'antd';
import React from 'react';
import { BsPeople } from 'react-icons/bs';

const { Meta } = Card;

type CourseType = {
    title: string,
    description: string,
    thumbnail: string,
}
interface CourseProps {
    course: CourseType
}

const Course: React.FC<CourseProps> = ({ course }): JSX.Element => (
    <Card
        hoverable
        style={{ width: 300, margin: 'auto'}}
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
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={course.title}
            description={course.description}
        />
        <div className='flex justify-between'>
            <p> <BsPeople /> 77</p>
            <p>Free</p>
        </div>
    </Card>
);

export default Course;