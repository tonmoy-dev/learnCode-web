// import { FloatButton } from 'antd';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import TopCourses from '../components/TopCourses';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <TopCourses />
            <Pricing/>
            <Footer/>
        </div>
    );
}

export default Home;

// <FloatButton.BackTop
// duration={1000}
// visibilityHeight={1000}	/>
