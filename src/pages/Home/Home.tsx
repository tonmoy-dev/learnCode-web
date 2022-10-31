import { BackTop } from 'antd';
import { IoMdRocket } from 'react-icons/io';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navigation/Navbar';
import Courses from '../Courses/Courses';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Courses />
            <Footer/>
            <BackTop
                duration={1000}
                visibilityHeight={200}	
            >
                <div className='scroll-to-top p-2 rounded-lg'>
                    <IoMdRocket className='w-6 h-6 text-white' />
                </div>
        </BackTop>
        </div>
    );
}

export default Home;