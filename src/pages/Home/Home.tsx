import { Typography } from 'antd';
import Navbar from '../../components/Navigation/Navbar';
import Courses from '../Courses/Courses';
const { Title } = Typography;

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Courses/>
            <Title level={2}>Learn Code now</Title>
        </div>
    )
}

export default Home;