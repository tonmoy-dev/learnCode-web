import { useGetCoursesQuery } from "../../store/api/courses/coursesAPI";

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

const Courses:React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useGetCoursesQuery('courses');
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isFetching && <p>Fetching...</p>}
            {error && <p>Got error</p>}
            {isSuccess && (
                <div>
                    {data.map((course:Course,index:number) => (
                        <p key={index}>{course.title}</p>
                    ))}
                </div>
            )}
        </div>
    )
    
}

export default Courses;