import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FiHeart } from 'react-icons/fi';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const ProjectCard = ({ project }) => {
	const {
		handleFav
	} = useContext(FavoritesContext);





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
			{project.title === "Not Found" ? (

				cardContent

			) : (

				<div className="project-card">
					
					<Link to="/projects/details" state={project} aria-label="Single Project">
						{cardContent}
					</Link>
					<div className="fav-button">
						<Button onClick={() => handleFav(project)}>
							<FiHeart className="text-xl sm:text-2xl md:text-3xl text-white" />
						</Button>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default ProjectCard;


