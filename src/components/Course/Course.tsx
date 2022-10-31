import { Avatar, Card } from 'antd';
import React from 'react';

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
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src={course.thumbnail}
            />
        }
    >
        <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={course.title}
            description={course.description}
        />
    </Card>
);

export default Course;