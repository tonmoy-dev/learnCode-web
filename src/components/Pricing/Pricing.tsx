import { BsCheck2Circle } from 'react-icons/bs';

const Pricing: React.FC = () => {
	return (
		<>
			<section>
				<div className="container max-w-full mx-auto py-24 px-6">
					<h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">Pricing</h1>
					<p className="text-center text-lg text-gray-700 mt-2 px-6">Choose a membership plan to get discount on the courses.</p>
					<div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
					<div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
						<div className="relative block flex flex-col md:flex-row items-center">
							{
								plans.map((plan, index) => (
									<div key={index} className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
										<div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
											<div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
												<h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">{plan.name}</h1>
												<h2 className="text-sm text-gray-500 text-center pb-6">${plan.price}/ {plan.duration}</h2>
												<p className=''>{plan.details}</p>
											</div>
											<div className="flex flex-wrap mt-3 px-6">
												<ul>
													{
														plan.features.map((feature, index) => (
															<li key={index} className="list-none">
																<p className="text-gray-700">
																	<BsCheck2Circle className="w-6 h-6 align-middle text-green-700 mr-2" /> {feature}
																</p>
															</li>
														))
													}
												</ul>
											</div>
											<div className="block flex items-center p-8  uppercase">
												<button className="mt-3 text-lg font-semibold 
bg-black w-full text-white rounded-lg 
px-6 py-3 block shadow-xl hover:bg-gray-700">Join Now</button>
											</div>
										</div>
									</div>
								))
							}
							
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Pricing;

const plans = [
	{
		name: 'Free',
		price: 0,
		duration: '',
		details: 'Check our Youtube tutorials and learn more.',
		features: [
			'Instant access to all courses','Early access to new courses','Access to free courses','Learn from free!'
		]
	},
	{
		name: 'Monthly Membership',
		price: 10,
		duration: 'month',
		details: 'Choose this most popular plan to learn more.',
		features: [
			'Instant access to all courses','Early access to new courses','Access to premium courses','Save over 55%!'
		]
	},
	{
		name: 'Yearly Membership',
		price: 99,
		duration: 'year',
		details: 'Choose this plan to learn from all premium courses.',
		features: [
			'Instant access to all courses','Early access to new courses','Access to premium courses','Save over 25%!'
		]
	},
]