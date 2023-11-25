import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
	console.log(project.image);
	const cardContent = (
		<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
			<div>
				<img
					src={project.image}
					className="rounded-t-xl border-none"
					alt="Single Project"
				/>
			</div>
			<div className="text-center px-4 py-6">
				<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
					{project.title}
				</p>
				<span className="text-lg text-ternary-dark dark:text-ternary-light">
					{project.category}
				</span>
			</div>
		</div>
	);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			{project.id === 8 ? (
				cardContent
			) : (
				<Link to="/projects/single-project" state={project} aria-label="Single Project">
					{cardContent}
				</Link>
			)}
		</motion.div>
	);
};

export default ProjectCard;
