
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';
import SocialSharing from '../data/SocialNetwork';
import { useLocation } from 'react-router-dom';


const ProjectSingle = () => {
	const location = useLocation();

	const Optionals = (paragraph) => (
		paragraph.match(/^\d/) || paragraph === 'Opcionales:' ? true : false
	)

	const project = location.state;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>

			<div>
				<div className="flex items-center justify-between mt-14 sm:mt-20 mb-7">
					<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-light ">
						{project.ProjectHeader.title}
					</p>
					<button className="bg-black text-white px-4 py-2 rounded hover:bg-primary-light transition duration-300 hover:underline "
						onClick={() => {
							window.location.href = project.url;
						}}>
						Ver Proyecto
					</button>
				</div>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

				<div className="mb-10 sm:mb-0" key={project.id}>
					<img
						src={project.image}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={project.title}
						key={project.id}
					/>
				</div>

			</div>
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							About Client
						</p>
						<ul className="leading-loose">

							<li
								className="font-general-regular text-ternary-dark dark:text-ternary-light"
								key={project.id}
							>
								<span>{project.CompanyInfo.title}: </span>
								{project.CompanyInfo.details}
							</li>

						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Objective
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Tools and Technologies
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.Technologies.techs.join(
								', '
							)}
						</p>
					</div>

					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Share This
						</p>
						<div className="flex items-center gap-3 mt-5">
							{SocialSharing.map(
								(social) => {
									return (
										<a
											key={social.id}
											href={social.url}
											target="__blank"
											aria-label="Share Project"
											className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
										>
											<span className="text-lg lg:text-2xl">
												{social.icon}
											</span>
										</a>
									);
								}
							)}
						</div>
					</div>
				</div>

				{/*  Single project right section */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						Challenge
					</p>

					<div className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
						{project.details.map((paragraph, index) => (
							<p key={index} style={{ marginBottom: Optionals(paragraph) || index === project.details.length - 1 ? '8px' : '25px' }}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>

		</motion.div>
	);
};

export default ProjectSingle;
