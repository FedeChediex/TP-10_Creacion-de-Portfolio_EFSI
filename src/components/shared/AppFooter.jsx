
import AppFooterCopyright from './AppFooterCopyright';
import  SocialLinks  from '../../data/SocialNetwork';
import ContactForm  from '../contact/ContactForm';
import ContactDetails from '../contact/ContactDetails';	


const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{SocialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
				<ContactForm />
				<ContactDetails />
				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;