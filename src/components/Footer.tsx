import { Typography } from "antd";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Footer: React.FC = () => {
	const { Title } = Typography;

	return (
		<div className="container mx-auto text-start py-5 px-10 md:px-0">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="mb-4 md:mb-0">
					<Title level={4}>Address</Title>
					<div className="mt-4">
						<p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
						<p>
							+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)
						</p>
						<p>support@learncode.com</p>
					</div>
					<div className="flex gap-6">
						<AiFillFacebook style={{ fontSize: '28px', color: '#aaa' }} />
						<AiFillTwitterSquare style={{ fontSize: '28px', color: '#aaa' }} />
						<AiFillInstagram style={{ fontSize: '28px', color: '#aaa' }} />
						<AiFillLinkedin style={{ fontSize: '28px', color: '#aaa' }} />
					</div>
				</div>
				<div className="w-full md:w-2/4 mx-auto">
					<Title level={4}>Explore</Title>
					<div className="flex items-center w-full gap-10 mt-4">
						<div>
							{
								footerItems.slice(0, 3)
									.map((item, index) => <p key={index}>{item}</p>)
							}
						</div>
						<div>
							{
								footerItems.slice(3, 6)
									.map((item, index) => <p key={index}>{item}</p>)
							}
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/3 mx-auto">
					<Title level={4}>Information</Title>
					<div className="mt-4">
						{
							footerItems.slice(-4)
								.map((item, index) => <p key={index}>{item}</p>
								)
						}
					</div>
				</div>
			</div>
			<p className="my-2 text-center">&copy;2022 LearnCode. All Rights Reserved by LearnCode.</p>
		</div>
	);
}

export default Footer;

const footerItems = [
	'Start here', 'Blogs', 'About us',
	'Succes story','Courses','Contact us',
	'Membership', 'Purchase guide', 'Privacy policy', 'Terms of services'
]
