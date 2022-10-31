import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Typography } from "antd";

const Footer: React.FC = () => {
	const { Title } = Typography;
	
	return (
		<div className="container mx-auto text-start py-5">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div>
					<Title level={4}>Address</Title>
					<div className="mt-4">
					<p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
					<p>
						+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)
					</p>
					<p>support@learncode.com</p>
					</div>
					<div className="flex gap-6">
						<FacebookFilled style={{ fontSize: '28px', color: '#aaa' }} />
						<TwitterSquareFilled style={{ fontSize: '28px', color: '#aaa' }} />
						<InstagramFilled style={{ fontSize: '28px', color: '#aaa' }} />
						<LinkedinFilled style={{ fontSize: '28px', color: '#aaa' }} />
					</div>
				</div>
				<div className="w-2/4 mx-auto">
					<Title level={4}>Explore</Title>
					<div className="flex items-center w-full gap-10 mt-4">
						<div>
							<p>Start here</p>
							<p>Blogs</p>
							<p>About us</p>
						</div>
						<div>
							<p>Succes story</p>
							<p>Courses</p>
							<p>Contact us</p>
						</div>
					</div>
				</div>
				<div className="w-1/3 mx-auto">
					<Title level={4}>Information</Title>
					<div className="mt-4">
					<p>Membership</p>
					<p>Purchase guide</p>
					<p>Privacy policy</p>
					<p>Terms of services</p>
					</div>
				</div>
			</div>
			<p className="my-2 text-center">&copy;2022 LearnCode. All Rights Reserved by LearnCode.</p>
		</div>
		
	);
}

export default Footer;