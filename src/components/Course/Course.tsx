import { Card, Image } from 'antd';

const { Meta } = Card;

interface CourseType {
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

interface CoursesProps {
    courseObj: CourseType[]
}


const Course = () => {
    // console.log(course);
    
   /*  const { title,
        subTitle,
        description,
        thumbnail,
        duration,
        lectures,
        instructor,
        rating,
        enrolled,
        originalPrice,
        currentPrice,
        status
    } = course; */
    return (
        <Card
        hoverable
        style={{ width: 300, margin: 'auto'}}
        cover={
            <Image
                // width={200}
                alt='thumbnail'
                // src={thumbnail}
            />
        }
        bodyStyle={{ fontSize: '16px' }}
    >
        <Meta
            // avatar={<Avatar src="" />}
            // title={ title}
            // description={ description}
        />
        <div className='flex justify-between'>
            {/* <p>{ instructor}</p>
            <span>{ rating} (<BsPeople /> { enrolled})</span>
            <span>{ duration} { lectures}</span>
            <span>{ currentPrice} { originalPrice}</span>
            <span>{ status}</span> */}
        </div>
    </Card>
    )
}


export default Course;