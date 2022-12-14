import { Space, Spin } from 'antd';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Course } from "../models/course.model";
import { useCoursesQuery } from "../services/api/coursesApi";

const TopCourses: React.FC = () => {
	const { data, isLoading, isFetching, isSuccess, isError } = useCoursesQuery();
	return (
		<div className="container mx-auto py-4">
			<h1 className='text-center'>Popular Courses</h1>
			{(isLoading || isFetching || isError) && <div className='flex items-center justify-center h-48'>
				<Space size="middle">
					<Spin size="large" />
				</Space>
			</div>
			}
			<div className="grid grid-cols-4 gap-5 place-content-center">
				{isSuccess && (
					<>
						{
							data
								.filter((course: Course) => course.label === 'Bestseller')
								.map((course: Course) => (
									<div className='rounded-md overflow-hidden shadow-lg' key={course._id}>
										<div className="">
											<div className="relative">
												<img className="w-full" src={course.thumbnail} alt="Colors" />
												<p className="absolute top-3 left-3 bg-yellow-300 text-gray-800 font-semibold py-1 px-3">{course.label}</p>
											</div>
											<div className="text-left px-5 py-4 space-y-2">
												<h1 className="text-gray-800 text-xl font-semibold ">{course.title?.slice(0, 40)}...</h1>
												<p className="text-sm font-semibold text-gray-600">{course.instructor}</p>
												<div className='flex items-center'>
													<span className='text-base font-semibold text-yellow-600'>{course.rating}</span>
													<AiFillStar className='w-5 h-5 text-yellow-500 ml-2' />
												</div>
												<p className='text-xl font-semibold'>${course.currentPrice}</p>
												<div className="flex gap-3 justify-between items-center">
													<button className="text-base text-white bg-indigo-600 px-4 py-2 rounded border-none outline-none cursor-pointer">View Course</button>
													<button className="border-none outline-none cursor-pointer text-indigo-600"> <BsFillCartPlusFill className='w-6 h-6' /> </button>
												</div>
												
											</div>
										</div>
									</div>
								))
						}
					</>
				)}
                
			</div>
		</div>
	);
};

export default TopCourses;