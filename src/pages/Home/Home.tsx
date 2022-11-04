import { BackTop } from 'antd';
import { IoMdRocket } from 'react-icons/io';
import Banner from '../../components/Banner/Banner';
import Courses from '../../components/Courses/Courses';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navigation/Navbar';


const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Courses/>
            <Footer/>
            <BackTop
                duration={1000}
                visibilityHeight={1000}	
            >
                <div className='scroll-to-top p-2 rounded-lg'>
                    <IoMdRocket className='w-6 h-6 text-white' />
                </div>
        </BackTop>
        </div>
    );
}

export default Home;