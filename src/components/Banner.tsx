import { Button } from "antd";
import bannerImg from '../../assets/images/banner/hand_coding.gif';

const Banner: React.FC = () => {

    return (
        <div className='container mx-auto py-4 md:py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                <div className='w-3/4 mx-auto text-left flex flex-col gap-4 items-start justify-center'>
                    <h1 className="text-3xl md:text-5xl md:leading-tight">Complete Your Dreams in LearnCode.</h1>
                    <p className="text-base">Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                    <Button type="primary" size="large">Learn More</Button>
                </div>
                <div className='w-3/4 mx-auto'>
                    <img className="w-full" src={bannerImg} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default Banner;