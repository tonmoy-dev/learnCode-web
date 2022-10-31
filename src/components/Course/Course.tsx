import { Avatar, Card, Col } from 'antd';
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

const Course: React.FC<CourseProps> = ({course}): JSX.Element => (
    
                <Col span={6}>
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
                </Col>
);

export default Course;