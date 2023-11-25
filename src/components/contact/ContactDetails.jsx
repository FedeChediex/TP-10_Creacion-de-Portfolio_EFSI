import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';


const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">

					<li className="flex " >
						<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
							<FiMapPin />
						</i>
						<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
							Ciudad de Buenos Aires, Argentina
						</span>
					</li>

					<li className="flex " >
						<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
							<FiMail />
						</i>
						<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
							chfedev@gmail.com
						</span>
					</li>

					<li className="flex " >
						<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
							<FiPhone />
						</i>
						<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
							+54 11 68684881
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
