import Course from "../../components/Course/Course";


const Courses: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    courses.map((course, index) => (
                        <Course course={course} key={index} />
                    ))

                }
            </div>
        </div>
    );
}

export default Courses;

const courses = [
    {
        title: 'Modern JavaScript - From Novice to Ninja',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    },{
        title: 'Modern JavaScript - From Novice to Ninja2',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    },{
        title: 'Modern JavaScript - From Novice to Ninja3',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    },{
        title: 'Modern JavaScript - From Novice to Ninja4',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    },{
        title: 'Modern JavaScript - From Novice to Ninja5',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    },{
        title: 'Modern JavaScript - From Novice to Ninja5',
        description: 'A full 20-hour course about JavaScript, from the very beginning to ninja-level. The complete JS bootcamp! Also available on Udemy.',
        thumbnail: 'https://i.ibb.co/YbgZHCh/n-U9-Ew-D4a-Q0-GAMOi-Tvlt-Q.png'
    }
]